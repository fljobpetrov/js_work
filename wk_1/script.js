"use strict";

let admin;
let name;

name = 'John';
admin = name;

console.log(`hello ${"name"}`);
console.log(typeof new Boolean(true));
//  alert(admin);

let persone = {
    name: "John",
    age: 25,
    isMarried: false    
}

console.log(persone["name"]);
console.log(persone.age);

let arr = ['plum.png', 'orange.png', 'apple.png'];

console.log(arr[2]);

let x = +"w123z";
console.log(typeof(x));
console.log(x);



let q;
let k;
let t;

q = prompt('Какое «официальное» название JavaScript?', '');

if (q == 'ECMAScript') {
    alert('Yes');
} else {
    alert('Не знаете? ECMAScript!');
}
