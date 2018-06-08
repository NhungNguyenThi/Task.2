
function validation(){

	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var conpassword = document.getElementById('passwordconfrm').value;
	var number = document.getElementById('numbermobile').value;
	var email = document.getElementById('emailid').value;

	if(user == ""){
		document.getElementById('usernameid').innerHTML = "*Please fill the username";
		return false;
	}
	if((user.length < 3) || (user.length > 20)){
		document.getElementById('usernameid').innerHTML = "*Please fill the username between 3 and 20 char";
		return false;
	}

	if(!isNaN(user)){
		document.getElementById('usernameid').innerHTML = "*Please enter character";
		return false;
	}

	if(pass == ""){
		document.getElementById('passwords').innerHTML = "*Please fill the password";
		return false;
	}

	if((pass.length < 5) || (pass.length > 20)){
		document.getElementById('passwords').innerHTML = "*Please fill the password between 5 and 20";
		return false;
	}

	if(pass!=conpassword){
		document.getElementById('confrmpassword').innerHTML = "*Password are not same";
		return false;
	}

	if(conpassword == ""){
		document.getElementById('confrmpassword').innerHTML = "*Please fill the confirm paasword";
		return false;
	}

	if(number == ""){
		document.getElementById('mobilenumber').innerHTML = "*Please fill the number ";
		return false;
	}

	if(number.length < 10 || number.length > 11){
		document.getElementById('mobilenumber').innerHTML = "*Number should be 10->11 digits";
		return false;
	}

	if(isNaN(number)){
		document.getElementById('mobilenumber').innerHTML = "*Number should conatins only digits ";
		return false;
	}

	if(email == ""){
		document.getElementById('emailids').innerHTML = "*Please fill the email id";
		return false;
	}


	if(email.indexOf('@') <= 0){
		document.getElementById('emailids').innerHTML = "*Please fill the email id i proper format @";
		return false;
	}

	if((email.charAt(email.length-4)!='.')){
		document.getElementById('emailids').innerHTML = "*Please fill the email id in proper format";
		return false;
	} 
}