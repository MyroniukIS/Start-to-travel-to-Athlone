// 'use strict';

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
    // else if (!validateName(nameFirst)) {
    //     error += "Please enter a valid first name.\n";
    // }

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

    alert(`Thank you, ${nameFirst.trim()} for your message! We will contact you soon!🤩 `);
}

function validateEmail(email) {
    // var re = /\S+@\S+\.\S+/;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// function validateName(name) {
//     // var re = /^[a-zA-Z0-9 ]+$/;
//     // var re = /^[a-zA-Z ]+$/;

//     var re = /^[A-Za-z]+$/;
//     return name.value.match(re);
// }



function allLetterFN() { 
        var inputtxt = document.forms["contact-us-form"]["FirstName"];
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
function allLetterLN() { 
        var inputtxt = document.forms["contact-us-form"]["LastName"];
        var letters = /^[A-Za-z_ ]+$/;

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







       