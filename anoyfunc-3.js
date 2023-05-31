let arr = [1, 2, 3, 4, 5];
let double = function (arr) {
    for (var index = 0; index < arr.length; index++) {
        arr[index] = arr[index] * 2;
    }
    return arr;
}
console.log(double(arr));