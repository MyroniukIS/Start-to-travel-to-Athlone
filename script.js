'use strict';

const travelButtons = document.querySelectorAll("#travel-btn-main");
const additionalTravelButtons = document.querySelectorAll("#travel-btn");

travelButtons.forEach(button => {
    button.onclick = function () {
        console.log(button);
        window.location.href = "./htmlPages/buyTrip.html";
    };
});
additionalTravelButtons.forEach(button => {
    button.onclick = function () {
        console.log(button);
        window.location.href = "../htmlPages/buyTrip.html";
    };
});

