class person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;

        console.log(this.getFullName());
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new person("Nirdesh", "Kumar");
const p2 = new person("Akash", "Garg");

// console.log(p1);
// console.log(p2);

// console.log(p1.getFullName());
// console.log(p2.getFullName());

