$(document).ready(function(){
  var firstLiquid;
  var secondLiquid;
  var amount;

  var firstSolid;
  var secondSolid;
  var amount2;

  $("#converter").submit(function(event) {
    firstLiquid = parseFloat($("#unit1").val());
    secondLiquid = parseFloat($("#unit2").val());
    amount = parseFloat($("#amount1").val());
    var test = parseFloat(converter(firstLiquid, secondLiquid));
    $(".result").text(test);
    $(".result").show();
    event.preventDefault();
  });
    $("#converter2").submit(function(event) {
    firstSolid = parseFloat($("#unit3").val());
    secondSolid = parseFloat($("#unit4").val());
    amount2 = parseFloat($("#amount2").val());
    var test2 = parseFloat(converter2(firstSolid, secondSolid));
    $(".result2").text(test2);
    $(".result2").show();
    event.preventDefault();
  });
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
  } else {
    return amount;
  }
}
  var converter2 =function(firstSolid, secondSolid) {
    if (firstSolid==1 && secondSolid==2) {
      return amount2/16;
    }  else if (firstSolid===1 && secondSolid===3) {
    return amount2*28.35;
    } else if (firstSolid===2 && secondSolid===1){
    return amount*16;
    }else if (firstSolid===2 && secondSolid===3){
    return amount2*453.592;
    } else if (firstSolid===3 && secondSolid===1){
    return amount2/28.35;
    }else if (firstSolid===3 && secondSolid===2){
    return amount2/453.592;
    }else{
    return amount2;
    }
  }
})
