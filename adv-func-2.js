let func = function (i, j) {
    if (i < j) {
        console.log("i is smaller value");
    } else {
        console.log("j is smaller value");
    }
    return function (g) {
        for (var h = 1; h <= 10; h++) {
            let k = g * h;
            console.log(g + "x" + h + "=" + k);
        }
    }

}
let r1 = func(10, 5);
let r2 = r1(5);
console.log(r2);
