const palindromes = function (str) {
    const chars = str
        .toLowerCase()
        .replace(/[^\w]|_/g, "")
        .split("")
        .join("");

    const reversedString = chars.split("").reverse().join("");
    return reversedString === chars;
};

// Do not edit below this line
module.exports = palindromes;
