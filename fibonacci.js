function fibs(input) {
    let fibArray = [0, 1]

    for (let i=0; i<input-2; i++) {
        let num1 = fibArray[fibArray.length-1];
        let num2 = fibArray[fibArray.length-2];
        let nextNum = num1 + num2;
        fibArray.push(nextNum);
    }
    return fibArray;
}
console.log(`fibs(4) = ${fibs(4)}`);
console.log(`fibs(8) = ${fibs(8)}`);

//fibs(4)
//i=0 i<2 i++   num1=1, num2=0, num3=1    fibArray=[0,1,1]
//i=1 i<2 i++   num1=1, num2=1, num3=2    fibArray=[0,1,1,2]
//i=2 i<2 i++  doesn't pass i<2, return fibArray [0,1,1,2]

function fibsRec(input, fibArray = [0,1]) {
    if (input <= 2) return fibArray;

    if (input > 2) {
        let num1 = fibArray[fibArray.length-1];
        let num2 = fibArray[fibArray.length-2];
        let nextNum = num1 + num2;
        fibArray.push(nextNum);
        return fibsRec(input-1, fibArray)
    }
}

console.log(`fibsRec(4) = ${fibsRec(4)}`);
console.log(`fibsRec(8) = ${fibsRec(8)}`);
