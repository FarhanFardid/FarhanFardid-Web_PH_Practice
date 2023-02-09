const section1= document.getElementById('sec-1');
section1.style.backgroundColor= "aqua";
 
const section2= document.getElementById('sec-2');
section2.style.backgroundColor= "lightgray";
const section3= document.getElementById('sec-3');
section3.style.backgroundColor= "greenyellow";

const sections = document.getElementsByClassName('section');
for(const section of sections){
    section.style.border = "2px solid red";
    section.style.padding = "15px";
    section.style.textAlign = "center";
    section.style.margin ="3px";
    section.style.borderRadius = "10px";
}

const heading = document.getElementById('h1');
heading.style.textAlign ="center";
heading.style.backgroundColor ="blue";
heading.style.padding = "6px";
heading.style.color = "yellow";