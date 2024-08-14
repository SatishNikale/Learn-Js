const user = {
  username: "satish",
  price: 199,

  welcomeaSmg: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this); gives current object
  },
};
console.log(this); //gives empty object

console.log(user.welcomeaSmg());
user.username = "Dhammapal";
console.log(user.welcomeaSmg());

function chai() {
  let username = "satish";
  console.log(this.username);
}
chai();

// "this" keyword generally works for object not for function

const chai = function () {
  let username = "satish";
  console.log(this.username);
};
chai();

const chai = () => {
  let username = "satish";
  console.log(this.username);
};
chai();

const addNum = (n1, n2) => {
  return n1 + n2;
};

const addNum = (n1, n2) => n1 + n2;

const addNum = (n1, n2) => n1 + n2;

const addNum = (n1, n2) => ({ name: "satish" });

console.log(addNum(10, 20));
