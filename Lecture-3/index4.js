let p1 = {
    fname: "Hitesh",
    lname: "Ch",
}

let p2 = {
    ...p1  // Spread Operator ...
}

p2.fname = "Rahul";
p2.lname = "Garg"

console.log(p1);
console.log(p2);
