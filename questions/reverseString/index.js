/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
  return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator);
};

// string to array revrse the array and print back the string
// 'david' => ['d', 'a', 'v', 'i', 'd']
// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };

// const reverseString = (str) => {
//     let reversed = '';

//     for (let i = 0; i < str.length; ++i) {
//         reversed = str[i] + reversed;
//     }

//     return reversed;
// };

module.exports = reverseString;
