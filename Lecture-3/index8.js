// Ek object banaya jisme nested object bhi hai
let p1 = {
  fname: "Hitesh",
  lname: "Ch",
  address: {
    h: 1,
    s: 1,
  },
};

// p1 ko JSON string me convert kiya (deep copy banane ke liye)
// Ab p1KaString ek plain string hai (not object)
const p1KaString = JSON.stringify(p1);
console.log(p1KaString); 
// Output: {"fname":"Hitesh","lname":"Ch","address":{"h":1,"s":1}}

// JSON string ko wapas parse karke naya object banaya
let p2 = JSON.parse(p1KaString);

// Ab p2 totally independent copy hai (deep copy)
p2.fname = "Piyush";       // p2 ke fname ko change kiya
p2.address.h = "Hacked";   // p2 ke address.h ko change kiya

// Print p2
console.log(p2);
// Output: { fname: 'Piyush', lname: 'Ch', address: { h: 'Hacked', s: 1 } }

// Print p1
console.log(p1);
// Output: { fname: 'Hitesh', lname: 'Ch', address: { h: 1, s: 1 } }
