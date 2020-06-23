// Chapter 21-25 Task #1

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// alert("Good Evening! " + fullName);


// Chapter 21-25 Task #2

// var favouriteMobile = prompt("Enter your Favourite Mobile's Name");
// var lengthOfFavouriteMobile = favouriteMobile.length;
// document.write("My favourite phone is: " + favouriteMobile + "<br>");
// document.write("Lenght of string: " + lengthOfFavouriteMobile);


// Chapter 21-25 Task #3

// var str = "Pakistani";
// var findN = str.indexOf("n");
// document.write("String: " + str + "<br>");
// document.write("Index of 'n': " + findN);


// Chapter 21-25 Task #4

// var str1 = "Hello World";
// var findLastL = str1.lastIndexOf("l");
// document.write("String: " + str1 + "<br>");
// document.write("Index of 'l': " + findLastL);


// Chapter 21-25 Task #5

// var str2 = "Pakistani";
// var temp = str2.charAt(3);
// document.write("String: " + str2 + "<br>");
// document.write("Character at index 3: " + temp);


// Chapter 21-25 Task #6

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" ",lastName);
// alert("Good Evening! " + fullName);


// Chapter 21-25 Task #7

// var city1 = "Hyderabad";
// var city2 = city1.replace("Hyder","Islam");
// document.write("City: "+city1+"<br>");
// document.write("After replacement: "+city2+"<br>")


// Chapter 21-25 Task #8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage;
for(var i=0;i<message.length;i++){
    newMessage = message.replace("and","&");
};
alert(newMessage);