function doubleAll(numbers) {
    let result = numbers.map(function (p) {
        return p * 2;
    });
    return result;
}

module.exports = doubleAll