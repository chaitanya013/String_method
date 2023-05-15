// let age =22;
// let year =2022;
// console.log(age,year);

// age = 30;
// console.log(age);


// strings
console.log('hello world');

let email = 'xyz@gmail.com';
console.log(email);


// strings concatenation
let firstname = 'Naruto'
let lastname = 'Uzumaki'

let fullname = firstname +' '+ lastname;
console.log(fullname);

// getting characters
console.log(fullname[0]);      //N
console.log(fullname[2]);      //r

// string length
console.log(fullname.length);   //14

// string method
console.log(fullname.toUpperCase());

let result = fullname.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

console.log(email.indexOf('@'));


// common string method
let mail = 'naruto123@gmail.com';
// let get = mail.lastIndexOf('o');
// let get = mail.slice(0,6);
let get = mail.replace('n','N');
console.log(get);
