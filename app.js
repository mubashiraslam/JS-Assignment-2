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

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage;
// for(var i=0;i<message.length;i++){
//     if(message.slice(i,i+3) === "and"){
//         message = message.slice(0,i) + "&" + message.slice(i + 3);
//     };
// };
// alert(message);


// Chapter 21-25 Task #9

// var stringNum = "472";
// document.write("Value: " + stringNum + "<br>");
// document.write("Type: " + typeof stringNum + "<br>");
// var stringToNum = +stringNum;
// document.write("Value: " + stringToNum + "<br>");
// document.write("Type: " + typeof stringToNum + "<br>");


// Chapter 21-25 Task #10

// var str3 = prompt("Enter any String");
// document.write("User input: "+str3+"<br>");
// var str3 = str3.toUpperCase();
// document.write("Upper case: "+str3+"<br>");


// Chapter 21-25 Task #11

// var str4 = prompt("Enter the Title");
// var FCStr4 = str4.slice(0,1);
// FCStr4 = FCStr4.toUpperCase();
// var OCStr4 = str4.slice(1);
// OCStr4 = OCStr4.toLowerCase();
// var titleStr4 = FCStr4.concat(OCStr4)
// document.write("User input: "+str4+"<br>");
// document.write("Title case: "+titleStr4);


// Chapter 21-25 Task #12

// var num = 35.36;
// var numString = num.toString();
// numString = numString.replace(".","");
// document.write("Number: "+num+"<br>");
// document.write("Result: "+numString+"<br>");


// Chapter 21-25 Task #13

// var username = prompt("Enter the username");
// for(var i=0;i<username.length;i++){
//     if(username[i] == "@" || username[i] == "." || username[i] == "," || username[i] == "!"){
//         alert("Please enter a valid username");
//         break;
//     };
// };


// Chapter 21-25 Task #14

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery, what do you want to order sir/ma'am?");
// search = search.toLowerCase();
// for(var i=0;i<A.length;i++){
//     if(A[i] === search){
//         document.write(search + " is <b>available</b> at index " + i + " in our bakery <br>");
//         break;
//     } else if(i<A.length){
//         if(A[i] === search){
//             document.write(search + " is <b>available</b> at index " + i + " in our bakery <br>");
//             break;
//         }
//     } else document.write("We are sorry. " + search + " is <b>not available</b> in our bakery <br>")
    
// };


// Chapter 21-25 Task #15

// var password = prompt("Enter your password");
// var passwordFC = password.slice(0,1);
// passwordFC = passwordFC.charCodeAt();
// if (passwordFC >= 48 || passwordFC <= 57){
//     alert("Password can not begin with a number");
//     password = prompt("Enter your password");
// } else if (password.length <= 5){
//     alert("Password should have at least 6 characters");
//     password = prompt("Enter your password");
// };
// document.write("Your Password: " + password);


// Chapter 21-25 Task #16

// var university = "University of Karachi";
// var universityLength = university.length;
// var universityArray = university.split("",universityLength);
// for(var i=0;i<universityArray.length;i++){
//     document.write(universityArray[i] + "<br>");
// };


// Chapter 21-25 Task #17

// var str5 = prompt("Enter any string");
// document.write("User input: " + str5 + "<br>");
// str5Length = str5.length;
// document.write("Last character of input: " + str5[str5Length-1]);


// Chapter 21-25 Task #18

// var text = "The quick brown fox jumps over the lazy dog";
// var count=0;
// document.write("Text: " + text + "<br>");
// for(var i=0;i<text.length;i++){
//     if(text.slice(i,i+3) == "the" || text.slice(i,i+3) == "The"){
//         count++;
//     };
// };
// document.write("There are " + count + " occurrence(s) of word 'The'");


