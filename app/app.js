// default
require.context('./assets/', true)

// jquery
window.$ = window.jQuery = require('jquery')

// assets
require('stylesheets/application.sass')
require('javascripts/application.js')
