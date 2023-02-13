module.exports = function toReadable(number) {
    const strNumber = number.toString();

    let firstRank = "";
    let secondRank = "";
    let thirdRank = "";

    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const hundrendsAndFirsts = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const fromTenToTwenty = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    if (strNumber.length === 3) {
        firstRank = hundrendsAndFirsts[strNumber[0]] + " hundred ";
        secondRank = tens[strNumber[1]] + " ";
        thirdRank = hundrendsAndFirsts[strNumber[2]];

        if (strNumber[1] === "1") {
            secondRank = fromTenToTwenty[strNumber[2]];
            return firstRank + secondRank;
        } else if (strNumber[1] === "0" && strNumber[2] === "0") {
            firstRank = hundrendsAndFirsts[strNumber[0]] + " hundred";
            return firstRank;
        } else if (strNumber[1] === "0") {
            return firstRank + thirdRank;
        } else if (strNumber[2] === "0") {
            secondRank = tens[strNumber[1]];
            return firstRank + secondRank;
        } else return firstRank + secondRank + thirdRank;
    }
    if (strNumber.length === 2) {
        secondRank = tens[strNumber[0]] + " ";
        thirdRank = hundrendsAndFirsts[strNumber[1]];

        if (strNumber[0] === "1") {
            secondRank = fromTenToTwenty[strNumber[1]];
            return secondRank;
        } else if (strNumber[1] === "0") {
            secondRank = tens[strNumber[0]];
            return secondRank;
        } else {
            return secondRank + thirdRank;
        }
    }
    if (strNumber.length === 1) {
        thirdRank = hundrendsAndFirsts[strNumber[0]];
        return thirdRank;
    }
};
