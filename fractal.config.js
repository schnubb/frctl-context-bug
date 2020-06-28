"use strict";
const path = require("path");

const fractal = module.exports = require('@frctl/fractal').create();

fractal.components.set('path', __dirname + '/components');

fractal.web.set('builder.dest', path.join(__dirname, '/static'));
