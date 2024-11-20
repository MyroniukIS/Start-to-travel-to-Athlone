'use strict';

/*  CHANGE THE FORMAT CARD NUMBER*/
var number = document.forms["buy-a-trip-form"]["CardNumber"];
// var number = document.getElementById("#CardHolder");

    number.addEventListener('input', function(e) {
        this.value = numberAutoFormat();
    
        //show error when is different of 16 numbers and 3 white space
        // let error = this.value.length !== 19;
        // let alert2 = document.getElementById('alert-2');
        // showError(alert2, error);
    
        number.textContent = this.value;
    });


function numberAutoFormat() {
    let valueNumber = number.value;
    // if white space change to ''. If is not a number between 0-9 change to ''
    let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // the value got min of 4 digits and max of 16
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (let i = 0; i < match.length; i += 4) {
        // after 4 digits add a new element to the Array
        // e.g. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        // add a white space after 4 digits
        return parts.join(' ');
    } else {
        console.log(valueNumber.length);
        return valueNumber;
    }
};