let response: any ="42"
let numericLength:number = (response as string).length

type Book = {
    name:string;

};

let bookString = '{"name":"mistake of my life"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);
