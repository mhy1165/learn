'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL:'"http://127.0.0.1:7703"',
  // uploadURL:'"http://127.0.0.1:7403"',
  //wsURL:'"http://115.233.221.131:25203"',
  // wsURL: '"http://127.0.0.1:7403"'
})
