$(document).ready(function(){
  
});

// if (unit=="quart") {
// var gal = (amount/4) + " gallons";
//   alert (gal);
// } else if (unit=="cup"){
//   var floz = (amount*8)+" fluid ounces";
//   alert (floz)
// } else {
//   alert ("You did not indicate 'quart' or 'cup'.")
// }

var firstliquid = parseInt($(".panelLiquids#unit1").val());
var secondLiquid = parseInt($(".panelLiquids#unit2").val());

var conversion= function(firstLiquid, secondLiquid) {
  if (firstLiquid==1,secondLiquid==2) {
    return firstLiquid/8;
  } else if (firstLiquid==1,secondLiquid==3) {
    return firstLiquid/32
  } else if (firstLiquid==1,secondLiquid==4) {
    return firstLiquid/128;
  }
})
