// function checkPhone(phone){
// 	return /^(1[3456789]\d{9})$/.test( phone );
// }
// function checkNumber(num){
// 	return /^\d*$/.test( num );
// } 
var util = {
	checkPhone: function(phone){
		return /^(1[3456789]\d{9})$/.test( phone );
	},
	checkNumber: function(num){
		return /^\d*$/.test( num );
	}
}