miningCalculator= function(){
  var hashRate=document.querySelector('.hashRate');
  var power=document.querySelector('.power');
  var powerCost=document.querySelector('.powerCost');
  var bitcoinDifficulty=document.querySelector('.bitcoinDifficulty');
  var blockReward=document.querySelector('.blockReward');
  var hardwareCost=document.querySelector('.hardwareCost');
  "86,400"/bitcoinDifficulty.value * math.pow(2,32)/(hashRate * "1000");
};
