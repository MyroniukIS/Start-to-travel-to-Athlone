function payment (){
    var cardHolder = document.forms["buy-a-trip-form"]["CardHolder"].value;
    var total = document.forms["buy-a-trip-form"]["TOTAL"].value;
    var cardNumber = document.forms["buy-a-trip-form"]["CardNumber"].value;
    var cvc = document.forms["buy-a-trip-form"]["CVC"].value;
    var expiration = document.forms["buy-a-trip-form"]["Expires"].value;
    var error = "";

    if (cardHolder == "") {
        error += "Please enter your card holder name.\n";
    }
    if (total == "") {
        error += "Please enter your total cost of the trip.\n";
    }
    if (cardNumber.length === 16) {
        error += "Please enter your card number.\n";
    }
    if (cvc == "") {
        error += "Please enter your CVC.\n";
    }
    if (expiration == "") {
        error += "Please enter your expiration bank card date.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }

    alert(`Thank you!\n ✅The payment is successful!\n We will contact you soon about the next step!🤩 `);

}