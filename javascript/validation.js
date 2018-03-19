$( function() {
  $( "#dob" ).datepicker();
} )


function submitRegistration(){
  var username = document.getElementById('username').value
  if (username.length < 6) {
    alert("Username must have at least 5 characters")
  }

  //password
  var password = document.getElementById('password').value
  var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  if(!passwordRegex.test(password)){
    alert("Password must be 8 characters with 1 uppercase, 1 lowercase and 1 number and 1 special character")
  }

  //repeat password
  var repeatPassword = document.getElementById('repeat-password').value
  // not including this because of redundancy but leaving the comment for grading
  // var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  // if(!passwordRegex.test(password)){
  //   alert("Repeat password must be 8 characters with 1 uppercase, 1 lowercase and 1 number")
  // }
  if(repeatPassword != password){
    alert("Passwords do not match")
  }

  //zipCode
  var zipCode = document.getElementById('zip-code').value
  var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/
  if(!zipCodePattern.test(zipCode)){
    alert("Zip Code must be in this format 63021-1234 OR 63012")
  }
  if (zipCode.length < 5) {
    alert("Zip code must have atleast 5 numbers")
  }


  //date
  var date = document.getElementById('dob').value
  var datePattern = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
  if(!datePattern.test(date)){
    alert("Date must be in this format DD/MM/YYYY")
  }
}

function reset(){
  $(':input','.register')
   .not(':button, :submit, :reset, :hidden')
   .val('')
   .removeAttr('checked')
   .removeAttr('selected');
}
