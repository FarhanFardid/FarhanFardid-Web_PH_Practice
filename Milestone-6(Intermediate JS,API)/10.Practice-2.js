const friends = (arr) =>{
    let new_frnd=[];
    for(let i = 0; i <arr.length; i++){

       if(arr[i].length % 2 == 0){
         new_frnd.push(arr[i]);
}
    }
    return new_frnd;

}

const names=['saddam', 'jahid', 'toufique','mitul'];
console.log(friends(names));