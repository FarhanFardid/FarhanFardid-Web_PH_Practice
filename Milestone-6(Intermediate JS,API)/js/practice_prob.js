if('true' === 'true'){
    console.log('True');
}

else{
    console.log('False');
}

if(true == 1){
    console.log('True');
}

else{
    console.log('False');
}

const result = n => {
   if(isNaN(n)){
        return 'true';
    }
    else{
        return 'false';
    }
}
console.log(result(6));

let value =false;
if(value){
    console.log("Nothing to show");
}
else{
    console.log("amazing");
}

const operation = (a,b, c)=>{
    if(c === "add"){
        return a+b;

    }
    else if(c === 'sub'){
        return a-b;
    }
    else if( c === 'mul')
    {
        return a *b;
    }
    else if(c === 'div')
    {
        return a/b;
    }
    else{
        return "invalid operation";
    }
} 

const res1 = operation(1,3,'mu');
console.log(res1);