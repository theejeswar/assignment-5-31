let add = function (x) {
    x = x + 3;
    let other = function (y) {
        return x + y;
    }
    return other;
}
console.log((add)(12)(15));