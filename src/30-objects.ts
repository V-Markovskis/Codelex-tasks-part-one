export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */

interface Book {
  title: string;
  author: string,
  pageCount?: number;
}

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

//const getTheTitles = (books: any[]) => {
  //return books.map(book => book.title);
//};

  //const getTheTitles = (books: Book[]) => {
  //const result: string[] = [];
  //books.forEach(book => result.push(book.title))
  //return result;

  const getTheTitles = (books: Book[]) => books.map(book => book.title)

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
