// console.log("==== Variables ====");

// var text="Something";
// console.log(text);

// var FirstName="Sakshi";
// var LastName="Pandey";
// console.log(FirstName);
// console.log(LastName);

// var a=40;
// var b=30;
// if(a>b){
//     console.log("A is greater, value of A=",a);

// }
// else{
//     console.log("B is greater, value of B=",b);
// }

// console.log("\n==== Function ====");
// function abes(){
//     console.log("Welcome Students");
//     console.log("Welcome to Node.js");
// }
// abes();
// abes();

// console.log("\n==== Function With Parameters ====");

// function greet(fname,lname){
//     console.log("Hello" ,fname,lname);
// }
// greet("Sakshi" , "Pandey");
// greet("Ayush" , "CUTU");

// console.log("\n==== Function Return ====");

// function add(x,y){
//     return x+y;
// }
// var result=add(20,30);
// console.log("Sum=" ,result);


// console.log("\n==== Default Arguments ====");
// function fullName(fname="Sakshi",Lname="Pandey"){
//     return fname + " " + Lname;
// }

// console.log(fullName());
// console.log(fullName ("Neha", "Sakshi"));

console.log("\n==== Percentage ====");
function totalMarks(math,english,science){
    return math+english+science;
}
function percentage(total){
    return (total/300)*100
}
var total=totalMarks(80,75,95);
console.log("Total Mark:", total);
console.log("Percentage=", percentage(total));