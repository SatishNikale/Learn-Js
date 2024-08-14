// const tenderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
    fullname : {
        userName : {
            firstname : "satish",
            lastname : "nikale"
        }
    }
}

// console.log(regularUser.fullname.userName.firstname); // satish
// console.log(regularUser.fullname.userName.lastname);  // nikale

// combining 2 objects

// const obj1 = {1 : "a", 2 : "2"};
// const obj2 = {3 : "c", 4 : "4"};

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

// Using spread operator

// const obj3 = {...obj1, ...obj2}; // mostly we used for combining

// console.log(obj3);

const users = [
    {
        id : "1",
        email : "s@gmail.com",
    },
    {
        id : "2",
        email : "b@gmail.com",
    },
    {
        id : "3",
        email : "c@gmail.com",
    }
]

// console.log(users[0]);

// console.log(Object.keys(tinderUser)); // return an array (imp)
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); // give single value pair
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "satish"
}

// course.courseInstrucuture

// Object de-structuring

const{courseInstructor: instructor} = course;

console.log(instructor);


