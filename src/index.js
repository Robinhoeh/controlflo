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










