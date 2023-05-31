let power = function (base) {
    let value = function (exponent) {
        return base ** exponent;
    }
    return value;
}
console.log((power)(5)(4));