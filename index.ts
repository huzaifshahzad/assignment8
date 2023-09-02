/*Write a program that uses filter to remove all negative numbers from an array of numbers
let array:number[]=[10,-3,4,-5,6,-7,8,-9];
let negitiveNumber=array.filter((number)=>{
    if (number<0) {
        return false;
        
    }
    else{
        return true
    }
})
console.log(negitiveNumber);*/
/*Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let numbers:number[]=[1, 2, 3, 4, 5];
numbers= numbers.map((number)=>{
    if(number>0){
    return (number*2);}
    else{
        return number;
    }
})
console.log(numbers);*/

/*let numbers:number[]=[1,2,3,4,5,6,7,8,9,99,88,77,666,5555,4444];
let updatedArray=numbers.map((number)=>{
    if(number%2==0){
        return "even";
    }
    else{
        return "odd";
    }
})
 console.log(updatedArray);*/
 /* Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
 var fruits:string[]=["apple","banana","cherry","date","grape"];
 var someFruits=fruits.filter((date2)=>{
    return date2.length >5;
 })
 console.log(someFruits);*/

 /*Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
 var num:number[]=[1,2,3,4,5,6,7,8,9,10];
 var evensquare=num
 .filter(number =>number%2==0)
 .map(evenNumber =>evenNumber*evenNumber)
 console.log(evensquare);
*/
/* Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var temperature:number[]=[0,10,20,40];
var farnheit= temperature.map((index)=>{
    return index*9/5+32;
})
console.log(farnheit);*/
/*Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

var numbers:number[]=[3,6,9,12,15,18];
var oddDoubledNumbers=numbers
.filter(value=>value%2!=0)
.map(doubledvlue=> doubledvlue *2)
console.log(oddDoubledNumbers);*/

/*Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var names:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
var sign = names.forEach(data=>{
    console.log(`${data}!`);
    
});*/
