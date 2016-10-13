define(function(require, exports, module){
	var IndexPage = {
		init: function(){
			$("#myButton").click(function(){
				alert('click')
			});
		},
		say: function(){
			alert("hello")
		}
	}
	// commonjs
	// 出口
	module.exports = IndexPage;
	// return IndexPage
})