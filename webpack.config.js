
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: path.join(__dirname, 'socrates'),
    entry: './assets/js/index.js',
    output: {
	path: path.resolve('./socrates/assets/webpack_bundles/'),
	filename: '[name] - [hash].js'
    },

    plugins: [
	new BundleTracker({filename: './webpack-stats.json'})
    ]
}
