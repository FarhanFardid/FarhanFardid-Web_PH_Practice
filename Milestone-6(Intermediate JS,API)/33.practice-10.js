// callback function

function goodMorning(name){
    console.log("Good Morning", name);

}
function goodEvening(name){
    console.log("Good Evening", name);
}

function doubleCallback (caller, name){
    caller(name);
}

doubleCallback(goodMorning,'john');
doubleCallback(goodEvening,'Don');