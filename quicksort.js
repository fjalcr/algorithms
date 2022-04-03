//this store a the first value as a pivot, 
//then checkt if the next value is less or greater than the pivot 
//if the value is less that the pivot it is store in the left array 
//if the value is greater that the pivot it is store in the right array
//then after all values we concat the left right and the pivot and call again the quickSort on each (left and right) value

const quickSort = (arr) => {
    if (arr.length < 1) {
        return [];
    }

    let left = [], rigth = [], pivot = arr[0];
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            rigth.push(arr[i]);
        }

    }
    return [].concat(quickSort(left), pivot, quickSort(rigth));
}

console.log(quickSort([2, 4, 5, 1, 3, 5, 10, 21, 1])); // [1,1,2,3,4,5,5,10,21]
