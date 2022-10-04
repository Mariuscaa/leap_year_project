function isDivisibleBy4 (number) {
    return number % 4
}

function isDivisibleBy100 (number) {
    return number % 100;
}

function isDivisibleBy400 (number) {
    return number % 400;
}

function isLeapYear(year) {
    if (isDivisibleBy400(year) == 0) {
        return true;
    }
    else if (isDivisibleBy4(year) == 0 && isDivisibleBy100(year) != 0) {
        return true;
    }
    else {
        return false;
    }
}

module.exports.isDivisibleBy4 = isDivisibleBy4;
module.exports.isDivisibleBy100 = isDivisibleBy100;
module.exports.isDivisibleBy400 = isDivisibleBy400;
module.exports.isLeapYear = isLeapYear;