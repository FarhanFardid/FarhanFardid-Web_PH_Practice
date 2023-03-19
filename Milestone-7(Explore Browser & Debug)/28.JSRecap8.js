const object1 =  {
    name: 'Farhan',
    age: 25,
    profession: 'student'
};

const objJson = JSON.stringify(object1);
console.log(object1);
console.log(objJson); 

const objMain = JSON.parse(objJson);
console.log(objMain);

//  closure in Javascript

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2