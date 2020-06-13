// // // ques = 01 

// // document.write("<h2>QUESTION # 01 </h2>")
// // var city = prompt("Enter City name ")

// // if (city === "karachi"){
// //     document.write("Welcome to city of lights")
// // }

// // // ques = 02 
// // document.write("<h2>QUESTION # 02 </h2>")
// // var gender = prompt("Enter your Gender ")

// // if (gender === "male"){
// //     document.write(" Good Morning Sir.")
// // }
// // else if (gender === "female"){
// //     document.write("Good Morning Ma’am.")
// // }

// // // ques = 03 

// // document.write("<h2>QUESTION # 03 </h2>")

// // var trafic1 = prompt("Enter color of road traffic signal")

// // if (trafic1 === "Red"){
// //     document.write("Must Stop")
// // }
// // else if (trafic1 === "Yellow"){
// //     document.write("Ready to move")
// // }
// // else if (trafic1 === "Green"){
// //     document.write("Move now")
// // }
// // else{
// //     document.write("Wrong Signal Color")
// // }

// // // ques = 04 

// // document.write("<h2>QUESTION # 04 </h2>")

// // var fuel = +prompt("Enter Remaining fuel in the car in litres")

// // if (fuel < 0.25){
// //     document.write( "Please refill the fuel in your car" )
// // }
// // else{
// //     document.write("Fuel is enough to ride ")
// // }



// // ques = 05

// document.write("<h2>QUESTION # 05 </h2>")
// // a 
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// // b 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// //  c 
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }

// if (c === 14) {
//     alert("condition 4 is true");
// }

// // d 

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e 
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f 
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// // ques = 06

// document.write("<h2>QUESTION # 06 </h2>")

// var sub1 = +prompt("Enter marks of sub1 ")
// var sub2 = +prompt("Enter marks of sub2")
// var sub3 = +prompt("Enter marks of sub3")

// var total = +prompt("Enter total marks")
// var obtain = sub1 + sub2 + sub3;
// var percen = (obtain / total) * 100;
// document.write("<h2>Marks Sheet </h2>")
// if (percen >= 80) {
//     document.write("Total Marks: " + total + "<br>")
//     document.write("marks obtain: " + obtain + "<br>")
//     document.write("Percentage: " + percen + "%<br>")
//     document.write("Grade: A-one" + "<br>")
//     document.write("Remarks: Execellent" + "<br>")

// }
// else if (percen >= 70) {
//     document.write("Total Marks: " + total + "<br>")
//     document.write("marks obtain: " + obtain + "<br>")
//     document.write("Percentage: " + percen + "%<br>")
//     document.write("Grade: A" + "<br>")
//     document.write("Remarks: Good" + "<br>")

// }
// else if (percen >= 60) {
//     document.write("Total Marks: " + total + "<br>")
//     document.write("marks obtain: " + obtain + "<br>")
//     document.write("Percentage: " + percen + "%<br>")
//     document.write("Grade: B" + "<br>")
//     document.write("Remarks: You need to improve " + "<br>")

// }
// else if (percen >= 70) {
//     document.write("Total Marks: " + total + "<br>")
//     document.write("marks obtain: " + obtain + "<br>")
//     document.write("Percentage: " + percen + "%<br>")
//     document.write("Grade: Fail" + "<br>")
//     document.write("Remarks: Sorry" + "<br>")

// }

// // ques = 07

// document.write("<h2>QUESTION # 07 </h2>")
// document.write("<h2>Guess game </h2>")



//   // random value generated 
//   var y = Math.floor(Math.random() * 10 + 1); 
      
//   // counting the number of guesses 
//   // made for correct Guess 
// //   var guess = 1;
//   for (var guess=1 ; guess <=3 ; guess++){
//       var x = +prompt("Enter Guess number")

//   if(x === y) 
//    {     
//        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//                + guess + " GUESS "); 
//                break;
//    } 
//    else if(x > y) /* if guessed number is greater 
//                    than actual number*/ 
//    {     
      
//        alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
//    } 
//    else
//    { 
      
//        alert("OOPS SORRY!! TRY A GREATER NUMBER") 
//    }
//  }

// // ques = 08

// document.write("<h2>QUESTION # 08 </h2>")
// var divnum = +prompt("Enter Any number to check divisibility")

// if (divnum %3 ===0){
//     document.write("The given number is Divisible by 3")
// }

// else{
//     document.write("The given number is not Divisible by 3")
// }

// //ques = 09

// document.write("<h2>QUESTION # 09 </h2>")

// var even = +prompt("Enter Any number to check even or odd")

// if ( even%2 ===0){
//     document.write("The given number is even")
// }

// else{
//     document.write("The given number is odd")
// }

// //ques = 10

// document.write("<h2>QUESTION # 10 </h2>")
// var temp = +prompt("Enter temperature")

// if (temp >40){
//     document.write("It is too hot outside.")
// }

// else if (temp >30){
//     document.write("The Weather today is Normal.")
// }
// else if (temp >20){
//     document.write("Today’s Weather is cool.")
// }
// else if (temp >10){
//     document.write("OMG! Today’s weather is so Cool.")
// }

//ques = 11

document.write("<h2>QUESTION # 11 </h2>")

var val1 = +prompt("Enter First value")
var sign = prompt("Enter Your Operator Sign")
var val2 = +prompt("Enter Second value")


if (sign === '+'){
    result = val1 + val2
    document.write(  val1+sign +val2 + "="+ result)
}

if (sign === '-'){
    result = val1 - val2
    document.write(  val1+sign +val2 + "="+ result)
}

if (sign === '*'){
    result = val1 * val2
    document.write(  val1+sign +val2 + "="+ result)
}
if (sign === '/'){
    result = val1 / val2
    document.write(  val1+sign +val2 + "="+ result)
}
if (sign === '%'){
    result = (val1/val2) *100 + '%'
    document.write(  val1+sign +val2 + "="+ result)
}
