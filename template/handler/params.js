import compression from 'compression'
import favicon from 'serve-favicon'
import express from 'express'
import path from 'path'

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})
let resolve = file => path.resolve(__dirname, file),
	isProd = process.env.NODE_ENV === 'production'

module.exports = function(app) {
	app.use(compression({ threshold: 0 }))
	app.use(favicon(__dirname + '/../static/favicon.ico'))
	app.use('/static', serve('../static', true))
	app.use('/public', serve('../public', true))
	app.use('/static/robots.txt', serve('../robots.txt'))
	app.get('/sitemap.xml', (req, res) => {
	  res.setHeader("Content-Type", "text/xml")
	  res.sendFile(resolve('../static/sitemap.xml'))
	})
}