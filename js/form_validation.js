$(document).ready(function(){


	$("button").click(function(){
		var name_check=/[^a-zA-Z0-9\s]/;
		var email_match=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		var password_match_space=/\s/;
		var password_match_small_letter=/[a-z]/;	
		var password_match_capital_letter=/[A-Z]/;
		var password_match_special=/[^a-zA-Z0-9]/;
		var password_match_digit=/[0-9]/;

		let name = $("#first_name").val();
		let email= $("#email").val();
		let number= $("#number").val();
		let password= $("#password").val();
		let confirm_password= $("#confirm_password").val();
		let date= $("#date").val();

		if(name.length==0)
		{
			$( "#first_name_error" ).text("Please enter your first name");
		}
		else if(name_check.test(name))
		{
			$( "#first_name_error" ).text("Name should not contain any special charector");	
		}
		else
		{
			$( "#first_name_error" ).text("");
		}

		if(email.length==0)
		{
			$( "#email_error" ).text("Please enter the email");
		}
		else if(email_match.test(email)!=true)
		{
			$( "#email_error" ).text("Please enter a valid email");
		}
		else
		{
			$( "#email_error" ).text("");
		}

		if(number.length==0)
		{
			$("#number_error").text("Please enter the phone number");
		}
		else if(isNaN(number))
		{
			$("#number_error").text=("Please Enter a valid number");
		}
		else if(number.length!=10)
		{
			$("#number_error").text("Phone number must be 10 letters");
		}
		else
		{
			$("#number_error").text("");
		}

		if(password.length=0)
		{
			$("#password_error").text("Please enter the password");
		}
		else if(password_match_space.test(password))
		{
			$("#password_error").text("Password does not contain any whitespace");
		}
		else if(!password_match_small_letter.test(password))
		{
			$("#password_error").text("Password must contain 1 smaller case letter");
		}
		else if(!password_match_capital_letter.test(password))
		{
			$("#password_error").text("Password must contain 1 capital case letter");
		}
		else if(!password_match_special.test(password))
		{
			$("#password_error").text("Password must contain 1 special charector");
		}
		else if(!password_match_digit.test(password))
		{
			$("#password_error").text("Password must contain 1 digit");
		}
		else if(password.length<8)
		{
			$("#password_error").text("Password must be 8 charectors long");
		}
		else
		{
			$("#password_error").text("");
		}

		if(confirm_password.length==0)
		{
			$("#confirm_password_error").text("Please confirm your password");
		}
		else if(confirm_password != password)
		{
			$("#confirm_password_error").text("Passwords do not match");
		}
		else
		{
			$("#confirm_password_error").text("");
		}
		if(date=="")
		{
				$("#date_error").text("Please select your DOB");
		}
		else
		{
				$("#date_error").text("");
		}

		if($("#android:checked").length==0 && $("#other_device:checked").length==0 && $("#ios:checked").length==0)
		{
			$("#device_error").text("Please select your device type");
		}
		else
		{
			$("#device_error").text("");
		}
		if($("#male:checked").length==0 && $("#female:checked").length==0)
		{
			$("#gender_error").text("Please select your gender");
		}
		else
		{
			$("#gender_error").text("");
		}
	});


});


