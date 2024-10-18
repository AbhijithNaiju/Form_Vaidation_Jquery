$(document).ready(function() {

	$.validator.addMethod("passCheck", function(value) {
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/.test(value);
	}, 
	"Password must  contain at least one uppercase letter, one lowercase letter, one number, and one special character.");

	$('#myForm').validate({
		rules:{
			firstName:{
				required:true,
				minlength:4
			},
			emailAddress:{
				required:true,
				email:true
			},
			phoneNumber:{
				required:true,
				minlength:10,
				maxlength:10
			},
			gender:{
				required:true
			},
			device:{
				required:true
			},
			dob:{
				required:true
			},
			myPassword:{
				required:true,
				minlength:8,
				passCheck:true
			},
			confirmPassword:{
				required:true,
				equalTo:"#myPassword"
			}
		}
	});
});
