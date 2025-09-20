let p1 = {
    fname: "Nirdesh",
    lname: "Kumar",
}

let p2 = {
    fname: p1.fname,
    lname: p1.lname,
}

p2.fname = "Ankit";
p2.lname = "Verma";

console.log(p1);
console.log(p2);
