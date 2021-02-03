"use strict";
console.log("Hello from external JavaScript");

//alert
alert("Welcome to my Website!");

//prompt
var favoriteColor = prompt("What's your favorite color?");
alert(favoriteColor[0].toUpperCase() + favoriteColor.substring(1) + " is my favorite color too.");

//renting movies
var rentDaysOfM = prompt("How many days have you rented The Little Mermaid?");
var rentDaysOfB = prompt("How many days have you rented Brother Bear?");
var rentDaysOfH = prompt("How many days have you rented Hercules?");
var price = prompt("What's the price for each movie per day?");
var totalOwed = price * (Number(rentDaysOfM) + Number(rentDaysOfB) + Number(rentDaysOfH));
alert("You owe Movie Rental $" + totalOwed + ".");

//pay from work
var GooglePay = Number(prompt("How much does Google pay you?"));
var AmazonPay = Number(prompt("How much does Amazon pay you?"));
var FacebookPay = Number(prompt("How much does Facebook pay you?"));
var timeForGoogle = Number(prompt("How many hours did you work for Google?"));
var timeForAmazon = Number(prompt("How many hours did you work for Amazon?"));
var timeForFacebook = Number(prompt("How many hours did you work for Facebook?"));
var totalPay = GooglePay * timeForGoogle + AmazonPay * timeForAmazon + FacebookPay * timeForFacebook;
alert("You'll receive $" + totalPay + " this week.");

//student enrollment
var classIsFull = confirm("Is the class you are trying to join full?");
var scheduleConflict = confirm("Do you have a class at 9:00am?");
alert("You can join the class is a " + (!classIsFull && !scheduleConflict) + " statement.");

//product offer apply or not 1
var numberOfItems = Number(prompt("How many items are you buying?"));
var isOfferExpired = confirm("Is the offer expired?");
var premiumMember = confirm("Are you a premium member?");
var offerCanApply = (numberOfItems >= 2 || premiumMember === true) && !isOfferExpired === true;
if(offerCanApply === true){
    alert("Congrats, I'll apply the offer for you.");
}else{
    alert("I'm sorry that the product offer cannot be applied.");
}

//product offer apply or not 2
var numOfItems = Number(prompt("How many items are you buying?"));
var isOfferValid = confirm("Is the offer still valid?");
var premiumM = confirm("Are you a premium member?");
var canUseOffer = (numOfItems >= 2 || premiumM) && isOfferValid;
alert("You can use this offer is a " + canUseOffer + " statement.");






