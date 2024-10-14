// {
//     const sc = require("prompt-sync")({sigint:true});
//         let c = function(a) {
//         console.log(a,", Welcome to hell ❤");
//         }

//         for(let i = 1; i > 0; i++){
//         let a = sc("Enter name Or if you want exit TYPE = exit: ");
//         if (a === "exit"){
//             break;
//         }
//         else{
//             c(a);
//         }
//     }
// }

//let add = (...num) => {
//     console.log(num);
//     let res=0;
//     for (i of num){
//         res+i;
//     }
//     console.log(res);
// }

// add(1,2,3,4,5,6,7,8,9,10);

// let math=(a,b) => {
//     return a*b ;
// }

// let x = math(4,9);
// console.log(math(10,4), x);

// let maths = (a,b) => {
//     let sum = (a,b) => { return a+b;}
//     let sub = (a,b) => { return a-b;}
//     let mutli = (a,b) => { return a*b;}
//     let div = (a,b) => { return a/b;}
//     let exp = (a,b) => { return a**b;}

//     console.log("Add " ,sum(a,b), "| sub : ", sub(a,b), "| mutli : ", mutli(a,b), "| div : ", div(a,b), "| exp : " , exp(a,b));
// }

// maths(5,5);

// let f = 2;
// let g= 5;
// let c = eval(2**f*((2**f)-1));
// console.log(c);

// const prompt=require("prompt-sync")({sigint:true});
// let x = prompt(" Enter a char : ");
// let a = (isNaN(x))?console.log("This is a String"):console.log("No, This a Number ");

// if (isNaN(x)){console.log("This is String");}
// else { console.log("This is Number"); return x; }

// let list = ["map()", "fliter()", "reduce()", "setTimeout()", "setinterval()", "Sort()", "foreach()"];
// list.forEach(item => { console.log(item);})

// (function (name) {console.log("Hello World!")})()

//arr

let arr = [1, 2, 3, "a", "m", "hello", "World"];

// console.log(arr.toString());
// console.log(arr.push("hari"));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift());

// delete arr[0];
// console.log(arr);

// console.log(arr.slice(1));

// console.log(arr.splice(2,3,"hi",5,90,43));
// console.log(arr);
// onsole.log(arr.reverse());

// let num = [111,232,342,43,69,1];
// let c = num.sort( (a,b) => {return a - b})
// console.log(num);

// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = a.map((c) => {return c**2});
// console.log(b);

// let d = a.filter((x) => {return x%2 != 0});
// console.log(d);

// let y = a.reduce((o,i) => {return o+i});
// console.log(y);

const sc = require("prompt-sync")({ sigint: true });
let xy = "hello World";
let z = "!";
let cl = console.log.bind("cl");
// for (let i = 0;i<xy.length;i++){
//     cl(xy[i]);
// }

// cl(xy.toUpperCase());
// cl(xy.toLowerCase());

// cl(xy.slice(3,5));
// cl(xy+z);
// cl(xy.replace("hello", "hi"));
// cl(xy.split("").reverse().join(""));

// let str = "       hello   ";
// cl(str.trim());
// cl(str.trimStart());
// cl(str.trimEnd());

// for(let i = xy.length-1; i >= 0; i-- ){
//     cl(xy[i]);
// }

// cl("Index of l : ",xy.indexOf('L'), " ASCII key L : ", xy.charCodeAt(65));
// for (let i =97; i <= 122; i++){
//     console.log(`ASCII key value ${i} : `,String.fromCharCode(i));
// }

// let x = xy.charAt(6);
// let y = xy.charCodeAt(x);
// let p = xy.fromCharCode(y);
// console.log(p);

cl("last index : ", xy.lastIndexOf("W"));
cl(
  "includes (ll) : ",
  xy.includes("ll"),
  "| includes (hi): ",
  xy.includes("hi")
);
cl(
  "StratWith (he) : ",
  xy.startsWith("he"),
  "| StartWith (He) : ",
  xy.startsWith("He")
);
cl(
  "EndWith (ld) : ",
  xy.endsWith("ld"),
  "| EndsWith (lo) : ",
  xy.endsWith("lO")
);
cl("Search (l) : ", xy.search("o"));

let res = "hello, Who are Your and where you from ?";
cl(res.match(/you/g));
cl(res.match(/You/gi));
