'use strict';

function payment (){
    var cardHolder = document.forms["buy-a-trip-form"]["CardHolder"].value;
    var total = document.forms["buy-a-trip-form"]["TOTAL"].value;
    var cardNumber = document.forms["buy-a-trip-form"]["CardNumber"].value;
    
    var cvc = document.forms["buy-a-trip-form"]["CVC"].value;
    var expiration = document.forms["buy-a-trip-form"]["Expires"].value;
    var orderNum = document.forms["buy-a-trip-form"]["OrderNumber"].value;
    
    var error = "";

    if (cardHolder == "") {
        error += "Please enter your card holder name.\n";
    }

    if (total == "") {
        error += "Please enter your total cost of the trip.\n";
    }
    if (cardNumber.length !== 19) {
        error += "Please enter your card number.\n";
    }
    if (cvc == "") {
        error += "Please enter your CVC.\n";
    }
    if (expiration == "") {
        error += "Please enter your expiration bank card date.\n";
    }
    if (orderNum == "") {
        error += "Please enter your order number.\n";
    } 
    if (error != "") {
        alert(error);
        return false;
    }

    alert(`Thank you!\n ✅The payment is successful!\n We will contact you soon about the next step!🤩 `);

}

// errorBox.innerText = error;
// errorBox.className = 'error';
// setTimeout(3000);

function allLetterCH() { 
    var inputtxt = document.forms["buy-a-trip-form"]["CardHolder"];
  var letters = /^[A-Za-z_ ]+$/;
//   ^[a-zA-Z0-9_]*$

  if(inputtxt.value.match(letters)) {
//   alert('Your name have accepted : you can try another');
  return true;
  }
  else
  {
  alert('Please input alphabet characters only');
  return false;
  }
  }

  function allNumbers() { 
    var inputtxt = document.forms["buy-a-trip-form"]["OrderNumber"];
  var numbers = /^[0-9_ ]+$/;

  if(inputtxt.value.match(numbers)) {
  return true;
  }
  else
  {
  alert('Please input numbers only');
  return false;
  }
  }


