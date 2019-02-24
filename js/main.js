// var nameUser = document.getElementById('fullname').value;









	function outputname() {
		let fullName = document.getElementById("fullname").value.trim();
		let email = document.getElementById("email").value.trim();
		let message = document.getElementById("message").value.trim();
		let errors = [];
			
		let data = {
			
		};
		 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

		if(fullName !== ''){
			data["Name"] = fullName;

		} else {
			errors.push('Full name is missing');
			
		}
		if(email !== ''){
			if(!filter.test(email)) {
				errors.push('Email is not correct') 
			} else {
				data["Email"] = email;
			}
		} else {
			errors.push('Email is missing');
		}

		if(message !== ''){
			data["Message"] = message;
			
		} else {
			errors.push('Message is missing');
			
		}
	

		if(errors == ''){ 
			console.log(data);
			document.getElementById('fullname').value="";
			document.getElementById('email').value="";
			document.getElementById('message').value="";
		} else {
			console.log(errors);
		}
		


		
	}
