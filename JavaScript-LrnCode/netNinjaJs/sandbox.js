let age = 25;
let year = 2024;
console.log(age,year);

age=35;
console.log(age);

const points=27;
console.log(points);

var fake = 35;
console.log(fake);

//Strings
console.log('Helllo , Worrrld');

let email='theronnin@duck.com';
console.log(email);

// String concatanation
let firstName = 'Dheeraj';
let lastName = 'Kumar';
let fullName = firstName +' '+ lastName;
console.log(fullName);

console.log(firstName + ' ' + lastName);

//Getting Character
console.log(fullName[0]);

console.log(fullName.length);

//String methods
console.log(fullName.toUpperCase());

let results=fullName.toLowerCase();
console.log(results, fullName);

let index=email.indexOf('@');
console.log(index);

//coommon string methods
email ='jholjhaal17@gmail.com';
results = email.lastIndexOf('a');
console.log(results);

//slice
console.log(email.slice(2,7));
results=email.slice(3,7);
console.log(results);

console.log(email);
console.log(email.substring(0,4));

//replace 
results=email.replace('j','h');
console.log(results);

//numbers

let radius=10;
const pi=3.14;

console.log(radius/5);
console.log(radius**5);
console.log(radius%5);
console.log(radius+5);
console.log(radius-5);
console.log()

radius++;
radius-=1;

//NaN = not a number

console.log(5/'mood');

console.log(5+'results');
results=3;
console.log('The boc has '+results+' boxes');

//template string way to concatenate
let head='Header';
let foot='Footer';
let space = 67;

results=`The Space difference between ${head} and ${foot} is ${space} px`;
console.log(results);

//creating html template and printing on console.
let fail=`
    <h1>${head}</h1>
    <h1>${foot}</h1>
    <span>The differnce between ${head} and ${foot} is 65px</span>
`;

console.log(fail);

// Arrays

let arr=["heelo","Worl",35, 56];
console.log(arr);
// join 

console.log(arr.join(' | '));
console.log(arr.length);

//IndexOf
console.log(arr.indexOf('Worl'));

//concat
console.log(arr.concat('Whol','mole'));

//push returns the length of the new array after the insertion
results= arr.push('keny');
console.log(results);
console.log(arr);

//pop it elemintes the last element of the array.
results=arr.pop();
console.log(arr);

//undefined
let naya;
console.log(naya, naya+3, `The age is ${naya}`);

//null
naya=null;
console.log(naya, naya+3, `The age is ${naya}`);

//boolean
console.log(true, false, 'true', 'false');

//methods on bool
console.log(email.includes('@'));

//comparison operator
let a;
let b=null;
age=25;
//strict comparison different types cannot be equal
console.log(a===b);
console.log(age==='25');
//loose comparision differnt types can be equal
console.log(a==b);
console.log(age=='25');

let name='Shaun';
console.log(name<'shaun');

//type convertion
age='100';
console.log(typeof age);
console.log(age + 1);

age=Number(age);
console.log(age+1);
console.log(typeof age);

results=Number('String');
console.log(results, typeof results);
// Boolean of any positive or negative is true but 0 is false.
age=Boolean(5);
console.log(age, typeof age);

age=Boolean(0);
console.log(age, typeof age);
// Boolean of any string is true but empty string is false
age=Boolean('0')
console.log(age, typeof age);

age=Boolean('')
console.log(age, typeof age);

//Regular function

//hoist It means that function can be called before defining.
//Function declaration js hoist fuction declaration
function hello(){
    console.log('hello');
}

//Function expression js does not hoist fuction declaration
const hii=function(){
    console.log('hii')
};

//Funtion invoke or call
hello();
hii();
hii();

//arguments and parameters
const speak=function(name='Dheeraj', time='Ohayo'){
    console.log(`Good ${time} ${name}`)
};

speak();
speak('Rohit','Konbanwa');

//returning values
const callArea=function(radius){
   let area=3.14 * radius**2;
    return area;
};

const area = callArea(5);
console.log(area);

const Vol=function(side){
    return side**3;
};

const vol=Vol(4);
console.log(vol);

//Arrow Function

const ArrArea = (radius) => {
    return radius**2;
};
const Sq=ArrArea(4);
console.log(Sq);

const ArrCircle = radius => 3.14*radius**2;
const Circ=ArrCircle(4);
console.log(Circ);

const SphereVol = (radius, height) => 0.75*3.14*radius**3*height;
const Sphere=SphereVol(2,3);
console.log(`Volume of Sphere is ${Sphere} `);

const greet=()=> "Heelllo";
console.log(greet());

//callback & foreach
const Myfunc=(callbackFunc)=>{
    console.log("In main Function");
    let value=50;
    callbackFunc(value);
};

Myfunc(value=>{
    console.log(value);
});

let people=['haary','goony','ronnin'];
people.forEach((person,index)=>{
    console.log(index,person);
});

let PerLog=(person,index)=>{
    console.log(`${index} Hello ${person}`)
};

people.forEach(PerLog);

//get a refrence using ul, reflecting the values in webpage using js
const ul=document.querySelector('.People');
let html=``;
const People=['haliet','Morbius','Crook','Ronnin'];
People.forEach(person=>{
    html+=`<li style="color: purple">${person}</li>`;
});
console.log(html);
// ul.innerHTML= html; // error need to configure DOM

//object literals

let user={
    name:'Dheeraj',
    age:19,
    email:'theronnin0000@gmail.com',
    location:'Bharat',
    blogs: ['The dynasty will bow after me','I will rule the Throne'],
    login:()=> console.log("The user just logged in"),
    logout:()=> console.log('The user just logged out'),

    //Not working may be updated
    logBlog:function(){
        console.log('This writer has writtten the following blog: ');
        this.blogs.forEach(blog=>{
            console.log(blog);
        });
    },
};

console.log(user);
console.log(user.email);
user.age=18;
console.log(user.age);
console.log(user['name']);
user['name']='Ronnin';
console.log(user['name']);
let key='location';
console.log(user[key]);

console.log(typeof user);

user.login;
user.logout;
user.logBlog();
console.log(this);

const blogs=[
    {title:'This is Ronnin', likes:50},
    {title:'This is Tai Lung', likes: 679}
];

console.log(blogs);

let user1={
    blogs1:[
        {title:'This is Ronnin', likes:50},
        {title:'This is Tai Lung', likes: 679}
    ],
    LogBlog:function(){
        console.log('This log contains: ');
        this.blogs1.forEach(blog1=>{
            console.log(blog1.title,blog1.likes);
        })
    },
};
user1.LogBlog();

//Math Object
let area1=7.66;
console.log(Math.round(area1));
console.log(Math.floor(area1));
console.log(Math.ceil(area1));
console.log(Math.trunc(area1));

//random number generate random number between 1 and 0;
const random=Math.random();
console.log(random);
console.log(Math.round(random*100));
