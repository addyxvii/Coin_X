$(function() {
  var userEmail = document.querySelector('.userEmail');
  var userName = document.querySelector('.userName');
  var submitButton = document.querySelector('.submitButton');
  var emailSent = false;
  var bitCoinAmount = document.querySelector('.bitCoinAmount');
  var USDAmount = document.querySelector('.USDAmount');
  var userPrice = document.querySelector('.userPrice');
  var currentRate
  $.post("https://cex.io/api/convert/BTC/USD", {
    amnt: "1.0"
  }, function(data) {
    console.log(data);
    currentRate = data.amnt
  });

  function init() {
    if (localStorage["name"]) {
      $('.userName').val(localStorage["name"]);
    }
    if (localStorage["email"]) {
      $('.userEmail').val(localStorage["email"]);
    }
    if (localStorage["message"]) {
      $('.userPrice').val(localStorage["Bitcoin Alert"]);
    }
  }
  init();



  submitButton.addEventListener('click', function() {
    localStorage.setItem('Bitcoin amount', bitCoinAmount.value);
    localStorage.setItem("email", userEmail.value);
    localStorage.setItem("name", userName.value);
    localStorage.setItem("Bitcoin Alert", userPrice.value);
    localStorage.setItem('Bitcoin Price', USDAmount.value);
    if (userPrice.value <= currentRate) {
      sendEmail()
      emailSent = true;
    } else {
      console.log("already sent")
    }
  });

  var sendEmail = function() {
      $.post('http://mail.g15.xyz/send', {
        to: userEmail.value,
        subject: 'Bitcoin Price Alert',
        body: '1 Bitcoin now worth ' + currentRate
      }).done(function(data) {
        console.log(data)
      }).fail(function(error) {
        console.log(error)
      })
    }
    // var sendgrid  = require('sendgrid')("VM7FmJBQOK52w82_iDxgQ.Gd8pgznrMFfUFwVkxFmnh9qc3_lIjrM1bhVGt5lJDMI");
    // var payload   = {
    //   to      :  userEmail.value,
    //   from    : 'addisonbennett@gmail.com',
    //   subject : 'Price Alert',
    //   text    : 'Bitcoin has reached[currentRate]'
    // };
    // sendgrid.send(payload, function(err, json) {
    //   if (err) { console.error(err); }
    //   console.log(json);
    //
    //       });

  // });
});
