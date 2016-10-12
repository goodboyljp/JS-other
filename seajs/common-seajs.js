define(function(require, exports, module){
	var util = {
		checkPhone: function(phone){
			return /^(1[3456789]\d{9})$/.test( phone );
		},
		checkNumber: function(num){
			return /^\d*$/.test( num );
		}
	}
	module.exports = util;
});






