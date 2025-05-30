let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

function sumfac(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum = sum + number[i];
        
        // console.log(number[i]);
    }
    return sum;
}

// console.log(sumfac(myArray));

// console.log(sumfac([1, 2]));

let resutl = sumfac(myArray);
console.log(resutl);
