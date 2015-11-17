$(function() {
  console.log($.fn.jquery);
  var bitCoinInput= document.querySelector('.bitCoinAmount');
  var USDInput= document.querySelector('.USDAmount');
  var currentRate
   $.post( "https://cex.io/api/convert/BTC/USD", {amnt: "1.0"}, function( data ) {
     console.log(data);
     currentRate=data.amnt
  });
  var bitCoinAmount= bitCoinInput.value;
  bitCoinInput.addEventListener("keyup", function(){
    var bitCoinAmount= bitCoinInput.value;
    $.post( "https://cex.io/api/convert/BTC/USD", {amnt: bitCoinAmount}, function( data ) {
       console.log(data);
       appendRateToUSD(data);
    });
  });
USDInput.addEventListener("keyup", function(){
  var USDAmount= USDInput.value;
  var BTCAmount=(USDAmount / currentRate);
     appendRateToBTC({amnt:BTCAmount});

});

var appendRateToUSD = function(data){
  var $USD= $('.USDAmount');
  console.log($USD);
    $USD.val(data.amnt);
};
var appendRateToBTC = function(data){
  var $BTC= $('.bitCoinAmount');
    console.log($BTC);
    $BTC.val(data.amnt);
};

});
