"use strict";
console.log("Hello from external JavaScript");

// //alert
// alert("Welcome to my Website!");
//
// //prompt
// const favoriteColor = prompt("What's your favorite color?");
// alert(favoriteColor[0].toUpperCase() + favoriteColor.substring(1) + " is my favorite color too.");
//
// //renting movies
// const rentDaysOfM = prompt("How many days have you rented The Little Mermaid?");
// const rentDaysOfB = prompt("How many days have you rented Brother Bear?");
// const rentDaysOfH = prompt("How many days have you rented Hercules?");
// const price = prompt("What's the price for each movie per day?");
// const totalOwed = price * (Number(rentDaysOfM) + Number(rentDaysOfB) + Number(rentDaysOfH));
// alert("You owe Movie Rental $" + totalOwed + ".");
//
// //pay from work
// const GooglePay = Number(prompt("How much does Google pay you?"));
// const AmazonPay = Number(prompt("How much does Amazon pay you?"));
// const FacebookPay = Number(prompt("How much does Facebook pay you?"));
// const timeForGoogle = Number(prompt("How many hours did you work for Google?"));
// const timeForAmazon = Number(prompt("How many hours did you work for Amazon?"));
// const timeForFacebook = Number(prompt("How many hours did you work for Facebook?"));
// const totalPay = GooglePay * timeForGoogle + AmazonPay * timeForAmazon + FacebookPay * timeForFacebook;
// alert("You'll receive $" + totalPay + " this week.");
//
// //student enrollment
// const classIsFull = confirm("Is the class you are trying to join full?");
// const scheduleConflict = confirm("Do you have a class at 9:00am?");
// alert("You can join the class is a " + (!classIsFull && !scheduleConflict) + " statement.");

//product offer apply or not 1
const numberOfItems = Number(prompt("How many items are you buying?"));
const isOfferExpired = confirm("Is the offer expired?");
const premiumMember = confirm("Are you a premium member?");
const offerCanApply = (numberOfItems || premiumMember) && !isOfferExpired;
if(offerCanApply === true){
    alert("Congrats, I'll apply the offer for you.");
}else{
    alert("I'm sorry that the product offer cannot be applied.");
}

//product offer apply or not 2
const numOfItems = Number(prompt("How many items are you buying?"));
const isOfferValid = confirm("Is the offer still valid?");
const premiumM = confirm("Are you a premium member?");
const canUseOffer = numOfItems >= 2 || premiumM && isOfferValid;
alert("You can use this offer is a " + canUseOffer + " statement.");






