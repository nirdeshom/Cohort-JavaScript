let  myArray = [1, 5, 6, 2, 7, 3];
let anotherArray = [];

function sumFac(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum = sum + number[i];
    }
    return sum;
}

let result = sumFac(myArray);
console.log(result);

console.log(sumFac([1, 3, 4, 5, 6, 8]));
