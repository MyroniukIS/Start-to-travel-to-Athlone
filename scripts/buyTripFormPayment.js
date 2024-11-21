'use strict';
var errorBox = document.querySelector(".container-error-message");
errorBox.innerText = "";
errorBox.className = 'container-error-message';

function payment (){
    var cardHolder = document.forms["buy-a-trip-form"]["CardHolder"].value;
    var total = document.forms["buy-a-trip-form"]["TOTAL"].value;
    var cardNumber = document.forms["buy-a-trip-form"]["CardNumber"].value;
    
    var cvc = document.forms["buy-a-trip-form"]["CVC"].value;
    var expiration = document.forms["buy-a-trip-form"]["Expires"].value;
    var orderNum = document.forms["buy-a-trip-form"]["OrderNumber"].value;
    
    var error = "";

    if (cardNumber.length !== 19) {
       
        error += "Please enter your valid card number.\n";
        
    }

    if (cardHolder == "") {
        error += "Please enter your card holder name.\n";
    }

    if (total == "") {
        error += "Please enter your total cost of the trip.\n";
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


    // errorBox.innerText = "";
    // errorBox.className = 'container-error-message';
    alert(`Thank you, ${cardHolder.trim()}!\n ✅The payment is successful!\n We will contact you soon about the next step!🤩 `);

}

function allLetterCH() { 
    errorBox.innerText = "";
    errorBox.className = 'container-error-message';

    var inputtxt = document.forms["buy-a-trip-form"]["CardHolder"];
    var letters = /^[A-Za-z_ ]+$/;
    //   ^[a-zA-Z0-9_]*$

  if (inputtxt.value.match(letters)) {
    return true;
  }
  else {
    errorBox.innerText ='Please input alphabet characters only';
    errorBox.className = 'error';
    setTimeout(3000);
    return false;
  }

  
  }

  function allNumbers() { 
    errorBox.innerText = "";
    errorBox.className = 'container-error-message';

    var inputtxt = document.forms["buy-a-trip-form"]["OrderNumber"];
    var numbers = /^[0-9_ ]+$/;

    if(inputtxt.value.match(numbers)) {
        return true;
    }
    else
    {
        errorBox.innerText ='Please input numbers only';
        errorBox.className = 'error';
        setTimeout(3000);
        return false;
    }
  }

  
