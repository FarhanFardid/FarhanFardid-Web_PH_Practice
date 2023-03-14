const name= 'Farhan Fardid';
const age = 25;
const isMuslim = true;

localStorage.setItem('Name', name);
localStorage.setItem('Age', age);
localStorage.setItem('Muslim', isMuslim);

const itemGet = localStorage.getItem('Name');
console.log(`The name is ${itemGet}`);

const numbers= [0, 1, 9, 6, 8, 8, 2, 0, 1, 2, 1];
const edu = {
    Degree:"M.Sc",
    Subject:"Cse",
    Semester:"2nd",
    CGPA: 4.00 
}

numbersStr = JSON.stringify(numbers);
eduStr = JSON.stringify(edu);

localStorage.setItem('Phone', numbersStr);
localStorage.setItem('Edu',eduStr);

console.log(JSON.parse(localStorage.getItem('Edu')));