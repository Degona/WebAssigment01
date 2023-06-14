// Problem 1
var arrNumbers =[1,3,-1,5,-3,10];
var positive =[];
console.log("Positive numbers are:")
for (var i=0; i<arrNumbers.length; i++) {
    if (arrNumbers[i]>0){
        positive.push(arrNumbers[i]);
        console.log(`> ${arrNumbers[i]}`);
    }
}
const suma= positive.reduce ((acc,num) => acc + num, 0);
console.log(`Sum of all is ${suma}`);

// Problem 2
var sum=0;
for( var i = 0; i<arrNumbers.length; i++) {
    sum+= arrNumbers[i];
}
const average = sum/arrNumbers.length;

console.log(`Average is ${Math.round(average)}`);

// Problem 3
const value =10;
if (arrNumbers.includes(value)){
    console.log ("TRUE");
    } else{
        console.log("FALSE")
    }