$(document).ready(function a(){

      $("#signupform").validate({
        rules:
        {
          nam:
         {
          required:true,
          minlength:3,
          maxlength:35
         },
         email:
         {
           required:true,
           email:true
         },
         phone:
         {
           required:true,
           number:true,
           minlength:10,
           maxlength:10
         },
         mess:
         {
           required:true,
           minlength:5,
           maxlength:200
         }
       },
  
       messages: {
        nam:
  {
    minlength:"Please enter your name"
  },
  phone:
  {
  
    minlength:"Please enter a valid number",
    maxlength:"Please enter a valid number"
  }
  
      }
  
      })
  document.getElementById("signupform").reset();
  })
  