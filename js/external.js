"use strict";
console.log("Hello from external JavaScript");

//alert
alert("Welcome to my Website!");

//prompt
var favoriteColor = prompt("What's your favorite color?");
alert(favoriteColor[0].toUpperCase() + favoriteColor.substring(1) + " is my favorite color too.");

//renting movies
var rentDaysOfM = prompt("How many days are you going to rent The Little Mermaid?");
var rentDaysOfB = prompt("How many days are you going to rent Brother Bear?");
var rentDaysOfH = prompt("How many days are you going to rent Hercules?");
var price = prompt("What's the price for each movie per day?");
alert(price * (Number(rentDaysOfM) + Number(rentDaysOfB) + Number(rentDaysOfH)));

//pay from work
var GooglePay = Number(prompt("How much does Google pay you?"));
var AmazonPay = Number(prompt("How much does Amazon pay you?"));
var FacebookPay = Number(prompt("How much does Facebook pay you?"));
var timeForGoogle = Number(prompt("How many hours did you work for Google?"));
var timeForAmazon = Number(prompt("How many hours did you work for Amazon?"));
var timeForFacebook = Number(prompt("How many hours did you work for Facebook?"));
alert(GooglePay * timeForGoogle + AmazonPay * timeForAmazon + FacebookPay * timeForFacebook);

//student enrollment
var classNotFull = true, scheduleNoConflict = true;
var canBeEnrolled = classNotFull && scheduleNoConflict;
alert("Student can be enrolled.");

//product offer apply or not
var numberOfItems = Number(prompt("How many items are you buying?"));
var isOfferExpired = confirm("Is the offer expired?");
var premiumMember = confirm("Are you a premium member?");
if((numberOfItems >= 2 || premiumMember === true) && !isOfferExpired === true){
    alert("I'll apply the offer for you.");
}else{
    alert("I'm sorry that the product offer cannot be applied.");
}






