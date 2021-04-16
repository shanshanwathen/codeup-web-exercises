"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const newUsers = users.filter(user => user.languages.length >= 3);
console.log(newUsers);

const emails = users.map(user => user.email);
console.log(emails);

const totalExperience = users.reduce((total, user) => (total + user.yearsOfExperience), 0);
console.log(totalExperience);

const longestEmail = emails.reduce((longest, email) => {
    if (email.length > longest.length) {
        longest  = email;
    }
    return longest;
}, "");
console.log(longestEmail);

let userNames = users.reduce((userNamesString, user) => {
    return userNamesString + user.name + ", ";
}, "Your instructors are: ");

userNames = userNames.slice(0, userNames.length - 2) + ".";
console.log(userNames);