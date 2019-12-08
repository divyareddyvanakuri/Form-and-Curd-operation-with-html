
$(document).ready(function() {
    $("#back").click(function(){
            $("#form").show();
            $("#form1").hide();
            });
            $("#register").click(function(){
                $("#form").hide();
                $("#form1").show();
            });
            $("#submit").click(function() {
            var name = $("#name").val();
            var email = $("#email1").val();
            var password = $("#password1").val();
            var cpassword = $("#cpassword1").val();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            if (name == '' || email == '' || password == '' || cpassword == '') {
            alert("Please fill all fields...!!!!!!");
            } else if ((password.length) < 6) {
            alert("Password should atleast 6 character in length...!!!!!!");
            } else if (!(password).match(cpassword)) {
            alert("Your passwords don't match. Try again?");
            } else if(emailReg.test(email)){
                     alert("valid id")
            }else{
                alert("invalid id")
            }
            });
        
    });
    $(document).ready(function() {
    $("#login").click(function(){
            var email = $("#email").val();
            var password = $("#password").val();
            if( email =='' || password ==''){
            alert("Please fill all fields...!!!!!!");
            }  else if(email =='user@gmail.com' && password == '123456'){
                $(location).attr('href','curd.html');
            };
            });
    });
    
    
        
        