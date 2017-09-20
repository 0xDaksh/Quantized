require('babel-register')({
	presets: ['es2015']
})
var config = require('../handler/config')
var expect = require('chai').expect

describe('config', () => {
	it('should export a function', () => {
		expect(config).to.be.a('object')
	})
})