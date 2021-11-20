
let x;


let a = document.querySelector('#firstNum');
let b = document.querySelector('#secondNum');
let c = document.querySelector('#thirdNum');
let result = document.querySelector('.result');
// const clear = document.querySelector('.clear');
const form = document.querySelector('form');


form.addEventListener('submit',e => {e.preventDefault();
   const x = Number(a.value);
   const y = Number(b.value);
   const z = Number(c.value);
    const d = y * y - 4 * x * z
    let root1 = (-y + Math.sqrt(d)) / (2 * x);
let root2 = (-y - Math.sqrt(d)) / (2 * x); 
result.textContent = `${root1} and ${root2}`;
console.log(`The roots of uadratic equation are ${root1} and ${root2}`)

 });


 function clearResult() {
  result.textContent = " ";
  a.value = " ";
  b.value = " ";
  c.value = " ";

    }

  



// //Given; -b +- root of b^2 - 4ac \ 2a

// let root1, root2;

// // Variables declaration
// let a = prompt("Enter the first value:");
// let b = prompt("Enter the second value:");
// let c = prompt("Enter the third value:");

// // To calculate the discriminant, d
// let d = b * b - 4 * a * c 

// //Now;
// root1 = (-b + Math.sqrt(d)) / (2 * a);
// root2 = (-b - Math.sqrt(d)) / (2 * a);

// //Answer
// console.log(`The roots of uadratic equation are ${root1} and ${root2}`);


