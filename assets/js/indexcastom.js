$(function(){
	validetion();

   
	$(document).on("keyup",".userNameReg",function(){
		formValid();
	});
	$(document).on("keyup",".emailReg",function(){
		formValidemail();
	});
	$(document).on("keyup",".phone",function(){
		formValidMobile();
	});
	$(document).on("keyup",".passwordReg",function(){
		formValidPass();
	});
	$(document).on("keyup",".repeatPass ,.passwordReg ,.phone ,.emailReg,.userNameReg",function(){
		repeatPass();
	});
	
	
	
});
flag=false;
function validetion(){
$('#submitReg').prop('disabled',true);
}
function formValid(){

	 var username = $('.userNameReg').val(),
	 regExp = /^([A-Za-z0-9]{5,8})$/;
if(username == ''){
	$('#useralert').html(" <label id='userAvalReg'>please enter username</label>");
       $('#userAvalReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#userNameReg').css({
       	'border':'1px solid red'

       });
}else{
	if (username.match(regExp)) {
	var username = $('.userNameReg').val();
    $.ajax({
     url:'index.php/welcome/userDetails',
     method: 'post',
     data: {username: username},
     dataType: 'json',
     success: function(response){
      var len = response.length;

      if(len > 0){
       // Read values
       var uname = response[0].username;
 
       $('#useralert').html(" <label id='userAvalReg'>This userename is alredy Taken,Please try again</label>");
       $('#userAvalReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#userNameReg').css({
       	'border':'1px solid red'

       });
 
      }else{
       $('#useralert').html("<label id='userAvalReg'>This userename is available</label>");
        $('#userAvalReg').css({
       	'color':'green',
       	'font-size':'11px'
       });
        $('#userNameReg').css({
       	'border':'1px solid green'

       });
        flag = true;
      }
 
     }
   });
   }else{
	$('#useralert').html(" <label id='userAvalReg'>Use Only Characters and Nunbers and 5 to 8 in Length</label>");
       $('#userAvalReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#userNameReg').focus();
       $('#userNameReg').css({
       	'border':'1px solid red'

       });
       flag = false;
}
}
return flag
}

function formValidemail(){
	var fetchUsername= formValid();
	var fetchUsername = $('.userNameReg').val()
	if (fetchUsername  && fetchUsername!='') {

		 var email = $('.emailReg').val(),
	 regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(email== ''){
	$('#usermailalert').html(" <label id='usermailReg'>Please Enter E-mail</label>");
       $('#usermailReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#emailReg').css({
       	'border':'1px solid red'

       });
}else{
	if (email.match(regExp)) {
	var email = $('.emailReg').val();
    $.ajax({
     url:'index.php/welcome/useremail',
     method: 'post',
     data: {email:email},
     dataType: 'json',
     success: function(response){
      var len = response.length;

      if(len > 0){
       // Read values
       var uname = response[0].email;
 
       $('#usermailalert').html(" <label id='usermailReg'>This E-mail is alredy registered,Please try again</label>");
       $('#usermailReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#emailReg').css({
       	'border':'1px solid red'

       });
 
      }else{
       $('#usermailalert').html("<label id='usermailReg'>This E-mail is available</label>");
        $('#usermailReg').css({
       	'color':'green',
       	'font-size':'11px'
       });
        $('#emailReg').css({
       	'border':'1px solid green'

       });
        flag = true;
      }
 
     }
   });
   }else{
	$('#usermailalert').html(" <label id='usermailReg'>Use valid mail (eg:booktrain@train.com)</label>");
       $('#usermailReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#emailReg').css({
       	'border':'1px solid red'

       });
       flag = false;
}
}
	}else{
		alert('Please Fill With Valid Data')
		$("#emailReg").val('');
		$("#useralert").html('');
		$("#userNameReg").focus()
	}
	return flag
}

//mobile valid
function formValidMobile(){
	var fetchMobile= formValidemail();
	var email = $('.emailReg').val() ;
	if (fetchMobile && email!='') {

		 var phone = $('.phone').val(),
	 regExp =/^([0-9]{10,10})$/,
	 getVal= phone.charAt(0) ;
if(phone== ''){
	$('#usephonealert').html(" <label id='userPhoneReg'>Please Enter Phone No</label>");
       $('#userPhoneReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#phone').css({
       	'border':'1px solid red'

       });
}else{
	if (phone.match(regExp) && (getVal ==9||getVal ==8||getVal ==7||getVal ==6)) {
	var phone = $('#phone').val();
    $.ajax({
     url:'index.php/welcome/userphone',
     method: 'post',
     data: {phone:phone},
     dataType: 'json',
     success: function(response){
      var len = response.length;

      if(len > 0){
 
       $('#usephonealert').html(" <label id='userPhoneReg'>This Phone is alredy regestered,Please try again</label>");
       $('#userPhoneReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#phone').css({
       	'border':'1px solid red'

       });
 
      }else{
       $('#usephonealert').html("<label id='userPhoneReg'>This Mobile No is Available</label>");
        $('#userPhoneReg').css({
       	'color':'green',
       	'font-size':'11px'
       });
        $('#phone').css({
       	'border':'1px solid green'

       });
        flag = true;
      }
 
     }
   });
   }else{
	$('#usephonealert').html(" <label id='userPhoneReg'>Use valid Moible No (eg:9876543210)</label>");
       $('#userPhoneReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#phone').css({
       	'border':'1px solid red'

       });
       flag = false;
}
}
	}else{
		alert('Please Enter  Valid Data ')
		$("#phone").val('');
		$("#usermailalert").html('');
		$("#emailReg").focus()
	}
	return flag
}

function formValidPass(){

	var formValid= formValidMobile();
	var phone = $('.emailReg').val(),
		 pass = $('.passwordReg').val(),
	  number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters =/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!*^?](?=.*[\+\-\_\@\#\$\%\&])/;
	if (formValidMobile && phone!='') {
if(pass== ''){
	$('#userPassalert').html(" <label id='userPassReg'>Please Enter Password</label>");
       $('#userPassReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#passwordReg').css({
       	'border':'1px solid red'

       });
}else{
	if (pass.length<=6){
		$('#userPassalert').html(" <label id='userPassReg'>Weak (should be atleast 6 characters.)</label>");
       $('#userPassReg').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#passwordReg').css({
       	'border':'1px solid red'

       });
        flag = true;
	}
	 if (pass.match(number) && pass.match(alphabets)&& pass.length>=8){
		$('#userPassalert').html(" <label id='userPassReg'>Medium (should include A,a,1,@ and at least 8 or more characters.)</label>");
       $('#userPassReg').css({
       	'color':'#FF0900',
       	'font-size':'11px'
       });
       $('#passwordReg').css({
       	'border':'1px solid #FF0900'

       });
       flag = true;
	}
	if (pass.match(special_characters) ){
		$('#userPassalert').html(" <label id='userPassReg'>Strong Password</label>");
       $('#userPassReg').css({
       	'color':'green',
       	'font-size':'11px'
       });
       $('#passwordReg').css({
       	'border':'1px solid green'

       });
       flag = true;
	}
}


	}else{
		alert('Please Enter  Valid Data ')
		$("#passwordReg").val('');
		$("#phone").html('');
		$("#phone").focus()
	}
}

function repeatPass(){
		var pass = $('.passwordReg').val(),
		  phone = $('.phone').val(),
		  email = $('.emailReg').val(),
		 username = $('.userNameReg').val(),
		 repPass=$('.repeatPass').val();
		 if (pass !='') {
		 	if (pass==repPass) {
        var regExpmob =/^([0-9]{10,10})$/,
          regExpmail =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
          regExpuser =/^([A-Za-z0-9]{5,8})$/;
		 		if (username.match(regExpuser)&& email.match(regExpmail) && phone.match(regExpmob) && passwordReg!='' ) {
		 			$('#userRePassalert').html(" <label id='userRePassalert'>Password  Matched </label>");
      	 $('#userRePassalert').css({
       	'color':'green',
       	'font-size':'11px'
       });
       $('#passwordReg').css({
       	'border':'1px solid green'
		 	});
		 	$('#submitReg').prop('disabled',false);

		 		}else{
		 			$('#submitReg').prop('disabled',true);
		 		}

		 	}else{
		$('#userRePassalert').html(" <label id='userRePassalert'>Password Don't Match</label>");
      	 $('#userRePassalert').css({
       	'color':'red',
       	'font-size':'11px'
       });
       $('#passwordReg').css({
       	'border':'1px solid red'
		 	});


		 }
		}else{
		$("#passwordReg").val('');
		$("#repeatPass").html('');
		 }

}