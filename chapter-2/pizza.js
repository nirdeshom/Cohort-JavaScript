// small <= 2
// mediam <= 3 
// large <=5

let numberofGuest = 4;

let pizzaSize;

if(numberofGuest <= 2){
    pizzaSize = "small";
}
else if(numberofGuest <= 4){
    pizzaSize = "mediam";
}
else{
    pizzaSize = "large";
}

console.log(pizzaSize);