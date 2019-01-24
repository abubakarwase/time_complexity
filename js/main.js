function array_filling(n){
    let arr = [];
    for(let i=0; i <n; i++){
        arr[i] = i;
    }
    arr.shift();
    return arr;
}
// array_filling(10000000);
let t1 = performance.now();
console.log(array_filling(10));
let t2 = performance.now();

console.log(`the time is: ${(t2-t1)/1000}seconds`);
