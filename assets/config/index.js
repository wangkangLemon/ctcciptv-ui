'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
let fs=require('fs')
let apiConfig=require('./config')
let runENV=process.env.RUN_ENV
module.exports = {
	dev: {
        env:require('./dev.env'),
		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			
		},
		// Various Dev Server settings
		host: '192.168.40.94', // can be overwritten by process.env.HOST
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: true,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,
		cssSourceMap: true,
		get apiHost() {
			return process.env.MOCK_ENV ? this.apiMockHost : apiConfig.API_HOST_DEV
		},
		get apiMockHost() {
			return JSON.stringify(`${apiConfig.API_HOST_MOCK}:${this.port}`)
		}
	},

	build: {
		env: require('./prod.env'),
		// Template for index.html
		index: path.resolve(__dirname, '../../public/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../../public'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',

		/**
		 * Source Maps
		 */

		productionSourceMap: true,//如果设置为false减少内存80%
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report,
		//获取接口地址
		apiHost:runENV=='dev'? apiConfig.API_HOST_DEV : apiConfig.API_HOST_PROD
	}
}