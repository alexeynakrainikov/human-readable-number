module.exports = function toReadable(number) {
    const numbers10 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const numbers20_100 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numbers10_19 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let str = (number + "").split("");
    let result = [];
    if (str.length === 1) {
        return numbers10[str[0]] + "";
    }
    if (str.length === 2) {
        return str[0] === "1"
            ? numbers10_19[str[1]] + ""
            : str[1] === "0"
            ? numbers20_100[str[0] - 2] + ""
            : numbers20_100[str[0] - 2] + " " + numbers10[str[1]] + "";
    }
    if (str.length === 3) {
        return str[1] === "0" && str[2] === "0"
            ? numbers10[str[0]] + " " + "hundred"
            : str[1] === "0"
            ? numbers10[str[0]] + " " + "hundred" + " " + numbers10[str[2]]
            : str[1] === "1"
            ? numbers10[str[0]] +
              " " +
              "hundred" +
              " " +
              numbers10_19[str[2]] +
              ""
            : str[2] === "0"
            ? numbers10[str[0]] +
              " " +
              "hundred" +
              " " +
              numbers20_100[str[1] - 2] +
              ""
            : numbers10[str[0]] +
              " " +
              "hundred" +
              " " +
              numbers20_100[str[1] - 2] +
              " " +
              numbers10[str[2]] +
              "";
    }
};
