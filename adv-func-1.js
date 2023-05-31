function f1(math, math1, x, y) {
    let result = math(x, y);
    let result0 = math1(x, y);
    return [result, result0];
}
let add = function (x, y) {
    let a = x + y;
    return a;
}
let sub = function (x, y) {
    let b = x - y;
    return b;
}
let mul = function (x, y) {
    let c = x * y;
    return c;
}
let div = function (x, y) {
    let d = x / y;
    return d;
}
let result1 = f1(add, div, 15, 12);
console.log(result1);
