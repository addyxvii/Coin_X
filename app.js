$(function() {
  console.log($.fn.jquery);
  var bitCoinInput= document.querySelector('.bitCoinAmount');
  // parseFloat (Math.round(bitCoinAmount * 100) / 100).toFixed(2);
  var bitCoinAmount= bitCoinInput.value;
  bitCoinInput.addEventListener("keyup", function(){
    var bitCoinAmount= bitCoinInput.value;
    $.post( "https://cex.io/api/convert/BTC/USD", {amnt: bitCoinAmount}, function( data ) {
       console.log(data);
       appendRateToUSD(data);
    });
  });
var USDInput= document.querySelector('.USDAmount');
USDInput.addEventListener("keyup", function(){
  var USDAmount= USDInput.value;
  $.post( "https://cex.io/api/convert/USD/BTC", {amnt: bitCoinAmount}, function( data ) {
    //  console.log(data);
     appendRateToBTC(data);
  });
});

var appendRateToUSD = function(data){
  var $USD= $('.USDAmount');
  console.log($USD);
    $USD.attr("value", data.amnt);
};
var appendRateToBTC = function(data){
  var $BTC= $('.bitCoinAmount');
    console.log($BTC);
    $BTC.attr("value", data.amnt);
};
});
