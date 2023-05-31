let f1 = function (math, math1, x, y) {
    let result = math(x, y);
    let result0 = math1(x, y);
    return [result, result0];
}
let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let mul = (x, y) => x * y;
let div = (x, y) => x / y;
let result1 = f1(add, mul, 15, 12);
console.log(result1);