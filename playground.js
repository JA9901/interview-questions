const palindrome = (str) => {
    const middle = Math.floor(str.length / 2);
    for (let i = 0; i < middle; ++i) {
        console.log("iterated")
        const oppositeIndex = str.length - 1 -i;
        if (str[i] !== str[oppositeIndex]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome('abba'))