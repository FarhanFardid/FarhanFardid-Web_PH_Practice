let number = 9;

 
try{
     if(number% 2 == 0)
     {
        console.log("Even number");
     }
      else{
        throw("odd number");
      }
}
catch(error) {
 console.log('Err: ' +  error);
 console.log('inside catch');
}

console.log('ok');
