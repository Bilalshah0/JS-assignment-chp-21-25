
//Q-1
/*
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome to our website.");
*/

//Q-2
/*
var model = prompt("What is your favorite mobile phone model?");
vat length = model.length;
document.write("The length of your favorite mobile phone model is: " + length);
*/

//Q-3
/*
var letter = "n";
var pakistan ="Pakistan";
var index = "Pakistani".indexOf(letter);

if (index === -1) {
  document.write(`letter is not found in the word "Pakistani.`);
} else {
  document.write("string :" + pakistan + "<br>" + "index of no `n`: " + index);
}
*/

//Q-4
/*
var letter = "l";
var word = "Hello World";
var lastIndex = word.lastIndexOf(letter);

document.write("string: " + word + "<br>" + "last index of letter " + letter + ": " + lastIndex);
*/

//Q-5

// var index = 3;
// var word = "Pakistani";
// var character = word.charAt(index);

// document.write("string: " + word + "<br>" + "character at index " + index + ": " + character);

//Q-6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Welcome to our website.");


 //Q-7
// var city = "Hyderabad";
// var newCity = city.replace("Islamabad");

// document.write("city: " + city + "<br>" +"Atfer replace: " + newCity);

//Q-8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// document.write("Original message: " + message + "<br>New message: " + newMessage);

//Q-9
// var stringNum = "472";
// var numberNum = Number(stringNum);

// document.write("Value: " + stringNum + "<br>Type: " + typeof stringNum + "<br><br>");
// document.write("Value: " + numberNum + "<br>Type: " + typeof numberNum);

//Q-10

// var userInput = prompt("Enter a word:");
// var upperCaseInput = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCaseInput);

//Q-11
// var userInput = prompt("Enter a word:");
// var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseInput);

//Q-12
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + numString);


//Q-14
// var bakeryItems = ["apple pie", "cookie", "chips", "pastries"];
// var userInput = prompt("Enter an item to search for in the bakery:");

// var isItemFound = false;
// for (var i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i].toLowerCase() === userInput.toLowerCase()) {
//     isItemFound = true;
//     document.write(userInput + " is available at index " + i + " in our bakery.");
//     break;
//   }
// }

// if (!isItemFound) {
//   document.write("We are sorry. " + userInput + " is not available in our bakery.");
// }

//Q-16
// var university = "University of Karachi";
// var universityArray = university.split("");
// for (var i = 0; i < universityArray.length; i++) {
//   document.write(universityArray[i] + "<br>");
// }

//Q-17
// var userInput = prompt("Enter a word:");
// var lastChar = userInput.charAt(userInput.length - 1);

// alert("Last character of input: " + lastChar);

//Q-18
// var text = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = 0;
// text = text.toLowerCase();
// var words = text.split(" ");
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === word) {
//     count++;
//   }
// }
// alert("Text: " + text + "\nThere are " + count + " occurrence(s) of word '" + word + "'");
