function fibs(input) {
    if (input <= 0) {
        return [];
    } else if (input === 1) {
        return [0];
    } else if (input === 2) {
        return [0, 1];
    } else {
        let fibArray = [0,1]
        for (let i=0; i<input-2; i++) {
            let num1 = fibArray[fibArray.length-1];
            let num2 = fibArray[fibArray.length-2];
            let nextNum = num1 + num2;
            fibArray.push(nextNum);
        }
    return fibArray;
    }
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

function fibsRec2(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const fibArray = fibsRec2(n - 1);
    const nextNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(nextNum);
    
    return fibArray;
}

console.log(`fibsRec2(4) = ${fibsRec2(4)}`);
//fibsRec2(4) n>2 fibsRec2(3) = [0,1,1] nextNum=1+1=2 push [0,1,1,2] return
//fibsRec2(3) n>2 fibsRec2(2) = [0,1] nextNum=1+0=1, push [0,1,1]
//fibsRec2(2) n===2 returns [0,1]
