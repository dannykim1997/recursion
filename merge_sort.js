function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while(leftIndex < left.length && rightIndex < right.length) {
            if(left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    let middle = Math.floor(array.length/2);
    let leftHalf = array.slice(0, middle);
    let rightHalf = array.slice(middle);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

let unsorted = [2,7,3,5,8,6,1,20];
console.log(`mergeSort [2,7,3,5,8,6] = ${mergeSort(unsorted)}`);