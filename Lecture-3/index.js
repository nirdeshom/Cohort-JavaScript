let person = {
    x: 10,
    fname: "Satendra",
    lname: "Kumar",

    hobbies: ['Coding', 'Gym'],

    isMarried: false,
    hasGf: false,
    hadCrush: Infinity,

    getFullName: function(){
        return "Nirdesh Kumar";
    },

    address: {
        hno: 1,
        street: 1,
        countryCode: 'IN',
        state: 'UP',
    }
}

// console.log(person);
// console.log(person.hobbies.push("Nirdesh")); 
// console.log(person.getFullName());
console.log(person.address.countryCode);
