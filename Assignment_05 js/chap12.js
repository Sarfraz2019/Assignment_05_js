// ques = 01 
document.write("<h2>QUESTION # 01</h2>")

var character = prompt("Enter Any character")
// if (character == character.toUpperCase()) {
//     document.write("Your character is upper case")
// }
// else if (character == character.toLowerCase()) {
//     document.write("Your character is lower case")

// }

// else if(character === Number){
//     document.write("Your character is number")
// }

// or 

if(character>="a" && character<= "z"){
   document.write("The given letter is lower case")
}
else if (character>="A" && character<="Z")
{
    document.write("The given letter is  upper case")

}
else{
    document.write("The given character is number")
}     

// ques = 02 
document.write("<h2>QUESTION # 02</h2>")

var integer1 = +prompt("Enter first Integer")
var integer2 = +prompt("Enter second Integer")

if (integer1 > integer2){
    document.write("The larger integer is: "+integer1 + "<br>")
}

else if (integer2 > integer1){
    document.write("The larger integer is: "+integer2 + "<br>")
}

else if ( integer1 == integer2){
    document.write("The Both " + integer1 + " & "+ integer2 +" integer is Equal to each other"+ "<br>")
}

// ques = 03
document.write("<h2>QUESTION # 03</h2>")


var check = +prompt("Enter Anu number to check number")
if (check > 0){
    document.write("The given number is Positive")
}
else if (check < 0){
    document.write("The given number is negative")
}
else if (check == 0){
    document.write("The given number is equal to Zero")
}
else{
    document.write("Wrong Entry!")
}

// ques = 04
document.write("<h2>QUESTION # 04</h2>")

var vowels = prompt("Enter Any vowel character")

if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u" ){
    document.write("True")
}
else{
    document.write("False")
}


// ques = 05
document.write("<h2>QUESTION # 05</h2>")

var pass = "pajero";

var passRquired = prompt("Enter password")


if (passRquired === pass){
    document.write("“Correct! The password you entered matches the original password")

}
else if (passRquired === ""){
    alert("Please enter your password")
}
else{
    alert("Incorrect password")
}

// ques = 06
document.write("<h2>QUESTION # 06</h2>")

var greeting; 
var hour = 13;
 if (hour < 18) {
     greeting = "Good day";
  }
   else {
       greeting= "Good evening";
    } 
 
// ques = 07
document.write("<h2>QUESTION # 07</h2>")

var time = +prompt("Ebter time in 24 hours format");

if(time == 1900){
    document.write("Good Evening!")
}
else if(time >= 0000 && time < 1200){
    document.write("Good Morning!")
}
else if(time >= 1200 && time < 1700){
    document.write("Good Afternoon!")
}
else if(time >= 1700 && time < 2100){
    document.write("Good Evening!")
}
else if(time >= 2100 && time <= 2359){
    document.write("Good Night!")
}

