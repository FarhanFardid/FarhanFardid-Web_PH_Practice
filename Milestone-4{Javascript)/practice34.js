// Even length   Friends Array

let friends =['John', 'James', 'Jane', 'Ratul'];

function even_Friend(arr){
    let evenList = [];
    for(let i=0; i<arr.length; i++){
        let length = arr[i].length;
        if(length%2 == 0){
            evenList.push(arr[i])
        } 
    }
    return evenList;


}

let friendEven = even_Friend(friends);
console.log(friendEven);