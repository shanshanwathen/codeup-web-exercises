"use strict";

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made

function githubPromise(username) {
    return fetch(`https://api.github.com/users/${username}`, {headers: {'Authorization': githubToken}})
        .then(response => {return response.json()})
        .then(results => console.log(results.updated_at.split("T")[0]))
        .catch(error => console.log(`Promise rejected: 
    ${error}`));
}

githubPromise("shanshan-su");


function githubEventsPromise(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': githubToken}})
        .then(response => {return response.json()})
        .then(results => console.log(results[0].created_at.split("T")[0]))
        .catch(error => console.log(`Promise rejected: 
    ${error}`));
}

githubEventsPromise("shanshan-su");

// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// TODO:  As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

let wait = number => {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            if (number <= 1000) {
                resolve(`You'll see this after ${number / 1000} second.`);
            } else if (number > 1000) {
                resolve(`You'll see this after ${number / 1000} seconds.`);
            } else {
                reject(`Oops, something went wrong :(`);
            }
        }, number);
    });
}

wait(1000).then(message => console.log(`Promise resolved!
${message}`));

wait(3000).then(message => console.log(`Promise resolved!
${message}`));

wait().catch(message => console.log(`Promise rejected!
${message}`));


