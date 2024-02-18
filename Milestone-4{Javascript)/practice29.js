// Largest friend name

let friends = [ 'Jahid', 'Saddam', 'Toufique', 'Yazdani Cikus' ];

function largestName(list){
    let largestChar = list[0];
    for(let i=0; i < list.length; i++){
        let size = list[i].length;
        if(size > largestChar.length){
            largestChar = list[i];
        }
    }
return largestChar;

}

let friend = largestName(friends);
console.log("The largest name among the list is: ", friend);
