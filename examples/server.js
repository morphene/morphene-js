var morpheneJS = require('../lib');

morpheneJS.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

morpheneJS.api.getAccounts(['initwitness'], function(err, result) {
	console.log(err, result);
});

morpheneJS.api.getState('/', function(err, result) {
	console.log(err, result);
});

morpheneJS.api.streamOperations(function(err, result) {
	console.log(err, result);
});
