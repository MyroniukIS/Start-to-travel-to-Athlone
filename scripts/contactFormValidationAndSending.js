function validateForm() {
    var nameFirst = document.forms["contact-us-form"]["FirstName"].value;
    var nameLast = document.forms["contact-us-form"]["LastName"].value;
    var email = document.forms["contact-us-form"]["Email"].value;
    var phone = document.forms["contact-us-form"]["PhoneNumber"].value;
    var message = document.forms["contact-us-form"]["Message"].value;
    var error = "";

    if (nameFirst == "") {
        error += "Please enter your first name.\n";
    }

    if (email == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }

    if (message == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }

    alert(`Thank you, ${nameFirst} for your message! We will contact you soon!🤩 `);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


       
