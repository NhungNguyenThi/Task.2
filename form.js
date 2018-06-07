function validation(){

	var user = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var confrmpassword = document.getElementById('passwordconfrm').value;
	var number = document.getElementById('numbermobile').value;
	var email = document.getElementById('emailid').value;

	if( user == "" ){
		document.getElementById('usernameid').innerHTML = "*Please fill the username";
		return false;
	}
	if(( user.length < 3) || (user.length > 20)){
		document.getElementById('usernameid').innerHTML = "*Please fill the username > 3 char";
		return false;
	}

	if(!isNaN(user)){
		document.getElementById('usernameid').innerHTML = "*Please enter character";
		return false;
	}

	if( password == "" ){
		document.getElementById('passwords').innerHTML = "*Please fill the password";
		return false;
	}

	if((password.length < 5) || (password.length > 20)){
		document.getElementById('passwords').innerHTML = "*Please fill the password between 5 and 20";
		return false;
	}

	if( password!=confrmpassword){
		document.getElementById('confrmpassword').innerHTML = "*Password are not matching";
		return false;
	}

	if( confrmpassword == "" ){
		document.getElementById('confrmpassword').innerHTML = "*Please fill the confrm paasword";
		return false;
	}

	if( number == "" ){
		document.getElementById('mobilenumber').innerHTML = "*Please fill the mobile number ";
		return false;
	}

	if(number.length<10 || number.length>11){
		document.getElementById('mobilenumber').innerHTML = "*Mobile number should be 10 digits";
		return false;
	}

	if(isNaN(number)){
		document.getElementById('mobilenumber').innerHTML = "*Mobile number should conatins only digits ";
		return false;
	}

	if( email == "" ){
		document.getElementById('emailids').innerHTML = "*Please fill the email id";
		return false;
	}


	if(email.indexOf('@') <= 0){
		document.getElementById('emailids').innerHTML = "*Please fill the email id i proper format @";
		return false;
	}

	if((email.charAt(email.length-4)!='.')){
		document.getElementById('emailids').innerHTML = " ** please fill the email id in proper format . ";
		return false;
	} 
}