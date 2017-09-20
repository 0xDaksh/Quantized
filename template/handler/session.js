import expressSession from 'express-session'
import sockSession from 'express-socket.io-session'

let sess = expressSession({
    secret: Math.random().toString(26).substr(2, 5),
    resave: true,
    saveUninitialized: true
})

export default (app, io) => {
	app.use(sess)
	io.use(sockSession(sess, {
		autoSave: true
	}))
}