define(function( require,exports,module ){
	// 同步加载
	var js1 = require('./html');
	module.exports = {
		sayHello: function(){
			console.log('say hello')
		}
	}
});