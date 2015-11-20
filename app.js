$(function() {
  console.log($.fn.jquery);
  var bitCoinInput= document.querySelector('.bitCoinAmount');
  var USDInput= document.querySelector('.USDAmount');
  var currentRate
   $.post( "https://cex.io/api/convert/BTC/USD", {amnt: "1.0"}, function( data ) {
     console.log(data);
     currentRate=data.amnt
  });
  $('.calculator').click(function(){
    $('.form').toggle("slow", function(){
  });
});
    $('.coinx').click(function(){
      $('.nav').toggle("slow", function(){

      });
});
$(function() {
    $('.coinx').click(function() {
       $('.coinx').css('margin-top', '-=200px');
    });
});
    $('.convert').click(function(){
      $('.inputs').toggle("slow", function(){

      });
    });
  $.post("https://cex.io/api/price_stats/BTC/USD",{"lastHours": "5", "maxRespArrSize": 100}, function( data ){
    console.log(JSON.stringify(data));
    var prices=[]
    var dates=[]
    for(i=0;i<data.length; i++){
      console.log(data[i], i, data.length)
     dates.push(moment.unix(data[i].tmsp).format("M, D, YY, h:mm a"))
       prices.push(data[i].price)

    }
    $('.data').click(function(){
      createGraph(prices,dates).toggle("slow")
    });
  });
  // $.get("https://cors-anywhere.herokuapp.com/http://www.coinwarz.com/v1/api/profitability/?apikey=350bd3f6cbab4437b03603afa604b242&algo=sha-256", function( data ){
  //   console.log(JSON.stringify(data));
  // });
  var bitCoinAmount= bitCoinInput.value;
  bitCoinInput.addEventListener("keyup", function(){
    localStorage.setItem('Bitcoin Price', bitCoinAmount)
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
