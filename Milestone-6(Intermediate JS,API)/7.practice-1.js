const result =(arr) =>{

    let sum =0;
    let averg =0;
    let n = arr.length;

    for(let i=0; i < n; i++){
        let num = arr[i];
        let sqr = num * num;
        console.log(num);
        console.log(sqr);
        sum = sum + sqr;
    }
    console.log(sum);
    averg = sum /n;
   return averg.toFixed(2);

}

const numbers =[5,6,3,4,7,8];

console.log(result(numbers));