

var formContactUS = document.getElementById("contact-us-form");
var nameFirst = document.getElementById("FirstName");
var nameLast = document.getElementById("LastName");
var email = document.getElementById("Email");
var phone = document.getElementById("PhoneNumber");
var message = document.getElementById("Message");

formContactUS.addEventListener('submit', function(event){
    // event.preventDefault();
    validateFormSubmit(event);
    
});

function validateFormSubmit(){
    if(nameFirst.value.trim() !== "" && email.value.trim() !== "" && message.value.trim() !== "") {
        alert(`Thank you, ${nameFirst.value} for your message! We will contact you soon!🤩 `);
    }
}



function validateForm(event) {
    // Assume the form is valid initially
    let isValid = true;

    // //REQUIRED - Check if the first name field is empty
    //  // Check if the first name is at least 2 characters
    // if (nameFirst.value.trim() !== "" ) {
    //     isValid = false;
    //     showError(nameFirst, 'First name is required. First name must be at least 2 characters long.');
    // }

    // || nameFirst.value.length < 2 

    //REQUIRED - Check if the email field is empty
    // if (!isRequired(email.value)) {
    //     isValid = false;
    //     showError(email, 'Email is required.');
    // }

    //REQUIRED - Check if the message field is empty
    if (!isRequired(message.value)) {
        isValid = false;
        showError('Message is required.');
    }


    // // Check if the last name is at least 2 characters
    // if (nameFirst.value.trim() !== "") {
    //     isValid = false;
    //     showError(nameLast, 'Last name must be at least 2 characters long.');
    // }

    // Validate the email format using a regex pattern
    // if (!validateEmail(email.value)) {
    //     isValid = false;
    //     showError('Invalid email format.');
    // }

    // Validate the phone format using a regex pattern
    if (!validatePhoneNumber(phone.value)) {
        isValid = false;
        showError('Invalid phone format.');
    }

    // Check if the message is at least 10 characters
    if (message.value.length < 2) {
        isValid = false;
        showError('Message must be at least 10 characters long.');
    }

    // If any field is invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }

    isValid = true;
    showError('');
    if (isValid){
       
        alert(`Thank you, ${nameFirst.value} for your message! We will contact you soon!🤩 `);
    }
    
}

// Function to validate email format using a regex pattern
// function validateEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

// Function to display error messages
function showError( message) {
   
    let errorBox = document.querySelector(".container-error-message");
    
    
    // Set the error message text
    errorBox.innerText = message;
    errorBox.className = 'error';
    // Insert the error message after the field
    // field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function isRequired(value) {
    return value.trim() !== "";
}


// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// function numberValidation(n) {

//     if (isNaN(n)) {
//         console.log("Please enter Numeric value");
//         return false;
//     } else {
//         console.log("Numeric value is: " + n);
//         return true;
//     }
// }     
