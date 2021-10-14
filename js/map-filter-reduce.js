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

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const newUsers = users.filter(user => user.languages.length >= 3);
console.log(newUsers);

// TODO: Use .map to create an array of strings where each element is a user's email address

const emails = users.map(user => user.email);
console.log(emails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalExperience = users.reduce((total, user) => (total + user.yearsOfExperience), 0);
console.log(totalExperience);

const averageExperience = totalExperience / users.length;
console.log(averageExperience);

// TODO: Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        longest = user.email;
    }
    return longest;
}, "");
console.log(longestEmail);

//TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.  .map would be easier

// let userNames = users.reduce((userNamesString, user) => {
//     return `${userNamesString} ${user.name},`;
// }, "Your instructors are:").slice(0, -1) + ".";

// added another solution
let userNames = users.reduce((userNamesString, user, index) => {
    if (index < users.length - 1) {
        return `${userNamesString} ${user.name},`;
    }
    return `${userNamesString} ${user.name}.`;
}, "Your instructors are:");

console.log(userNames);

let mapJoinSolution = `instructors are: ${users.map(user => user.name).join(", ")}.`;

console.log(mapJoinSolution);

// Bonus
//TODO: Use .reduce to get the unique list of languages from the list of users.

const languages = users.reduce((languages,user) => {
    return languages.concat(user.languages);
}, []);

console.log(languages);

// const uniqueLanguages = languages.reduce((unique, language) => {
//         if (!unique.includes(language)) {
//             unique.push(language);
//         }
//     return unique;
// }, []);

let uniqueLanguages = users.reduce((unique, user) => {
    return user.languages.reduce((special, language) => {
        if (special.includes(language)) {
            return special;
        } else {
            return [...special, language];
        }
    }, unique);
}, []);

console.log(uniqueLanguages);