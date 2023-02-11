const section1= document.getElementById('sec-1');
section1.style.backgroundColor= "aqua";
 
const section2= document.getElementById('sec-2');
section2.style.backgroundColor= "lightgray";
const section3= document.getElementById('sec-3');
section3.style.backgroundColor= "greenyellow";

const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = "JavaScript";
const ul = document.createElement('ul');
const li1= document.createElement('li');
li1.innerText= "Variables";
const li2= document.createElement('li');
li2.innerText= "Strings";
const li3= document.createElement('li');
li3.innerText= "Functions";
const li4= document.createElement('li');
li4.innerText= "Array";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

section.appendChild(h2);
section.appendChild(ul);
section.classList.add('section');
const body = document.getElementById('body');
body.appendChild(section);


 
const sections = document.getElementsByClassName('section');
for(const section of sections){
    section.style.border = "2px solid red";
    section.style.padding = "20px";
    section.style.textAlign = "center";
    section.style.margin ="3px";
    section.style.borderRadius = "10px";
}

const heading = document.getElementById('h1');
heading.style.textAlign ="center";
heading.style.backgroundColor ="blue";
heading.style.padding = "6px";
heading.style.color = "yellow";

const classes = document.getElementById('sec-1');
const class1 = classes.classList;
console.log(class1);
classes.classList.add('bup');
console.log(class1);
console.log(classes.firstChild);

const ul1 = document.getElementById('ul1');
const li = document.createElement('li');
li.innerText = 'HTML5';
ul1.appendChild(li);

console.log(ul1.parentNode);