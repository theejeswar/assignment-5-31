let arr = [1, 2, 3, 4];
let even = function (arr) {
    let arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr1[i] = arr[i];
        }
    }
    return arr1;
}
console.log(even(arr));