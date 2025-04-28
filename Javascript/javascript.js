// {
//     var x = 'in a block'; //string
//     var y = 1234 //number
//     var z = BigInt(6329876543213809876543); //bignit
//     var xyz = false //boolean
//     var f =null
//     var un //undefined
//     un = ["string", "second", true, 12345]; //array
//     var ob = {
//         name:" Raya",
//         married: false,
//         age: 15,
//         arr: ["value1", "value2"]  //object
//     }
//     console.log(typeof (xyz))
// }
// var b=45+119;   //Additon+
// var b=45-119;   //Subtraction-
// var b=45 * 119;   //Multiplication*
// var b=45**119;   //Exponentiation*
// var b=45/119;   //Division/
// var b=45%119;   //Remainder%
// var b=45;   
// b++             //Increment
// var b=45; 
// b--             //Decrement
// console.log(b)
// document.write("<h1>"+ b +"</h1>")


//array methods

//let arr=["orange","red","yellow","green"]

//console.log(arr.lenght);    lenght(1.....)    

//console.log(arr.toString("orange"));    string(single/double quotes)

//console.log(arr[0]);    index(0.......)

// console.log(arr.at(2))
// document.write(arr.at(2))    at value

//document.write(arr.join("$"))   join(space,symbol)

//arr.pop()    remove the last value

//arr.push("blue")   to add value at the last

//arr.shift()   remove first value

//arr.unshift("blue") to  add value at first

// delete arr[2]  
// console.log(arr[2])

// let arr1=["orange","red","yellow","green"]
// let arr2=["one","two","three","four"]
// let newarr= arr1.concat(arr2);
// console.log(newarr)


//let arr =["Brazil","Morocco","London","United Kingdom"];
//console.log(arr.lenght);
//console.log(arr.toString("London"));
//console.log(arr[0]);
//console.log(arr.at(2))
//document.write(arr.join("$"))
//arr.pop(); 
//arr.push("Pakistan")
//arr.shift();
//arr.unshift("pakistan");
//delete arr[2]
//console.log(arr)
// let arr1=["africa", "France","spain"];
// let newarr = arr.concat(arr1);
// console.log(newarr)

//Content(merging two arrays )

//Copy Within Method    it copies and replaces the values
// let arr1=["orange","red","yellow","green"]
//  arr1.copyWithin(2,0,)
// console.log(arr1)

// //flat()    merging subarrays into main array
// const myarr =[[1,2],[3,4],[5,6]];
// let flatarr=myarr.flat()
// console.log(flatarr)

//splice    
// let arr3 =[orange, banana, apple , mango]
// let newarr=arr3.splice(1,1,"value 1","value2")
// console.log(arr3)


// let a=10;
// if(a == 10){
    
//     alert("your statment is running")
// }


// let a=16;
// if(a !< 20)
//     {
//     alert("your statement is running")
//     document.write("your statment is true")
// }else{
//     document.write("your statment is false")
// }


// let c=20;
// if (c%2==0 || c%3==0)
// {
//     document.write("number is divisible by 2")
// }else{
//     document.write("your number is not divisible by 2")
// }


// let a=14
// if (a%7==0)
//     {
// document.write("number is divisible by 7")
// }else{
//     document.write("your number is incorrect")
// }



// let m=21
// if(m%2==0){
//    document.write("This statement is divided by 2")
// }else if(m%3==0){
//    document.write("This statement is divided by 3")
// }else if(m%5==0){
//     document.write("This statement is divivded by 5")
// }else {  
//     document.write("This statement is not divided")
// }


// SWITCH STATEMENT
// let day=Number (prompt("Enter a Number"));
// switch(day){
    
//     case 1:
//         document.write("It's Monday");
//         break;
//         case 2:
//         document.write("It's Tuesday");
//         break;
//         case 3:
//         document.write("It's Wednesday");
//         break;
//         case 4:
//         document.write("It's Thursday");
//         break;
//         case 5:
//         document.write("It's Friday");
//         break;
//         case 6:
//         document.write("It's Saturday");
//         break;
//         case 7:
//         document.write("Its Sunday");
//         default:
//             document.write("It's not a Weekday")
// }


// DATE METHOD
// let today= new Date().toLocaleTimeString();
// document.write(today) 


// FOR LOOP
// let num= Number(prompt("enter a number"));
// for(let i=0; i<=10; i++){
//     document.write(num +"x" + i + "=" +(num*i) + "</br>")
// }



// function hello(p1, p2){        parameters
//     document.write(p1+ p2)
//     console.log(p1+ p2)
//     alert(p1+ p2)
// }

// hello(45 , 65)        arguments
// hello(p1, p2)
// hello()

// hello();
// hello()




//AVERAGE
// let a= Number(prompt("Enter your First Number"));
// let b=Number(prompt("Enter your Second Number"));
// let c=Number(prompt("Enter your Third Number"));
// function hello(p1, p2, p3){
//     alert((p1+p2+p3)/3)
//     console((p1+p2+p3)/3)
// }
// hello(a,b,c)
// hello(30,60,90)



//largest
// let a= Number(prompt("Enter your First Number"));
// let b=Number(prompt("Enter your Second Number"));
// let c=Number(prompt("Enter your Third Number"));
// function hello(p1, p2, p3){
//     let largest;

//     if (a > b && a > c) {
//     document.write("The largest number is: " + a)
//     }
//     else if(b > a && b > c) {
//         document.write("The largest number is: " + b)
//     }
//     else{
//         document.write("The largest number is: " + c)
//     }
//     alert("The largest number is: " + largest);
// }

// hello(a,b,c)


//date method with function
// function date(){
//     let today= new Date().toDateString();
//      document.write(today) 
// }
// date();


// //return
// const ret = function(p1){
//    return (p1/3);
// }
// const a= ret(975);
// document.write(a)


//arrow function
// const ret1 = p1 =>console.log(p1/3)
// ret1(975)


// //while loop
// let i=0;

// while(i < 10){
//     console.log(i)
//     i++;
// }
// let i=0;


// let num = Number(prompt("Enter a Number"))
// function table (p1){
// let i=0;
// while(i<=10)
//     {
//     document.write(p1 +"x" + i + "=" +(p1*i) + "</br>")
//     i++;
// }
// }
// table(num)


//do-while
// let i=15;
// do{
//     document.write("<br> number" + i )
//     i++;
// }while(i<10);


//for in loop for object
// let obj={
//     name:"Rameen",
//     age:6,
//     rollno:69
// }

// for (let x in obj){
//     console.log(obj[x]);
// }



//for in loop for array
// let arr = ["hello", "world", 7589];

// for (let x of arr){
//        console.log(x);
//        document.write(x);
// }


//query selector
// document.getElementById              (no index)
// document.getElementsByClassName       (index)
// document.getElementsByTagName         (index)

//query selector all                     (index)




