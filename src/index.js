let userName = 'Robin';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

//=================


//Create a variable named isSoccerFan and set it equal to a boolean, based on your preference.

let isSoccerFan = false;

//2.Write an if/else statement that uses isSoccerFan as its condition. If it is true, then log, Goal!. If it is false, then log, No goal!.

if (isSoccerFan === true) {
	console.log('Goal!');
} else {
	console.log('No Goal!');
}

/*
All variables that have been created and set are truthy 
(and will evaluate to true if they are the condition of a control flow statement) 
unless they contain one of the seven values listed below:

false
0 and -0
"" and '' (empty strings)
null
undefined
NaN (Not a Number)
document.all (something you will rarely encounter)


let variableOne = 'I Exist!';
if (variableOne) {
// This code will run because variableOne contains a truthy value.
} else {
// This code will not run because the first block ran.
}

*/

let wordCount = 0;//falsey bcuz of 0
let wordCount = 1;//truthy because of 1

let favoritePhrase = '';//falsey cuz of empty string
let favoritePhrase = 'Puck time';//truthy cuz string is not empty 

//=====================

let isPhoneCharged = true; 
if (!isPhoneCharged) {//flips truthy to falsey
  console.log('Plug in your phone!');//wont run cuz its false
} else {
  console.log('No need to charge!');//wil run cuz its false
}

// ! - Swaps thruthiess and falsiness value

//====================

let favoritePhrase = 'hey now';//truthy

if (!favoritePhrase) {//! flips condition to read falsey
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');//SO..ELSE runs
}


//==============Comparison Operators

let hungerLevel = 10;
if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later');
}

//===========more comparison

let moonPhase = 'full';
if  ( moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf');
}

//==============

let moonPhase = 'solar eclipse';
if  (moonPhase === 'full') {
  console.log('Howl!');
  
} else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier');
  
} else if (moonPhase === 'mostly new') {
    console.log('Back on two feet');
  
} else {
    console.log('Invalid moon phase');
}

//============Logical Operators

let moonPhase = 'full';
let isFoggyNight = false;
if  (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!');
  
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
  
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
  
} else {
  console.log('Invalid moon phase');
}


//==========Ternary operators

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
// ? = if() {}
let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');
// : = else {}
}

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


//==========Eight Ball

let userName = '';//falsey variable
userName !== '' ? console.log(`Hello ${userName}`)//if userName is not falsey, log Hello
: console.log('Hello!');

let userQuestion = "Will I get a cool job soon?";
let randomNumber = Math.floor( Math.random() * 3 );
let eightBall = '';

if (randomNumber === 0) {
 eightBall = 'It is certain';
  
}else if (randomNumber === 1 ) {
eightBall = 'It is decidely so';

} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
}

//console.log(eightBall);

console.log(`You wanted to know ${userQuestion}. The answer is: ${eightBall}`);














