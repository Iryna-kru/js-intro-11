

/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/

const Book = require('./Book');
const Author = require('./Author');

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book(' A Storm of Swords', 'Epic Fantasy', 973);

const books = [book1, book2, book3];

const author = new Author('George R. R.', 'Martin', 'United States', books );

author. getFullName();



/*for ( let book of author.getBooks()) {
    console.log(book)
}
*/
author.getBooks().forEach(book => console.log(book));
           
/*Find and print the name of the Book which has more pages


const Book = require('./Book');
const Author = require('./Author');
const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694 );
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768 );
const book3 = new Book('A Strom of Swords', 'Epic Fantasy', 973 );

--------------------------------------------------------------------
let sortedBooks = author.getBooks().sort((a, b) => b.page - a.page); //
console.log(sortedBooks[0].title);
9:11
let maxPagesBook = author.getBooks()[0];
for (const book of author.getBooks()) {
    if (book.page > maxPagesBook.page) {
        maxPagesBook = book;
    }
}
console.log(`The book with the most pages is: ${maxPagesBook.title}`)
 */
