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
        .then(response => response.json())
        .then(githubEventData => {
            // use for loop to go through the data until we get the first/latest push event
            for (let githubEvent of githubEventData) {
                if (githubEvent.type === "PushEvent") {
                    return new Date(githubEvent.created_at);
                }
            }
        });
}

githubEventsPromise("shanshan-su").then(response => console.log(response));

function dateOfLastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
    Accept: "application/vnd.github.v3+json"
    }).then((eventRes) => {
        return eventRes.json().then((eventJson) => {
                // If the request was unsuccessful, throw the error object GitHub gave us.
                if (!eventRes.ok) throw eventJson;

                // Look for the first event that has the type "PushEvent"
                // Returns undefined if one isn't found.
                const lastPush = eventJson.find(event => event.type === "PushEvent");

            // No PushEvent was found... Abort!
                if (!lastPush) throw "Could not find last commit!";

                // #region Technically, this would be *more* correct
                // const commits = lastPush.payload.commits;
                // return fetch(commits[commits.length - 1].url, { headers }).then(
                //   (commitRes) =>
                //     commitRes.json().then((commitJson) => {
                //       if (!commitRes.ok) throw commitJson;
                //       return new Date(commitJson.commit.committer.date);
                //     })
                // );
                // #endregion

                // The created_at property is a string... Convert it to a date object and return it!
                return new Date(lastPush.created_at);
            })
        }
    );
}

dateOfLastCommit("shanshan-su").then(date => {
    // Create a nicely formatted date string
    const formattedDate = date.toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
    });

    console.log(`✔️ shanshan-su's last commit was made on ${formattedDate}`);
});

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


