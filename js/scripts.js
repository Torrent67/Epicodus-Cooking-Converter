
var unit= prompt ("Enter quart or cup");
var amount = prompt("Enter amount");

if (unit=="quart") {
var gal = (amount/4) + " gallons";
  alert (gal);
} else if (unit=="cup"){
  var floz = (amount*8)+" fluid ounces";
  alert (floz)
} else {
  alert ("You did not indicate 'quart' or 'cup'.")
}
