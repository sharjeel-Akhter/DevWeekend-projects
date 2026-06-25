let a = 10;
let b = 20;

let c = a + b;

// console.log(c);

// let str = "Hello World";

// console.log(str);


// str = str.toUpperCase();

// console.log(str);

// str = str.toLowerCase();

// console.log(str);   

// console.log(str.length);

// console.log(str.charAt(0));

// console.log(str.indexOf("o"));  

// console.log(str.slice(0,5));

// console.log(str.replace("world", "sharjeel"));  
// console.log(str.split(" "));

// let array = [1,2,3,4,5];

// console.log(array);

// array.forEach(element => {
//     console.log(element);
// });

// array.map((element)=>{
//     console.log(element * 2);
// }); 


// const filterArr = array.filter((element)=>{
//     return element % 2 == 0;
// })

// console.log(filterArr);


// const reduceArr = array.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 0);

// console.log(reduceArr);


// clousers

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

// outerFunction('outside')('inside');
console.log(outerFunction('outside')('inside'));
// const data = {
//     student1 : {
//         namee : "sharjeel",
//         age: 20,
//         Grade: "A",
//     },
//     student2 : {
//         namee : "sharjeel",
//         age: 20,
//         Grade: "A",
//     },
//     student2 : {
//         namee : "sharjeel",
//         age: 20,
//         Grade: "A",
//     },


// };


// const data = [
//     student1 = {
//         namee : "sharjeel",
//         age: 20,
//         Grade: "A",
//     },
//     student2 = {
//         namee : "sharjeel",
//         age: 20,
//         Grade: "A",
//     },
//     student2 = {
//         namee : "sharjeel",
//         age: 20,
//         Grade: "A",
//     },


// ];

// let range = (prompt("Enter a number for range of guessing game(i.e 1-range)"));

// let number=Math.floor(Math.random()* range )+1;

// let guess = (prompt(`Guess a number btw 0 to ${range} reach number:`));
// while(true){
//    if(guess=="quit"){
//     console.log("you quitting");
//     break;
//    }else if(guess==number){
//     console.log("you got it...congrats!!");
//     break;
//    }else{
//     guess=prompt("try again");
//    }
// };


function table(n){
    let i = 1;
    while(i<=10){
        console.log(n*i);
        i++;
    }
};


// table(5);

function concat(arr){
    let str = "";
    for(key of arr){
         str += key; 
    }
    return str;
};



let str = ["i" , "am", "a", "pakistani"];

// console.log(concat(str));

function multipleGreet(func, n){
    let i=0;
    while(i<n){
        func();
        i++;
    }
};

function greet(){
    console.log("Hello G");
};

// multipleGreet(greet , 5);

function evenOrOdd(request){
    if(request == "even"){
        return function func(n){
            console.log(n%2 == 0 );
        }
    }
    else if(request == "odd"){
        return function func(n){
            console.log(n%2 != 0 );
        }
    }
    else{
        console.log("wrong request");
    }
}
let r = "odd";
// evenOrOdd(r);

let student = {
    name:"Sharjeel",
    class:"Bs IT",
    roll:"924",
    concat(){
        console.log(this);
        console.log(this.name+this.class+this.roll);
    },
}


// let a=5;

// console.log("Hello sharjeel");
// console.log("Hello sharjeel");
// try{
//     console.log(a);
// }catch{
//     console.log("Error ay paii".toUpperCase());
// }
// console.log("Hello sharjeel");
// console.log("Hello sharjeel");

// console.log("Welcome sharjeel");

// setTimeout(() => {
//     console.log("Iqbal's Shrine");
// }, 1000);

// console.log("To the Great");

// setInterval( ()=> {
//     console.log("Welcome sharjeel");
// }, 2000);


// let st = setInterval( ()=> {
//     console.log("Welcome sharjeel");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(st);
// },10000)


// let a = [
//     {
//         name:"sharjeel",
//         marks:34,
// },
// {
//     name:"Ali",
//         marks:343,

// },
// {
//         name:"shehroz",
//         marks:89,
// }];

// a.forEach((student)=>{
//     console.log(student.marks);
//     console.log(student.name);
// })



// -----------map and filter----------

// let arr = [11,13,4,56,8,90,8,754,32];

// let ans = arr.map((el)=>{
//     return el * 3;
// })

// let arr = [11,13,4,56,8,90,8,754,32];

// let ans = arr.filter((el)=>{
//     return !(el%2 == 0);
// })



// let arr = [11,13,4,56,8,90,8,754,32];

// let ans = arr.every((el)=>{
//     return !(el%2 == 0);
// })


// let arr = [11,13,4,56,8,90,8,754,32];

// let ans = arr.some((el)=>{
//     return !(el%2 == 0);
// })

// let arr = [1,4,7,90,6,5,322,2];

// console.log(...arr);

// let student1 = {
//     name:"Sharjeel",
//     class:"Bs IT",
//     roll:"924",
// }

// let c = {...student1, id: 321};
// console.log(c);


// let a = ["Ali", "me", "nain", "super","kon","hum","hai"];

// [editor, failure, dreamer, man, ...a3]=a;

// console.log(editor,": editor");
// console.log(failure,": failure");
// console.log(dreamer, "dreamer");
// console.log(man,"man");
// console.log(a3);


// let a ={
    
//         name1:"sharjeel",
//         marks1:34,

//         name2:"Ali",
//         marks2:343,

//         name3:"shehroz",
//         marks3:89,
// }

// let {name1,marks1} = a;
// let {name2,marks2} = a;
// let {name3,marks3} = a;


// let a = ["a","b","c","d","e"];

// let c= a.map((el)=>{
//     return el.toUpperCase();
// })

// console.log(a);
// console.log(c);

// let a = ["a","B","c","D","e"];

// let c= a.filter((el)=>{
//     return (el==el.toUpperCase());
// })

// console.log(a);
// console.log(c);

// let student1 ={
//     name1:"sharjeel",
//     marks1:34,
// };

// let student2 = {
//     name3:"shehroz",
//     marks3:89,
// }

// let merge = {...student1, ...student2};

// console.log(student1);
// console.log(student2);
// console.log(merge);


// let small = document.getElementsByClassName("img");

// for(let i =0; i<=small.length; i++){
//     small[i].src = "/MyPortfolio/imagess/images.jpeg";
//     console.log( `image of ${i} has changed`);
// }

// -------------DOM-----------------


// let head = document.querySelector("h1");

// // console.dir(head);

// // head.innerText = "My world";

// head.innerHTML = `<u>${head.innerText}</u>`;

// // console.dir(head.innerHTML);

// head.setAttribute("id","nill");

// head.getAttribute("id");


// head.setAttribute("class","noclass");

// let img = document.querySelector("img");

// // img.setAttribute("src", "/MyPortfolio/imagess/images.jpeg");

// head.innerText = "urdu world"+" My world"

// let ell = document.createElement("button");

// head.append(ell);

// let bt = document.querySelector("button");

// bt.setAttribute("class", "btu");
// bt.innerText = "Click me Don't";


// head.style.color="purple";
// head.style.background="yellow";
// bt.style.color="red";


// let p = document.createElement("p");

// p.innerText = "Ahmad Faraz";

// let body = document.querySelector("body");


// body.appendChild(p);

// let a =document.querySelector("a");

// a.appendChild(p);

//----------Adding document through javascripts------------ 

// let bod = document.querySelector("body");

// let pa = document.createElement("p");

// pa.innerText ="Hi, i'm red";
// pa.innerHTML="<b>Hi, i'm red</b>"

// // pa.style.color = "red";
// pa.classList.add("red");
// pa.style.fontSize = "40px";

// bod.append(pa);

// let pa2 = document.createElement("p");

// // pa.innerText ="Hi, i'm red";
// pa2.innerHTML="<b>Hi, i'm blue</b>"

// // pa.style.color = "red";
// pa2.classList.add("blue");
// pa2.style.fontSize = "40px";

// bod.append(pa2);

// let d = document.createElement("div");
// d.classList.add("box");

// d.innerHTML = "<h1>I'm in a Div</h1> <p>Me TOO!!</p>";

// bod.append(d);


// let bt = document.querySelectorAll("button");

// for(btn of bt){
//     btn.onclick= sayhello;
//     btn.onmouseenter=function(){
//         console.log("clicked");
//     };
// }

// function sayhello(){
//     alert("Hello...")
//     console.log("button clicked")   
// };


// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h1 = document.querySelector("h1");
//     let rand = randomRGB();
//     h1.innerText = rand;
    
//     let div = document.querySelector("div")
//     div.style.backgroundColor = rand;

//     console.log("channged color");
// });

// function randomRGB(){
//     let red = Math.floor(Math.random() *255);
//     let green = Math.floor(Math.random() *255);
//     let blue = Math.floor(Math.random() *255);
  
//  let color = `rgb(${red}, ${green}, ${blue})` ;
//  return color;
// }


// let img = document.querySelector("img");
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// let firstimg = img.src;
// let secondimg = "/MyPortfolio/imagess/fraz.jpeg";

// btn.addEventListener("click",function(){
//     if(img.src === firstimg ){
//         img.src= secondimg ; 
//     }else{
//         img.src = firstimg;
//     }
//     // console.log("image changed")
// });

// h1.addEventListener("click", click);
// h3.addEventListener("click", click);
// p.addEventListener("click", click);
// btn.addEventListener("click", click);

// function click(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// }


// let inp = document.querySelector("input");

// inp.addEventListener("keydown" , function(event){
//     console.log(event.code)
//     console.log(event.key)
//     // console.log("key has been pressed");

// });


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.log(user.value);
    // console.log(pass.value);

//     let user = form.elements[0];
//     let pass = form.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`${user.value} you have been registerd as password ${pass.value} yaad it`);

//     console.dir(form);
// })

//---------------_ _ _ _ _ _ _ _ _ _ _ _ _ ---------------

// let inp = document.querySelector("input")
// let ul = document.querySelector("ul")
// let btn = document.querySelector("button")

// btn.addEventListener("click", function(){
//     let list = document.createElement("li");
//     list.innerText = inp.value;
    
//     console.log(inp.value);
    

//     let btn = document.createElement("button");
//     btn.innerText = "Delete";
//     btn.classList.add("delete");

//     list.appendChild(btn);
//     ul.appendChild(list);
//     inp.value = "";

    
// })


let delbt = document.querySelectorAll(".delete");
for(btn of delbt){  
    btn.addEventListener("click", function(){
        let par = this.parentElement;
        par.remove();

    })
}

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        console.log("deleted");
    }
})