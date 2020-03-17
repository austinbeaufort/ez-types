#           	 ![ez-types logo](https://i.ibb.co/2hw6JkG/ez-types.png)

A simple non-invasive type checker.

## Installation

Using npm:
```
npm install ez-types
```
In Node.js:
```
const ez =  require('ez-types');
```
or
``` 
const { b, o, n, u, s, a, f, nul } = require('ez-types')
```

### Methods Available
____________________________________________
a(arg)    -> checks for array  
o(arg)    -> checks for object  
f(arg)     -> checks for function  
n(arg)    -> checks for number  
s(arg)     -> checks for string  
b(arg)    -> checks for boolean  
u(arg)   -> checks for undefined  
nul(arg) -> checks for null

### Usage:
```
const str = "hello world!"
console.log(s(str)); // =>   "hello world!"
console.log(n(str)); // => TypeError: Expected: String, Actual: number

const arr = [1,2,3]
console.log(a(arr)); // => [1,2,3]
console.log(o(arr)); // => TypeError: Expected: array, Actual: object
```

### Full Example:
Notes: 
Below I use the type check functions to clarify types that are not obvious.
Feel free to type check everything with the functions, or only what you desire.
It's user preference.
```
-- ROCK, PAPER, SCISSORS

const { input } = require('console-input')
const { randomChoice } = require('home-on-the-range')
const { cond } = require('hamda')
const { b, o, s } = require('ez-types')

 
function  main() {
const { userChoice, computerChoice } = getChoices()
const { win, tie } = getConditions(userChoice, computerChoice)
const message = `You => ${userChoice} vs. ${computerChoice} <= computerChoice: `
const result = s(message + cond(win, 'You Win!', tie, `Tie.`, 'Sorry, you lose!'))

return  result;
}


function  getChoices() {
const userChoice = s(input('Choose your weapon: ').toLowerCase())
const computerChoice = s(randomChoice(['rock', 'paper', 'scissors']))

return  o({ userChoice , computerChoice })
}


function  getConditions(item, compItem) {
const win = b(makeWinConditions(item, compItem))
const tie = b(makeTieCondition(item, compItem))

return  o({ win, tie })
}

  
function  makeWinConditions(item, compItem) {
const wc1 = item === 'paper' && compItem === 'rock'
const wc2 = item === 'scissors' && compItem === 'paper'
const wc3 = item === 'rock' && compItem === 'scissors'
const win = wc1 || wc2 || wc3

return  b(win)
}


const  makeTieCondition = (item, compItem) =>  b(item === compItem)


console.log(main())
```