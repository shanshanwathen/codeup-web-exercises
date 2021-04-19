"use strict";

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made

// function githubPromise(username) {
//     return fetch(`https://api.github.com/users/${username}`, {headers: {'Authorization': githubToken}})
//         .then(response => {return response.json()})
//         .then(results => console.log(results.updated_at.split("T")[0]))
//         .catch(error => console.log(`Promise rejected:
//     ${error}`));
// }
//
// githubPromise("shanshan-su"); // the date form this function is from unclear event

function githubPromise(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': githubToken}})
        .then(response => {return response.json()})
        .then(githubEvents => {
            for (let githubEvent of githubEvents) { // use for loop to go through the data until we get the first/latest push event
                if (githubEvent.type === "PushEvent") {
                    console.log(githubEvent.created_at.split("T")[0]);
                    return githubEvent.created_at.split("T")[0];
                }
            }
        })
        .catch(error => console.log(`Promise rejected:
    ${error}`));
}

githubPromise("shanshan-su");

function githubEventsPromise(username) {
    let githubResponse = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': githubToken}});
    return githubResponse
        .then(response => {return response.json()})
        .then(githubEventData => { // use for loop to go through the data until we get the first/latest push event
            for (let githubEvent of githubEventData) {
                if (githubEvent.type === "PushEvent") {
                    return new Date(githubEvent.created_at);
                }
            }
        });
}

githubEventsPromise("shanshan-su").then(response => console.log(response));

// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// TODO:  As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

// let wait = number => {
//     return new  Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number <= 1000) {
//                 resolve(`You'll see this after ${number / 1000} second.`);
//             } else if (number > 1000) {
//                 resolve(`You'll see this after ${number / 1000} seconds.`);
//             } else {
//                 reject(`Oops, something went wrong :(`);
//             }
//         }, number);
//     });
// }
//
// wait(1000).then(message => console.log(`Promise resolved!
// ${message}`));
//
// wait(3000).then(message => console.log(`Promise resolved!
// ${message}`));
//
// wait().catch(message => console.log(`Promise rejected!
// ${message}`));


