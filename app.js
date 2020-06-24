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


// Chapter 26-30 Task #1

// var num = prompt("Enter a (+ve) number");
// var numberNum = Number(num);
// document.write("number: "+numberNum+"<br>");
// var roundOffNum = Math.round(num);
// document.write("round off value: "+roundOffNum+"<br>");
// var floorNum = Math.floor(num);
// document.write("floor value: "+floorNum+"<br>");
// var ceilNum = Math.ceil(num);
// document.write("ceil value: "+ceilNum+"<br>");


// Chapter 26-30 Task #2

// var num = prompt("Enter a (-ve) floating number");
// var numberNum = Number(num);
// document.write("number: "+numberNum+"<br>");
// var roundOffNum = Math.round(num);
// document.write("round off value: "+roundOffNum+"<br>");
// var floorNum = Math.floor(num);
// document.write("floor value: "+floorNum+"<br>");
// var ceilNum = Math.ceil(num);
// document.write("ceil value: "+ceilNum+"<br>");


// Chapter 26-30 Task #3

// var num1 = prompt("Enter a number");
// num1 = parseInt(num1);
// var absNum = Math.abs(num1);
// document.write("The absolute value of "+num1+" is "+absNum);


// Chapter 26-30 Task #4

// var tempDice = Math.random();
// var dice = (tempDice*6) + 1;
// dice = Math.floor(dice);
// document.write("Random Dice Value: "+dice+"<br>");


// Chapter 26-30 Task #5

// var randomNum = Math.random();
// var tempCoin = (randomNum*2) + 1;
// var coin = Math.floor(tempCoin);
// if (coin == 1){
//     document.write(coin + "<br> random coin value: Tails");
// } else document.write(coin + "<br> random coin value: Heads");


// Chapter 26-30 Task #6

// var randomNum = Math.random();
// var randomNum1 = (randomNum*100)+1;
// var finalNum = Math.floor(randomNum1);
// document.write("Random number between 1 and 100: "+finalNum);


// Chapter 26-30 Task #7


// var originalWeight = prompt("Enter your weight");
// weight = parseFloat(originalWeight);
// document.write("The weight of user is "+weight+" kilograms");


// Chapter 26-30 Task #8

// var randomNum = Math.random();
// var randomNum1 = (randomNum*10)+1;
// randomNum = Math.floor(randomNum1);
// var userNum = +prompt("Enter a number between 1 to 10");
// if (userNum == randomNum){
//     alert("Congratulate! your guess is correct");
// } else alert("Try again!");


// Chapter 31-34 Task #1

// var now = new Date();
// document.write(now);


// Chapter 31-34 Task #2

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var monthNum = now.getMonth();
// var currentMonth = monthNames[monthNum];
// document.write("Current month: "+currentMonth);


// Chapter 31-34 Task #3

// var now = new Date();
// var now = now.toString();
// var dayName = now.slice(0,3);
// document.write("Today is "+dayName);


// Chapter 31-34 Task #4

// var now = new Date();
// var day = now.getDay();
// if(day == 0 || day == 6){
//     document.write("It's Fun day");
// };


// Chapter 31-34 Task #5

// var now = new Date();
// var date = now.getDate();
// if(date >= 1 && date <= 15){
//     document.write("First fifteen days of the month");
// } else if (date >= 16 && date <= 31){
//     document.write("Last fifteen days of the month");
// };


// Chapter 31-34 Task #6

// var now = new Date();
// document.write("Current Date: "+now+"<br>");
// var MSeconds = now.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: "+MSeconds+"<br>");
// var minutes = MSeconds / (1000 * 60);
// document.write("Elapsed minutes since January 1, 1970: "+minutes+"<br>");


// Chapter 31-34 Task #7

// var now = new Date();
// var time = now.getHours();
// if (time >= 0 && time < 12){
//     document.write("Its AM");
// } else if (time >= 12 && time <= 23){
//     document.write("Its PM");
// };


// Chapter 31-34 Task #8

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: "+laterDate);


// Chapter 31-34 Task #9

// var ramadan1st = new Date("June 18, 2015");
// var passedDays = ramadan1st / (1000 * 60 * 60 * 24);
// passedDays = Math.floor(passedDays);
// document.write(passedDays+" days have passed since 1st Ramadan, 2015");


// Chapter 31-34 Task #10

// var now = new Date();
// document.write("On  reference date "+now+"<br>");
// var date2020 = new Date("January 1, 2020");
// var diff = now.getTime() - date2020.getTime();
// var seconds = Math.floor(diff / 1000);
// document.write(seconds+" seconds had passed since beginning of 2020");


// Chapter 31-34 Task #11

// var now = new Date();
// document.write("Current date: "+now+"<br>");
// now.setHours( now.getHours() - 1 );
// document.write("1 hour ago, it was "+now+"<br>");



// Chapter 31-34 Task #12

// var now = new Date();
// document.write("Current date: "+now+"<br>");
// var year = now.getFullYear();
// var month = now.getMonth();
// var day = now.getDate();
// var backDate = new Date(year - 100, month, day);
// document.write("100 years back, it was "+backDate+"<br>");


// Chapter 31-34 Task #13

// var age = +prompt("Enter your age");
// document.write("Your age is "+age+"<br>");
// var now = new Date();
// var year = now.getFullYear();
// var month = now.getMonth();
// var day = now.getDate();
// var birthDate = new Date(year - age, month, day);
// var birthYear = birthDate.getFullYear();
// document.write("Your birth year is "+birthYear);


// Chapter 31-34 Task #14

// document.write("<h1> K-Electric Bill </h1>");
// var customerName = prompt("Enter Cutsomer Name");
// var now = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var monthNum = now.getMonth();
// var numberOfUnits = +prompt("Enter number of units");
// var chargesPerUnit = 16;
// document.write("Customer Name: "+customerName+"<br>");
// document.write("Month: "+monthNames[monthNum]+"<br>");
// document.write("Number of units: "+numberOfUnits+"<br>");
// document.write("Charge per unit: "+chargesPerUnit+"<br><br>");
// var netAmount = numberOfUnits * chargesPerUnit;
// var latePaymentCharge = 350;
// var latePayAmount = netAmount + latePaymentCharge;
// document.write("Net Amount Payable (within Due Date): "+netAmount+"<br>");
// document.write("Late payment surcharge: "+latePaymentCharge+"<br>");
// document.write("Gross Amount Payable (after Due Date): "+latePayAmount+"<br>");


// Chapter 35-38 Task #1

