// ques = 01
document.write("<h2>QUESTION # 01</h2>")
var arr = [ 
    [],[],[]
]


// ques = 02
document.write("<h2>QUESTION # 02</h2>")
var arr = [ 
    [0,1,2,3],[1,0,1,2],[2,1,0,1]
]



document.write(arr[0] + "<br>"+ arr[1] +"<br>" + arr[2])
// ques = 03
document.write("<h2>QUESTION # 03</h2>")

for (var x=1 ; x<= 10 ; x++){
    document.write(x + "<br>")
}

// ques = 04
document.write("<h2>QUESTION # 04</h2>")

var t_no = +prompt("Enter a number to show its multiplication table")
var t_length = +prompt("Table lenght ?")
for(var i =1 ;i<= t_length; i++ ){
    document.write(t_no +"X"+i+"="+t_no*i+"<br>")
}


// ques = 05
document.write("<h2>QUESTION # 05</h2>")

fruits = ["apple", "banana", "mango", "orange", "strawberry"]


for (var i=0 ; i<fruits.length ; i++){
   
    document.write("Element At index "+i + " is "+ fruits[i] + "<br>")
}

// ques = 06
document.write("<h2>QUESTION # 06</h2>")
document.write("<h3>Counting:</h3>")

for(var x=1 ; x<16 ; x++)
{
    document.write(x + ", ")
}

document.write("<h3>Reverse Counting:</h3>")
for(var x=10 ; x>0 ; x--)
{
    document.write(x + ", ")
}

document.write("<h3>Even:</h3>")

for(var x=0 ; x<=20 ; x= x+2)
{
    document.write(x + ", ")
}

document.write("<h3>Odd:</h3>")

for(var x=1 ; x< 20 ; x= x+2)
{
    document.write(x + ", ")
}

document.write("<h3>Series:</h3>")

for(var x=2 ; x<=20 ; x= x+2)
{
    document.write(x + "k, ")
}

// ques = 07
document.write("<h2>QUESTION # 07</h2>")
var A = ["cake", "apple pie", "cookie", "chips", "patties"] 

var search = prompt("Welcome to ABC bakery! What do you want to order Sir/Ma'am ?")


for(var i=0; i<A.length; i++){
    if(search === A[i]){
        document.write(search + " is <b>available</b> at index "+ i + " in our bakery")
        break;
    }
}

if(search !== A[i]){
    document.write("We are Sorry! " + search + " is <b>not available</b> in our bakery")
}

// ques = 08
document.write("<h2>QUESTION # 08</h2>")
var b = [24, 53, 78, 91, 12]

document.write("Array items: "+ b + "<br>")

 var y = b.sort();
 var x = y.length;
document.write("The Largest number is " + y[x-1])


// ques = 09
document.write("<h2>QUESTION # 09</h2>")
var b = [24, 53, 78, 91, 12]

document.write("Array items: "+ b + "<br>")

 var y = b.sort();

document.write("The smallest number is " + y[0])

// ques = 10
document.write("<h2>QUESTION # 10</h2>")


for(var y=5; y<=100; y= y+5 )
{
    document.write(y + ", ")
}