let multiplyByThree = function (x) {
    let secondNum = function (y) {
        let thirdNum = function (z) {
            return (x * y * z);
        }
        return thirdNum;
    }
    return secondNum;
}
console.log((multiplyByThree)(4)(6)(8));