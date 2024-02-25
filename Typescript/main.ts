 //Task no 1
console.log("sucessfully installed Node.js and vs code");
 //Task no 2
let personName: string = "Eric";
console.log("Hello ${personName}, would you like to learn some python today?")
 //Task no 3
let personName: string = "Anna";

//in lowercase
console.log("lowercase:", personName.toLowerCase());

//in uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

titlecase
 console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
 //Task no 4
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log('$(author) once said, "$(quote)"');
 //Task no 5
let famous_person: string = "Albert Einstein";
let message: string ='$(famous_person) once said, "$(qoute)"';
console.log(message);
//Task no 6
 let personName : string = "\t\n   john Doe \n\t";
console.log("Original:", personName);
console .log("Strippted:", personName.trim());
// Task no 7,8
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

// Task no 9
let favoriteNumber: number = 4;
console.log ('My favorite number is ${favoriteNumber}.');

// Task no 10
author: [Anna]
 let date: [ Monday , february 16 , 2024]
// task 9: printing my favorite number.
let favoriteNumber: number = 4;

//reveling my favorite number in a message format.
console.log('my favorite number is ${favoriteNumber}.');

// // Task no 11
let names : string [] = ["Ali", "Maham","Muzamil" ,"Qasim"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// // //Task no 12
let names : string [] = ["Ali", "Maham","Muzamil" ,"Qasim"]

let message : string = "Do you like to play football?"
console.log(names [0] + " "+ message )
console.log(names [1] + " "+ message )
console.log(names [3] + " "+ message )
console.log(names [4] + " "+ message )

// // //Task no 13
let transportation : string [] = ["Honda motorcycle" , "Audi" , "Honda city"];
transportation.map((items) => console.log (`I would like to own a ${items}`));
// // //Task no 14
let gestArr : string [] = ["Ali", "Maham","Muzamil" ,"Qasim"]

gestArr.map((items) => (console.log('Dear ${items} , you are invited to the dinner')));

// // //Task no 15
let guestArr : string[] = ["Haseeb" , "Maham" , "Ali" , "Hamza"];
let canNotAttend : string = "Haseeb"

console.log(canNotAttend + " " + "can not attend the dinner.")

let newGuest : string = "alishba"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

console.log(guestArr)

guestArr.map((items) =>
console.log("Dear $[items], you are invited the dinner."));

//Task no 16
let guestArr : string[] =["Alishba", "Haseeb", "Ali", "Hamza" ]

let canNotAttend : string = "Ali"

let newGuest : string = "Wajhat"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

//guestArr.map(items) =>
//console.log('Dear ${items}, I found a bigger dinner table so i am invited more peoples.')

//part 2
let guestBeg : string = "MUizz"
guestArr.unshift(guestBeg);
console.log(guestArr)

//part no 3 middle
let middleGuest : string = "Fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)

//part 4 append
guestArr.push("Zeeshan")
console.log(guestArr)

//part 5
guestArr.map((items)=>
console.log (`Dear ${items}, you are invited in the more people list on dinner`)) 

// // //Task no 17
//initial list of guests
let guests: string[] = ["Ali" , "Fatima" , "Carry" , "sara" , "sana"];

// Informing that only two people can be invited
console.log("Due to limited space< only two people can be invited for dinner.");

//Removing guest until only two names remain
 while (guests.length > 2){
const removedGuest =guests.pop();
    console.log(`sorry, $(removedGuest), you are no longer invited to dinner.`)
 }
 // printing invitation to the remaining two guests
 guests.forEach((guest) => {
   console.log(`Dear ${guest}, you are still invited to dinner.`);
 });

//Removing the last5 two names from the list
guests.pop();
guests.pop();

//printing the final list to confirm it's empty
console.log("Final guest list:", guests); 

// // //Task 18
//store the locations in an array
let placesToVisit : string[] = ["Turkey" , "Pakistan", "America" , "China" , "Japan"];

// print the array in its original order
console.log("original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:",[...placesToVisit].sort());

// show that array is still in its original order
console.log("original order after sorting:", placesToVisit);

// print the array in reverse alphabetical order without changing the order of the
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// show that the array is still in its original order
console.log("original order after sorting:", placesToVisit);

//Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// // sort the array in alphabetical order
placesToVisit.sort();
console.log("sorted in alphabetical order:", placesToVisit);

// sort the array in reverse alphabetical order
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placesToVisit);

// // //Task no 19
let invitations : string [] = ["ali" , "fatima"]
let count_invitations : number = invitations.length

console.log(`${count_invitations} people will come to the dinner`)

// // //Task no 20
let country: string [] = ["Pakistan" ,"India" , "NewYork" ,"Japan" , "China"];
console.log("List of country:");
console.log(country);

// // //Task no 21
let person: {name: string, fname: string , age: number} = {name: "anna", fname: "female", age: 16}
console.log(person)

// // //Task no 22
const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log(days{7})
console.log(days[6])
//Task no 23
let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car =='subaru')

console.log("is car != 'honda city'? predict true")
console.log(car != 'honda city')

console.log("is car == 'subaru'? predict false")
console.log(car == 'subaru')

console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is 50 > 45 ? predict true")
console.log(50 > 45)

console.log("is 10 < 40 ! predict true")
console.log (10 < 40)

console.log("is 10 > 90 ? predict false")
console.log(10 > 90)

console.log("is 9 > 66 ? predict false")
console.log(9 > 66)

console.log("is 72 > 63 & predict false")
console.log(72 > 63)

console.log("is 3 <- 2 $ predict false")
console.log(3 <= 2)

//Task no 24
//test for equality and inequality withy strings.
let name_1 : string = "fatima"
let name_2 : string = "fatima khan"
let name_3 : string = " miss fatima khan"

if (name_1 == name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

if (name_1 == name_2){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

//tests using the lower case function
if (name_1 == name_3){
    console.log("names are equal")
}

 //Numerical tests involving equality and inequality, greater tha and less than, greater than or equal to, and less than or equal to.
 let age_1 : number = 18
 let age_2 : number = 22

 if (age_1 == 18) {
     console.log("eligible for vote")
 }

 if (age_1 != 22) {
     console.log("eligible for vote in older category")
 }

 if (age_1 <= age_2){  //less
    console.log("younger")
 }

 if (age_2 <= age_1){  //greater
     console.log("older")
 }

 if (age_1 == 18 && age_2 == 22){
     console.log("person is eligible for vote")
 }

 if (age_1 == 18 || age_2 == 22){
    console.log("person is eligible not for vote")
 }

 let country : string [] = ["Pakistan","India","Japan","China"]
 if (country.includes("Pakistan")){
    console.log("Pakistan is in country list")
 }

 if(!country.includes ("america")){
    console.log("america is not include in an array")
 }


 //Task no 25
 let alien_color : string = "green"

 if (alien_color == "green")
console.log("you earn 5 points")

 let alien_color : string = "red"
if (alien_color == "green")
console.log("no output")

//Task no 26
let alien_color = "green"

 if (alien_color == "green") {
     console.log("player just earned 5 points for shooting the alien")
 } else(
 console.log("player just earned 10 points")
 )

 let alien_color = "red"

 if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien")
 } else(
console.log("player just earned 10 points")
 )

//Task no 27

 let alien_color: string = "green"
 if (alien_color == "green"){
     console.log("5 points")
 } else if (alien_color == "yellow") {
        console.log("10 points")
 } else {
    console.log("15 points")
}

//Task no 28 ..............2, 4, 13, 20, 65, older let age : number = 18

 if (age < 2) {
    console.log ("you are a baby")
 } else if (age < 4) {
    console.log("you are a toddler")
 } else if (age < 13) {
    console.log("you are a kid")
 } else if (age < 20) {
     console.log("you are a teenager")
 } else if ( age < 65) {
   console.log("you are a adult ")
 } else {
    console.log("you are older")
 }

 //Task no 29 really like bananas

 let favorite_fruits : string [] = ["Kiwi","orange","apples"]

 if(favorite_fruits.includes("kiwi")) {
     console.log("kiwi")
}

 if (favorite_fruits.includes("apple")) {
      console.log("apple")
 }

  if (favorite_fruits.includes("orange")) {
      console.log("orange")
 }

 if (favorite_fruits.includes("berry")) {
     console.log("you really like bananas")
 }

 if(favorite_fruits.includes("apple")) {
      console.log("you are really like bananas")
 }

// //Task no 30
 let users : string []  = ["admin","eric","haseeb","ali","fatima"]

 for(let user of users) {
     if (user === "admin") {
        console.log("Hello admin ,would you like to see a report?")
     } else {
         console.log(`Hello ${user}, thank you for logging in again`)
     }
}
//Task no 31
let users : string [] = ["eric","haseeb","ali","fatima","admin"]

if (users.length === 0) {
    console.log ("we need to find some users!")
} else {
    for (let user of users) {
        if ( user === "admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, thank you for logging in again`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log("we need to find some users!")
}

//Task no 32
let current_users : string [] = ["Admin", "Eric", "Ali", "Hamza", "Fatima"]
let new_users : string[] = ["admin", "fatima", "Aliza", "Haseeb", "Noor"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still in available list`)
    }
    
}

//Task no 33
let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers ) {

if (number === 1) {
    console.log (`${numbers}st`)
} else if (number === 2) {
    console.log (`${numbers}nd`)
} else if (number === 3) {
    console.log (`${numbers}rd`)
} else {
    console.log (`${numbers}th`)
} 
}

//Task no 34
let favorite_pizza : string [] = ["pepperoni" , "chicken" , "veg"]

for (let pizza of favorite_pizza) {
    console.log(pizza)
}

console.log ("\n")

for (let pizza of favorite_pizza){
    console.log(`I really like ${pizza} pizza!`)
}

console.log ("nI really love pizza!")

//task no 35
let animals : string [] = ["cat","lion","dog"]

for (let animal of animals) {
    console.log(animal)
}
console.log ("\n")


for (let animal of animals){

    console.log (`A ${animal} has a long tail`)
}
//Task no 36
function makeShirt(size: string, text: string): void {
    console.log(`\n you order a ${size} shirt that says ${text}`)
}

makeShirt(`large`,`"i love typescript"`)
makeShirt(`medium`,`"i love typescript"`)

//Task no 37
 function makeShirt(size: string = `large`, text: string = `I love typescript`): void {
     console.log(`you have order a ${size}, shirt that says ${text}`)
 }

 makeShirt();
 makeShirt(`medium`)

 //different message
 makeShirt(`small`,`I need a big shirt to wear`)

//Task no 38
 function describe_city(city: string, country: string = `Pakistan`): void {
     console.log(`${city} is in ${country}`)
}

describe_city(`karachi`)
 describe_city(`france`, `europe`)
 describe_city(`lahore`, `is in punjab`)

//Task no 39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`
}

let c1 = cityCountry(`lahore`, `Pakistan`)
let c2 = cityCountry(`tokoyo`, `Japan`)
let c3 = cityCountry(`paris`, `France`)

console.log(c1)
console.log(c2)
console.log(c3)

//Task no 40
function makeAlbum (artist: string, title: string): { artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + artist.slice(1)
      };
      return dictionaries;
}

let album = makeAlbum("ali", "light")
console.log(album)

album = makeAlbum("bilal", "red wave")
console.log(album)

album = makeAlbum("hamza", "seenbreez")
console.log(album)

//Task no 41
function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["ali","hamza","bilal"];
show_magicians(magician)

//Task no 42
function make_great(magicians: string[]): void {

    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great'

    }
}

const magicians2: string[] = ["usman","haseeb","wajahat"];
make_great(magicians2)
show_magicians(magicians2)

//Task no 43
function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great') 

    }
    return greatMagicians;
}

const magicians3: String[] = ["usman","haseeb","wajahat"]


const greatMagicians2: string[] = make_great2(magicians2);
show_magicians(magicians2);
show_magicians(greatMagicians2);

//Task no 44
function sandwich(...items: string[]): void {
    console.log("sandwich order:")

    for(let i =0; i < items.length; i++) {

console.log(`- ${items[i]}`)

        
    }
}

console.log("enjoy your sandwich Annashra")

sandwich('capsicum', 'tomato', 'chicken')
sandwich('beef', 'cheese')
sandwich('garlic chicken', 'mayo sauce')

//Task no 45
type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model;
        ...optional
    }
}

const mycar: car = createCar("toyota", "corolla", { color: "silver" , year: "2024"})
console.log(mycar)



