// ques = 01 

document.write("<h2>QUESTION # 01 </h2>")
var a = +prompt("Enter Any number")

document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br>")
document.write("........................................" + "<br>")
document.write("The value of ++a is: " + ++a + "<br>")
document.write("Now The value of a is: " + a + "<br>" + "<br>" + "<br>")

document.write("The value of a++ is: " + a++ + "<br>")
document.write("Now The value of a is: " + a + "<br>" + "<br>" + "<br>" + "<br>")
document.write("The value of --a is: " + --a + "<br>")
document.write("Now The value of a is: " + a + "<br>" + "<br>" + "<br>" + "<br>")
document.write("The value of a-- is: " + a-- + "<br>")
document.write("Now The value of a is: " + a + "<br>" + "<br>" + "<br>" + "<br>")



// ques = 02 
document.write("<h2>QUESTION # 02 </h2>")
var a = 2, b = 1;
document.write("a is: " + a + "<br>")
document.write("b is: " + b + "<br>")
document.write("solve <br> --a - --b + ++b + b--;" + "<br>")
var result = --a - --b + ++b + b--;
//   1      0    1     1 


document.write("Result is: " + result + "<br>")

// Explain the output at each stage:
// pre-decreament 
// --a;
//  two predecreament element then again output of both get subtract in them self 
// --a - --b;
// two pre decreament then subtract each other then one pre increament then perform addition 
//  --a - --b + ++b;
// pre decreament , pre-increament ,then decreament ,then subtraction and addition 
//   --a - --b + ++b + b--; 

document.write("<br>")
document.write("<br>")
document.write("<br>")


// ques = 03 
document.write("<h2>QUESTION # 03 </h2>")


var name = prompt("Enter Any name ")

document.write("Welcome " + name + "<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

//  ques = 05 
document.write("<h2>QUESTION # 05 </h2>")

var t = +prompt("Enter Table number that you want to display?")


for(var n=1; n<=10; n++){
    if(t === 0)
    {
       
        document.write(5+ "X"+n+"="+5*n+"<br>")

    }
    else if (t !== 0 ){
       
         document.write(t+ "X"+n+"="+t*n+"<br>")
    }
   
}
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")


// ques = 06 
document.write("<h2>QUESTION # 06 </h2>")

var sub1 =  prompt("Enter first Subject name ")
var sub2 =  prompt("Enter second Subject name ")
var sub3 =  prompt("Enter third Subject name ")

var totalMarksForEach = 100 ;


var obtain1 = +prompt("Enter Obtained marks of "+sub1)
var obtain2 = +prompt("Enter Obtained marks of "+sub2)
var obtain3 = +prompt("Enter Obtained marks of "+sub3)

var percen1 = (obtain1/totalMarksForEach)*100 ;
var percen2 = (obtain2/totalMarksForEach)*100;
var percen3 = (obtain3/totalMarksForEach)*100;

var sumOfAllSubject = 300;
var sum = obtain1 + obtain2 + obtain3 ;
var avgPercen = (percen1 + percen2 + percen3)/3;



 document.write("<table> <tbody><tbody><tr><th> Subject</th><th>Total Marks </th><th>Obtained Marks</th> <th> Percentag</th></tr><tr><td>"+ sub1 +"</td><td>"+totalMarksForEach+"</td><td>"+ obtain1+"</td><td>"+percen1+"%</td></tr>"+"<br>"
 +"<tr><td>"+ sub2+"</td><td>"+totalMarksForEach+"</td><td>"+ obtain2+"</td><td>"+ percen2+"%</td></tr>"+ " <br>"
 +"<tr><td>"+ sub3+"</td><td>"+totalMarksForEach+"</td><td>"+ obtain3+"</td><td>"+ percen3+"%</td></tr>"+ " <br>"
 +"<tr><th> </th> <th> "+ sumOfAllSubject+"</th><th>"+ sum+"</th><th>"+ avgPercen+"</th></tr>"
 +"</tbody></table>")
