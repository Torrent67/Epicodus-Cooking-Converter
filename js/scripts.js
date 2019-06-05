$(document).ready(function(){
  var firstLiquid;
  var secondLiquid;
  var amount;
  $("#converter").submit(function(event) {
    firstLiquid = parseFloat($("#unit1").val());
    secondLiquid = parseFloat($("#unit2").val());
    amount = parseFloat($("#amount1").val());
    var test = parseFloat(converter(firstLiquid, secondLiquid));
    $(".result").text(test);
    $(".result").show();
    event.preventDefault();
  })
    $("#converter2").submit(function(event) {
    firstLiquid = parseFloat($("#unit3").val());
    secondLiquid = parseFloat($("#unit4").val());
    amount = parseFloat($("#amount2").val());
    var test = parseFloat(conversion2(firstLiquid, secondLiquid));
    $(".result").text(test);
    $(".result").show();
    event.preventDefault();
  })

var converter= function(firstLiquid, secondLiquid) {
  if (firstLiquid===1 && secondLiquid===2) {
    return amount/8;
  } else if (firstLiquid===1 && secondLiquid===3) {
    return amount/32;
  } else if (firstLiquid===1 && secondLiquid===4) {
    return amount/128;
//Cups
  } else if (firstLiquid===2 && secondLiquid===1) {
    return amount*8;
  } else if (firstLiquid===2 && secondLiquid===3) {
    return amount/3.943;
  } else if (firstLiquid===2 && secondLiquid===4) {
    return amount/15.773;
//Quarts
  } else if (firstLiquid===3 && secondLiquid===1) {
    return amount*32;
  } else if (firstLiquid===3 && secondLiquid===2) {
    return amount*3.94;
  } else if (firstLiquid===3 && secondLiquid===4) {
    return amount/4;
//Gallons
  } else if (firstLiquid===4 && secondLiquid===1) {
    return amount*128;
  } else if (firstLiquid===4 && secondLiquid===2) {
    return amount*15.773;
  } else if (firstLiquid===4 && secondLiquid===3) {
    return amount*4;
  }
}
});
