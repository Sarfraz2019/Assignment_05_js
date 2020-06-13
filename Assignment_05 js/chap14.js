// ques = 01
document.write("<h2>QUESTION # 01</h2>")

var array1 = [];

// ques = 02
document.write("<h2>QUESTION # 02</h2>")

var arr2 = ("");

// ques = 03
document.write("<h2>QUESTION # 03</h2>")

var arr3 = ["sarfraz","Aslam","Sumair"]


// ques = 04
document.write("<h2>QUESTION # 04</h2>")

var arr4 = [1,2,3,4,5,6,7,8,9,10]

// ques = 05
document.write("<h2>QUESTION # 05</h2>")

var arr5 = [true,false];

// ques = 06
document.write("<h2>QUESTION # 06</h2>")

var arr6 = ["fraz",false,5,true,3,"amaan"]

// ques = 07
document.write("<h2>QUESTION # 07</h2>")
document.write("<h2>Qualifications:</h2>")
var arr7 = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PHD"]

for (var i=0; i<arr7.length ; i++){


    document.write(i+1 +") "+arr7[i] +"<br>")
}

// ques = 08
document.write("<h2>QUESTION # 08</h2>")

var name1 = prompt("Enter first student name")
var name2 = prompt("Enter second student name")
var name3 = prompt("Enter third student name")

var arr8 = [name1,name2,name3]

var score1 = prompt("Enter first student score")
var score2 = prompt("Enter second student score")
var score3 = prompt("Enter third student score")

var arr9 = [score1,score2,score3]

totalmarks = 500;

var percen1 = (score1 / totalmarks) * 100;
var percen2 = (score2 / totalmarks) * 100;
var percen3 = (score3 / totalmarks) * 100;

document.write("Score of "+ name1 + " is "+score1 + ". Percentage: "+ percen1 + "%<br>")
document.write("Score of "+ name2 + " is "+score2 + ". Percentage: "+ percen2 + "%<br>")
document.write("Score of "+ name3 + " is "+score3 + ". Percentage: "+ percen3 + "%<br>")


// ques = 09
document.write("<h2>QUESTION # 09</h2>")


document.write("<h3>Array</h3>")

var color = ["Yellow","Green","Brown","Red","Wood","Purple"]

    document.write(color)
var color1 = prompt("What color you want to add at the beginning")

color.unshift(color1);
document.write("<h3>Updated Array</h3>")
document.write(color)

var color2 = prompt("What color you want to add at the end")

color.push(color2);
document.write("<h3>Updated Array</h3>")
document.write(color)

var color3 = prompt("What color you want to add at the beginning")
var color4 = prompt("What color you want to add at the beginning")

color.unshift(color3,color4);
document.write("<h3>Updated Array</h3>")
document.write(color)

color.shift();
document.write("<h3>Updated Array</h3>")
document.write(color)

color.pop();
document.write("<h3>Updated Array</h3>")
document.write(color)

document.write("<h3>Updated Array</h3>")
var index = +prompt("In which index you want to add the color ?")
var indexcolor = prompt("Color name?")

color.splice(index,0,indexcolor)
document.write(color)


document.write("<h3>Updated Array</h3>")
var index = +prompt("In which index you want to delete the color ?")
var indexcolor = +prompt("How many colors you want to delete ?")

color.splice(index,indexcolor)
document.write(color)

// ques = 10
document.write("<h2>QUESTION # 10</h2>")

var scores = [320,230,480,120];
document.write(" Scores of Students : "+scores+"<br>")
document.write(" Ordered Scores of Students : "+scores.sort()+"<br>")

// ques = 12
document.write("<h2>QUESTION # 12</h2>")


var arr = ["This ", " is ", " my ", " cat"]; 

var check = "";
for(var i=0; i<arr.length;i++){
    check += arr[i] ;
}

document.write("<h3>Array:</h3>")
document.write(arr)
document.write("<h3>String:</h3>")

document.write(check)


// ques = 11
document.write("<h2>QUESTION # 11</h2>")

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("<h3>Cities:</h3>")

document.write(cities)

var s_cities = cities.slice(1,3)
document.write("<h3>Selected Cities:</h3>")

document.write(s_cities)

// ques = 13
document.write("<h2>QUESTION # 13</h2>")


var fifo = [ "keyboard","mouse","printer","moniter"]

for (i=0  ; i <= fifo.length ; i++){
    document.write("Output: "+ fifo.shift() + "<br>")
}

document.write("Output: "+ fifo.pop() + "<br>")


// ques = 14
document.write("<h2>QUESTION # 14</h2>")


var fifo = [ "keyboard","mouse","printer","moniter"]

for (i=fifo.length -1  ; i >= 0 ; i--){
    document.write("Output: "+ fifo.splice(i,1) + "<br>")
}

// ques = 15
document.write("<h2>QUESTION # 15</h2>")


var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write(" <select>")
for(var i=0; i < mobile.length;i++){
    document.write("<option value='Pakistan'>" + mobile[i]+ "</option>")
    
}document.write("</select><br>")