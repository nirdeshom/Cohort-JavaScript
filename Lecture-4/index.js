console.log("problem fix");

const obj1 = {
  fname: "Nirdesh",
  lname: undefined,

  getFullName: function(){
    if(this.lname !== undefined){
      return `full name ${this.fname} ${this.lname}`;
    } else {
      return `${this.fname}`;
    }
  }
};

const obj2 = {
  fname: "Anirudh",
  lname: undefined,

  getFullName: function(){
    if(this.lname !== undefined) return `my full name ${this.fname} ${this.lname}`;
    return `${this.fname}`;
  }
};


// DRY - Do Not Repeat Yourself
console.log(obj1.getFullName());
console.log(obj2.getFullName());