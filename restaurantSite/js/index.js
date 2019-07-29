/*
Name: Jeremy Krovitz
Date Created: 7/27/2019
Most recent revision: 7/28/2019
*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function(){
  $("form").submit(function(){
    alert("Your form has been submitted successfully.");
  });
});
