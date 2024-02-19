// show  only the  names from the array of name objects
let persons = [
    { name:'John', age:20 },
    { name:'Mary', age:25 },
    { name:'Peter', age:30 }
];
const findNames = (arrOfObj) => {
    let names=[];
    for(let i=0; i< arrOfObj.length; i++){
        let name = arrOfObj[i].name;
        names.push(name);
    }
return names;
   }

   let result = findNames(persons);
   console.log(result);