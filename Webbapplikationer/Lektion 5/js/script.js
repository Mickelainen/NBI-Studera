alert("Script loaded");

let x = 5;

console.log(typeof x);

var y= null;
console.log(y); // skriver ut null
console.log(typeof y); //Skriver ut objekt


var y = 5;
console.log(y); //Skriver ut 5
console.log(typeof y) //skriver ut number

//Ternary

var z = y === 6 ? 0 : 1;
console.log(z);

let arr = [1, 2, 3, 4, , 5];


console.log("for (in array (let i = 0; i < arr.length; i++))")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("for (in array)")
for (let i in arr){   //samma sak som ovan
    console.log(arr[i])
}

console.log("for (of array)")
for (let i of arr) {
    console.log(i)
}

console.log("lambda (elem) => console.log(elem)")
arr.forEach((elem) => console.log(elem));

console.log("lambda (elem, i) => console.log(elem, i))")
arr.forEach((elem, i) => console.log(elem, i));

function greet(name) {
    return `Hello, ${name}!`;
}

let message = greet("Micke");
console.log(message);

const greeting = (name) => `hello, ${name}!`;
const greetingMessage = greeting("Jim");
console.log(greetingMessage);


function buttonAlert() {
    alert ("Button clicked!");
}

//Reagerar när användaren trycker på knappen med id #BtnAlert
document.querySelector("#BtnAlert").addEventListener("click", buttonAlert);

//Reagerar när användaren trycker på knappen med id #BtnAlert
document.querySelector("#BtnAlert").addEventListener("click", () => {
    alert ("button pushed");
} )

//Samma som ovan skrivet annorlunda
const alertBtn = document.querySelector("#BtnAlert");
alertBtn.addEventListener("click", buttonAlert);

//Event listener bubbling - bra för att ha på flera 
document.addEventListener('click', function (event) {
    if (event.target.classList.contains("btn")) {
        console.log("button clicked");
    }
})

// $ - Defineriera/aktivera Jquery, selector, vilket event vi letar efter, function
$("#BtnAlert").hover(buttonAlert);

// Kör koden efter sidan ha laddats klart
// $(document).ready(function () {
//     alert("Page loadad!");
// })
// Alternativ syntax
// $(function () {
//     alert("Page loadad!");
// });

// Flera eventListeners
$("p").on({
    click: function () {
        $(this).css("background-color", "red");
    },
    mouseenter: function () {
        $(this).css("background-color", "blue");
    },
    mouseleave: function () {
        $(this).css("background-color", "white");
    }
});

let value = 0;

function Addvalue() {
    if (value <= 9)
    value++;
}

function SubtractValue() {
    if (value > 0)
        value--;
       
}

function TotalValue() {
    alert(value)
}

const user = {
    name : "Micke",
    age: 38,
    teach: (className) => `I am teaching ${className}`
};

console.log(user.name);
console.log(user["name"]);

user.name = "John";
user["age"] = 22;

console.log(user.name);
console.log(user["age"]);
console.log(user.teach("Webb"));

class User {
    name;
    age;

        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
}

const newUser = new User("Micke", 38);

console.log(newUser);

// Hämtar alla button element
const tags = document.getElementsByTagName("button");
console.log(tags);

// Hämtar första elementet i klassen "newColor"
const selector = document.querySelector(".newColor");

// Hämtar alla elementet i klassen "newColor"
//const selector = document.querySelectorAll(".newColor") ;
console.log(selector);

// const parent = 
const parent = selector.parentElement;
console.log(parent);

// Hämtar alla "barn"
const children = document.querySelector("#main").children;
console.log(children);

//const p = selector.closest("")

// Hämtar efterföljande emelent på samma nivå
const next = document.querySelector(".newColor").nextElementSibling;
console.log(next)

//Hämtar föregående element, på samma nivå
const next2 = document.querySelector(".newColor").previousElementSibling;
console.log(next2)

// Infogar och skriver över i element som har id = "innerHTML"
document.querySelector("#innerHTML").innerHTML = "<h1>Hello World</h1><a href='http://github.com'>Github</a>";

const getattr = document.querySelector(".newColor").getAttribute("id");
console.log(getattr);

document.querySelector(".newColor").setAttribute("id", "newId");

document.querySelector(".newColor").classList.add("btn");
const classes = document.querySelector(".newColor").classList;
console.log(classes);

function testFunction(name) {
    console.log(`testfunction ${name}`);
}

// document
// .querySelector(".newColor")
// .setAttribute("onclick", `testfunction(${i})`)

// const c = document.querySelectorAll(".newColor");
// c.forEach((child, i) => child.setAttribute("onclick", `testfunction(${i})`));

// document.querySelector(".newColor").classList.toggle("btn");
// document.querySelector(".newColor").classList.toggle("btn");
// document.querySelector(".newColor").classList.toggle("btn");

let username = prompt("Enter your name ")
alert ("Welcome, " + username);

// Alla children till main
const mainChildren = document.querySelector("#main").children;
// mainChildren.forEach(child => console.log(child))
console.log(mainChildren);

const nextS = document.querySelector("button")
console.log(nextS.nextElementSibling);

// Hämtar alla element som har main som förälder
const inParent = document.querySelectorAll("main > h2");
console.log(inParent);

// Hämtar alla div element som är placerade direkt efter ett h2 element
const divsAfterh2 = document.querySelectorAll("h2+div");
console.log(divsAfterh2);

// Hämtar alla div-element som är placerade direkt efter ett h2-element, med samma föräldrar
const p2 = document.querySelectorAll("h2~div");
console.log(p2)

// Hämtar alla h2 innuti en div
const p3 = document.querySelectorAll("div h2");
console.log(p2)

// Hämtar alla button-element med namne showCountBtn
const showCountBtn = document.querySelectorAll("[name='showCountBtn]");





