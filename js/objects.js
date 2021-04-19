(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: "Shanshan",
        lastName: "Su"
    };

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return `Hello from ${this.firstName} ${this.lastName}!`;
    }  // it's better to use this instead of person because if person is changed to another word, sayHello method will still work

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(shopper => {
        if (shopper.amount > 200) {
            shopper.amountAfterDiscount = (shopper.amount * (1 - .12)).toFixed(2);
            console.log(`Hello ${shopper.name}, you were originally going to pay $${shopper.amount}. Your discount is 12% and you'll only need to pay $${shopper.amountAfterDiscount}.`);
        } else {
            console.log(`Hello ${shopper.name}, your amount is $${shopper.amount}.`);
        }
    });

    // for (let shopper of shoppers) {
    //     if (shopper.amount > 200) {
    //         shopper.amountAfterDiscount = (shopper.amount * (1 - .12)).toFixed(2);
    //         console.log(`Hello ${shopper.name}, you were originally going to pay $${shopper.amount}. Your discount is 12% and you'll only need to pay $${shopper.amountAfterDiscount}.`);
    //     } else {
    //         console.log(`Hello ${shopper.name}, your amount is $${shopper.amount}.`);
    //     }
    // }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "The Lord Of the Rings",
            author: {
                firstName: "John",
                lastName: "Tolkien"
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "Things Fall Apart",
            author: {
                firstName: "Chinua",
                lastName: "Achebe"
            }
        },
        {
            title: "The Color Purple",
            author: {
                firstName: "Alice",
                lastName: "Walker"
            }
        },
        {
            title: "Invisible Man",
            author: {
                firstName: "Ralph",
                lastName: "Ellison"
            }
        },
        {
            title: "Pride and Prejudice",
            author: {
                firstName: "Jane",
                lastName: "Austen"
            }
        }
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for (let i = 0; i < books.length; i++) {
    //     console.log(`Book # ${i + 1}`);
    //     console.log(`Title: ${books[i].title}`);
    //     console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
    // }

    books.forEach((book, index) => {
        // console.log(`Book # ${index + 1}`);
        // console.log(`Title: ${book.title}`);
        // console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        // console.log("---");

        console.log(
`Book # ${index + 1}
Title: ${book.title}
Author: ${book.author.firstName} ${book.author.lastName}
---`);

    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        return {
            title: title,
            author: {
                firstName: author.split(" ")[0],
                lastName: author.split(" ")[1]
            }
        };
    }

    books = [
        createBook("The Lord Of the Rings", "John Tolkien"),
        createBook("To Kill a Mockingbird", "Harper Lee"),
        createBook("Things Fall Apart", "Chinua Achebe"),
        createBook("The Color Purple", "Alice Walker"),
        createBook("Invisible Man", "Ralph Ellison"),
        createBook("Pride and Prejudice", "Jane Austen")
    ];

    console.log(books);

    function showBookInfo(book, bookNumber) {
        console.log(`Book # ${bookNumber + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("---");
    }

    books.forEach((book, index) => showBookInfo(book, index));

})();