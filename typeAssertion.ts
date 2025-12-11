let response: any ="42"
let numericLength:number = (response as string).length

type Book = {
    name:string;

};

let bookString = '{"name":"mistake of my life"}';
let bookObject = JSON.parse(bookString) as Book
//forcefull assertion bhi humko dena padta hai like this-----as book
console.log(bookObject);



//never datatype in TS//

type Role = "admin"| "user"

function redirectBaseOnRole(role:Role):void {
    if (role === "admin"){
        console.log("Admin to  dashboard")
        return
    }
    if(role ==="user"){
        console.log("user to dashboard")
        return
    }
    role;
}
//====================//
const data:unknown = "chai aur code"
const strData: string = data as string


