'use strict';

const travelButtons = document.querySelectorAll("#travel-btn");
console.log(travelButtons);


travelButtons.forEach(button => {
    button.onclick = function () {
        console.log(button);
        window.location.href = "./htmlPages/buyTrip.html";
    };
});