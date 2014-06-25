


$(document).ready(function () {
	

	console.log("working");


$("#inputName").blur(function(){


	


	var nameTag = $('#inputName'),
	name = nameTag.val();


	if(name === "" || name === null){

		console.log('Empty name');
		$(".nameReduired").css("visibility","visible");
	}
	else if(name.length > 20 ){
		$(".nameWrong").css("visibility","visible");
		console.log('Name too long');
	}


	name = name.charAt(0).toUpperCase() + name.slice(1);

	console.log(name);

	nameTag.html = name;

	
	console.log("button");

}); //end of validating name

$("#inputEmail").blur(function(){

	var emailTag = $("#inputEmail"),
		email = emailTag.val();

	var re = /\S+@\S+\.\S+/;

		if(email === "" || email === null){
			$(".emadilReduired").css("visibility","visible");
			console.log("empty email");
		}
		else if(re.test(email)){
			console.log("correct email");
		}
		else
		{
			$(".emailWrong").css("visibility","visible");
			console.log("wrong email");
		}



	});//end of email validation


$("#inputPhone").blur(function(){
	var phoneTag = $("#inputPhone"),
		phone = phoneTag.val();

	var re = /\+91-\d{10}/;


	if(phone === null){
		$(".numberReduired").css("visibility","visible");
		console.log("no number");
	}
	else if(re.test(phone)){

		console.log("correct number");
	}
	else{
		$(".numberWrong").css("visibility","visible");
		console.log("Incorrect number");
	}
});//end of phone number validation

});//end of document.ready