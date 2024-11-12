
function perfect () {
    let sum = 0;
    for(let i = 0; i < n/i; i += 1 ) {
        if(n % i === 0) {
            sum += i
            sum += n/i
        }
    }
    return sum - n === n
}

console.log(perfect(6)) //true
console.log(perfect(1)) //false
console.log(perfect(28)) //true
console.log(perfect(4986)) //false
console.log(perfect(10)) //false
console.log(perfect(496)) // true













