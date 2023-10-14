//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }
]};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function displayFavDishes(person) {
    for (let key in person) {
        if (key === "shakes") {
            continue; 
        }

        if (Array.isArray(person[key])) {
            const dishes = person[key].map(dish => capitalizeFirstLetter(dish)).join(", ");
            console.log(`My favorite ${key}: ${dishes}`);
        } else if (typeof person[key] === "object") {
            console.log(`My favorite ${key}:`);
            for (let shop in person[key][0]) {
                console.log(`From  ${capitalizeFirstLetter(shop)} is: ${capitalizeFirstLetter(person[key][0][shop])}`);
            }
        } else {
            console.log(`My favorite ${key}: ${capitalizeFirstLetter(person[key])}`);
        }
    }
    if (person.shakes) {
        console.log("My favorite shakes:");
        for (let shop in person.shakes[0]) {
            console.log(`From  ${capitalizeFirstLetter(shop)} is: ${capitalizeFirstLetter(person.shakes[0][shop])}`);
        }
    }
}

displayFavDishes(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    this.addAge = () => {
        this.age += 1;
    };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

person2.addAge();
person2.addAge();
person2.addAge();

person1.printInfo();
person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(stringToCheck) {
    return new Promise((resolve, reject) => {
        if (stringToCheck.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("ThisIsABigWord")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

checkStringLength("SmallWord")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


// =============Exercise #4 ============//
//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
      
    if (Array.isArray(arr)) {
        return arr.sort((a, b) => a - b);
    } else {
        return [];
        }
}

// =============Exercise #5 ============//
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript


function longest(s1, s2) {
    const combinedString = s1 + s2;
    const distinctChars = combinedString.split('').filter((value, index, self) => self.indexOf(value) === index);
    const sortedString = distinctChars.sort().join('');
    return sortedString;
}
