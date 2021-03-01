Why Javascript?
Can be used on frontend and backend, only need to know one language

What is Javascript good/used for?
scripting
apis
microservices

How javascript is used in the front end
let's say we had a house:
html = structure/walls = structure of the house = layout of your website
css = paint/decorations = how the house looks = how your website looks to the user
javascript = electricity/appliances = how the user interact with your house

How javascript is used in the back end
Javascript can be used as a backend language for your server

How to run Javascript code in the backend
install node/npm
create index.js file
call node index.js
code gets executed from top down

early syntax hints
semicolons are optional (only need in very few occasions)
white space doesn't matter (prefer 2 spaces, though)
case-sensitive
try naming variables camel case (although it doesn't matter)

my first javascript program

create index.js file

copy code

```js
console.log("Hello World");
```

navigate to file

run `node index.js`

this will log "Hello World" to console. Not sure useful, but works!

assignment
var variable = 1 // reassignable
let otherVariable = 2 // reassignable as well (worry about it later)
const constant = 3 // is not reassignable

var reassignedVariable
oneMoreVariable = 1
oneMoreVariable = 2

const thisWillNotWork = 3
thisWillNotWork = 4 // won't work!

Data types
Javascript is a dynamically typed language. Has very few types as well.
const number = 31
const floatNumber = 3.14
const string = "Ronald"
const boolean = true
const obj = { name: "Ronald", age: 31, gpa: 3.14, isDeveloper: true }
const arrayVar = [1,2,3,4]
const func = function() { return 'stuff' }
const alsoFunc = () => 'stuff' // this one looks weird, but you'll use it more

// special ones
const undefinedVar = undefined
const nullVar = null
const notANumber = NaN

math

const perimeter = 4 + 4 + 2 + 2
const change = 100 - 4
const area = 4 \* 2
const numOfCookiesOnSheet = 16 / 4

const remainder = 6 % 4 // 2

// these guys return booleans, not numbers
const isBigger = 4 > 3
const isSmaller = 3 < 4

// incrementing and decrementing
const number = 2
const thatButBigger = number++
const thatButSmaller = number--

// assignment operators
let number = 5
number += 5 // rinse and repeat for all the other operators

// string stuff

const name = "Ronald"
const greeting = "Hello" + " " + "Ronald"
const otherGreeting = `Goodbye ${Ronald}`

const length = name.length // 6

// functions

const add = (a, b) => a + b
const add = () => {
return a + b
}
function add(a, b) {
return a + b
}

const sum = add(1, 2) // 3

// objects

const car = {
make: 'Toyota',
model: 'Camry,
drive: () => 'vroom vroom'
}

const person = {
name: 'Ronald',
age: 31,
car: car // can just do "car" for shorthand
}

console.log(person.name)
console.log(person["age"])
console.log(person.car.make)
console.log(person.car.drive())

// array stuff

const arrayStuff = [1,2,3]
const firstValue = array[0] // will be 1, array indexes are 0-based

arrayStuff.reverse() // this changes arrayStuff to [3,2,1]

const lastValue = array[2] // will also be 1 since we reverse
const lastValueAgain = array[array.length - 1] // array.length returns 3, subtract 1 to get to last item

array[0] = 4 // array is now [4,2,1]

const newArray = [1,2,3]
const secondNewArray = newArray.map(num => num \* 2) // returns [2,4,6]
const thirdNewArray = newArray.filter(num => num < 3) // returns [1,2]
const fourthNewArray = newArray.find(num => num > 2) // returns 3
const fifthNewArray = newArray.reduce((acc, num) => acc + num, 0) // returns 6 [complicated, don't worry about this yet]

newArray.push(4) // newArray is now [1,2,3,4]
const mergedArrays = [...secondNewArray, ...thirdNewArray] // makes [2,4,6,1,2] // also complicated, we'll worry about this later

// looping

const loopedArray = [1,2,3]

for (let index = 0; index < loopedArray.length, index++) {
console.log(loopedArray[index])
}

const newArray = []
for (let index = 0; index < loopedArray.length, index++) {
newArray.push(loopedArray[index] \* 2)
}

loopedArray.forEach(num => console.log(num))

// logical flow

const num = 5

if (num === 5) {
console.log('this is five!')
}

if (num < 2) {
console.log('smaller than 2')
} else if (num < 4) {
console.log('smaller than 4')
} else {
console.log('4 or larger')
} // will log '4 or larger'

// classes

class Car {
constructor(make, model) {
this.make = make
this.model = model
this.driving = false
this.speed = 0
}

    drive(speed) {
        if (!this.driving) { // this will trigger if driving is false
         this.driving = true
         this.speedTo(speed)
         console.log('vroom vroom')
        }
    }

    stop() {
        if (this.driving) {
            this.driving = false
            this.speedTo(0)
            console.log('stopping')
        }
    }

    speedTo(speed) {
        this.speed = speed
    }

    name() {
        return `${this.make} ${this.model}`
    }

}

const carInstance = new Car('Toyota', 'Camry')
console.log(carInstance.name()) // 'Toyota Camry'
carInstance.drive(40) // 'vroom vroom'
carInstance.stop() // 'stopping'

// importing and exporting

// data.js

const data = [1,2,3]
module.exports = data

// index.js
const data = require('./data')
console.log(data) // [1,2,3]
