/**
 * @param {string} s
 * @return {number}
 */
let number = 0;
let romanConvserion = new Map();
romanConvserion.set('I', 1);
romanConvserion.set('V', 5);
romanConvserion.set('X', 10);
romanConvserion.set('L', 50);
romanConvserion.set('C', 100);
romanConvserion.set('D', 500);
romanConvserion.set('M', 1000);


var romanToInt = function(s) {
    for(let i = 0; i < s.length; i++){
        if (s[i] === 'I' && s[i + 1] === 'V') {
            number += 4;
            i++;

        }
        else if (s[i] === 'I' && s[i + 1] === 'X') {
            number += 9;
            i++;
        }
        else if (s[i] === 'X' && s[i + 1] === 'L') {
            number += 40;
            i++;
        }
        else if (s[i] === 'X' && s[i + 1] === 'C') {
            number += 90;
            i++;
        }
        else if (s[i] === 'C' && s[i + 1] === 'D') {
            number += 400;
            i++;
        }
        else if (s[i] === 'C' && s[i + 1] === 'M') {
            number += 900;
            i++;
        }
        else {
            number += romanConvserion.get(s.charAt(i));
        }
    }
    return number;
};
