console.log("Dom in JS");

const tags = document.getElementsByTagName('ul');
console.log("The tags get by tags name are: ", tags);
console.log(tags[0].innerText);

const sections = document.getElementsByClassName('section');
console.log("This is get by class names: ", sections); 

const ids = document.getElementById('h1');
console.log("This is get by id: ", ids);

const select = document.querySelector('.section ul li');
console.log("This is get by query selector: ", select);