define(function(require, exports, module){
	// 面向对象
	var IndexPage = {
		alert:  function(msg){
			alert(msg+"from html.js");
		}
	}
	//对外暴露入口
	module.exports = IndexPage;
});