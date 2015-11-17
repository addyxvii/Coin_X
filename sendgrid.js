$(function() {
var userEmail = document.querySelector('.userEmail')
var userName = document.querySelector('.userName')
var submitButton = document.querySelector('.submitButton')
var emailSent
// localStorage.setItem("email", userEmail)
submitButton.addEventListener('click', function(){
  console.log(userEmail.value);
  console.log(userName.value);
});
if(userPrice.value >= BTC && emailSent=1){
  sendEmail()
}else{
  console.log(error)
}
var sendEmail=(function(){
var sendgrid  = require('sendgrid')("VM7FmJBQOK52w82_iDxgQ.Gd8pgznrMFfUFwVkxFmnh9qc3_lIjrM1bhVGt5lJDMI");
var payload   = {
  to      :  userEmail,
  from    : 'addisonbennett@gmail.com',
  subject : 'Price Alert',
  text    : 'Bitcoin has reached $[]'
};
sendgrid.send(payload, function(err, json) {
  if (err) { console.error(err); }
  console.log(json);
});
   });
  });
