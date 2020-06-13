// ques = 01 
document.write("<h2>QUESTION # 01 </h2>")
var fnum = +prompt("Enter First Number")
var snum = +prompt("Enter Second Number")

var sum = fnum + snum ;
document.write("Sum of " + fnum + " and "+ snum + " is "+sum);
document.write("<br>")
document.write("<br>")

// ques =02
document.write("<h2>QUESTION # 02 </h2>")
var subtract = fnum - snum;
var mul = fnum * snum;
var div = fnum / snum;
var mod = fnum % snum;

document.write("Subtraction of " + fnum + " and "+ snum + " is "+subtract);
document.write("<br>")
document.write("Multiplication of " + fnum + " and "+ snum + " is "+ mul);
document.write("<br>")
document.write("Division of " + fnum + " and "+ snum + " is "+ div);
document.write("<br>")
document.write("Modulus of " + fnum + " and "+ snum + " is "+ mod);
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")


// ques = 03 

document.write("<h2>QUESTION # 03 </h2>")
var firstvar ;
document.write("Value after variable declaration is undefined")
document.write("<br>")
var fnumber = 3;
document.write("Value after variable Initialization is " + fnumber)
document.write("<br>")
var incrmnt = fnumber++;
document.write("Value after increament is "+ fnumber )
document.write("<br>")

var add = fnumber + 7;
document.write("After Addition the value is "+add + "<br>");
var decrmnt = add--;
document.write("Value after decrement is "+ add+ "<br>")
var mod = add % 3;
document.write("the remainder is :"+ mod  +"<br>")
document.writeln("<br>")

document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// ques = 04 

document.write("<h2>QUESTION # 04 </h2>")

var ticktet = 600;
var cost = 600*5;

document.write("Total Cost to buy 5 tickets to a movie is "+ cost+"PKR")
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// ques = 05 

document.write("<h2>QUESTION # 05</h2>")
var t = +prompt("Enter Table number that you want to display?")

document.write("Table of "+t+"<br>")
for(var n=1; n<=10; n++){
    document.write(t+ "X"+n+"="+t*n+"<br>")
}
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// ques = 06 

document.write("<h2>QUESTION # 06 </h2>")
var celcius = 25;
var F = (celcius * 9/5) + 32;
var farhenhide = 70;
var C = (farhenhide - 32) * 5/9;
document.write(celcius + "'C is "+F + " 'F"+ "<br>")
document.write(farhenhide+ "'F is "+C+"'C" + "<br>")
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")



// ques = 07 
document.write("<h2>QUESTION # 07 </h2>")
document.write("<h1>SHOPPING CART</h1>")
var pItem1 = +prompt("Price of item 1")
var pItem2 = +prompt("Price of item 2")
var oItem1 = +prompt("Ordered quantity of item 1")
var oItem2 = +prompt("Ordered quantity of item 2")
var charges = +prompt("Shipping charges")
var totalcost = pItem1*oItem1 + pItem2*oItem2 + charges ;
document.write("Price of item 1 is "+pItem1+ "<br>"+ "Quantity of item 1 is "+oItem1 + "<br>"+ "Price of item 2 is "+pItem2+"<br>"+ "Quantity of item 2 is "+oItem2+"<br>"+"Shipping charges "+charges+"<br>")
document.write("Total Cost of Your Order is "+totalcost)
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")


// ques = 08 
document.write("<h2>QUESTION # 08</h2>")
document.write("<h1>MARK SHEET</h1>")

var totalmarks = +prompt("Enter Total marks of your subjects")
var obtainmarks = +prompt("Enter Obtain marks of your subjects")

var percen = (obtainmarks/totalmarks) *100 ;

document.write("Total Marks: "+totalmarks +"<br>")
document.write("Obtain Marks: "+obtainmarks +"<br>")
document.write("Percentage: "+percen +"<br>")
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// ques = 09 
document.write("<h2>QUESTION # 09</h2>")
document.write("<h1>CURRENCY IN PAKISTAN</h1>")


var dollars = 10;
var riyals = 25;
var PKR = dollars*104.80 + riyals*28 ;

document.write("Total currency in PKR: "+PKR)
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")


// QUES = 10 

document.write("<h2>QUESTION # 10</h2>")

var somenumber = (10 + 5 *10 )/2;
document.write("Total number is "+somenumber)
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// ques = 11 
document.write("<h2>QUESTION # 11</h2>")

var currentYear = parseInt(prompt("Enter Current Year"));
var birthYear = parseInt(prompt("Enter Birth Year"));
var yourage = currentYear - birthYear ;

document.write("Current Year: "+currentYear + "<br>"+ "Birth Year: "+birthYear+ "<br>"+"Your Age is: "+yourage)
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// ques = 12 
document.write("<h2>QUESTION # 12</h2>")
document.write("<h1>THE GEOMETRIZER</h1>")


var radius = 20;
var circumference = 2*3.142*radius;
var area = 3.142*radius**2;


document.write("Radius of a Circle: "+radius+"<br>")
document.write("The Circumference is: "+circumference+"<br>")
document.write("The area is: "+area+"<br>")
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")



// ques = 13 
document.write("<h2>QUESTION # 13</h2>")
document.write("<h1>THE LIFE TIME SUPPLY CALCULATOR</h1>")

var favSnack = prompt("Enter Favourite Snacks")
var cAge  = +prompt("Enter Current Age")
var eAge = +prompt("Estimated Maximum Age")
var sPerDay = +prompt("Enter Amount of Snacks Per Day")

var remaining = eAge - cAge ;
var days = remaining*365 ;
var remainSnacks = days*sPerDay ;

document.write("Favourite Snacks: "+ favSnack + "<br>"+"Current Age: "+cAge+ "<br>"+"Estimated Maximum Age: "+eAge + "<br>"+"Amount of Snacks per day:"+sPerDay+ "<br>")
document.write("You Will need "+remainSnacks + " " + favSnack + " to last you untill the ripe old age of "+eAge+ "<br>")

