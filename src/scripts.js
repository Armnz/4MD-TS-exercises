//false outputs in Tasks: 11-2, 11-3, 23-4, 
/* Task 1
Write a function that takes two numbers (a and b) as argument
Subtract b from a
Return the result */
var subtract = function (a, b) { return a - b; };
console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98
/* Task 2
Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result */
var sum = function (a, b) { return a + b; };
console.log(sum(1, 2)); // 3
console.log(sum(1, 10)); // 11
console.log(sum(99, 1)); // 100
/* Task 3
Write a function that takes a value as argument
Return the type of the value */
function getType(value) {
    if (Array.isArray(value)) {
        return 'object'; // Arrays are of type 'object' in JavaScript
    }
    return typeof value;
}
console.log(getType(1)); // 'number'
console.log(getType(false)); // 'boolean'
console.log(getType({})); // 'object'
console.log(getType(null)); // 'object'
console.log(getType('string')); // 'string'
console.log(getType(['array'])); // 'object'
/* Task 4
Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type
 */
function isequal(a, b) {
    return a === b && typeof a === typeof b;
}
console.log(isequal(2, 3)); // false
console.log(isequal(3, 3)); // true
console.log(isequal(1, '1')); // false
console.log(isequal('10', '10')); // true
/* Task 5
Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a' */
function nthCharacter(a, n) {
    if (n >= 0 && n < a.length) {
        return a.charAt(n - 1);
    }
    else {
        return ''; // Return an empty string for out-of-range indices
    }
}
console.log(nthCharacter('abcd', 1)); // 'a'
console.log(nthCharacter('zyxbwpl', 5)); // 'w'
console.log(nthCharacter('gfedcba', 3)); // 'e'
/* Task 6
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result */
function removeFirstThreeChars(a) {
    return a.slice(3);
}
console.log(removeFirstThreeChars('abcdefg')); // Output: 'defg'
console.log(removeFirstThreeChars('1234')); // Output: '4'
console.log(removeFirstThreeChars('fgedcba')); // Output: 'dcba'
/* Task 7
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result */
function extractLastThreeChars(a) {
    return a.slice(-3);
}
console.log(extractLastThreeChars('abcdefg')); // Output: 'efg'
console.log(extractLastThreeChars('1234')); // Output: '234'
console.log(extractLastThreeChars('fgedcba')); // Output: 'cba'
/* Task 8
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result */
function getFirstThreeChars(a) {
    return a.slice(0, 3);
}
console.log(getFirstThreeChars('abcdefg')); // Output: 'abc'
console.log(getFirstThreeChars('1234')); // Output: '123'
console.log(getFirstThreeChars('fgedcba')); // Output: 'fge'
/* Task 9
Write a function that takes a string (a) as argument
Extract the first half a
Return the result */
function extractFirstHalf(a) {
    var halfLength = Math.floor(a.length / 2);
    return a.slice(0, halfLength);
}
console.log(extractFirstHalf('abcdefgh')); // Output: 'abcd'
console.log(extractFirstHalf('1234')); // Output: '12'
console.log(extractFirstHalf('gedcba')); // Output: 'ged'
/* Task 10
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result */
function removeLast3Characters(a) {
    return a.slice(0, -3);
}
console.log(removeLast3Characters('abcdefg')); // Output: 'abcd'
console.log(removeLast3Characters('1234')); // Output: '1'
console.log(removeLast3Characters('fgedcba')); // Output: 'fged'
/* Task 11
Write a function that takes two numbers (a and b) as argument
Return b percent of a */
function calculatePercentage(a, b) {
    return (b / a) * 100;
}
console.log(calculatePercentage(100, 50)); // Output: 50
console.log(calculatePercentage(10, 1)); // Output: 10
console.log(calculatePercentage(500, 25)); // Output: 5
/* Task 12
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then subtract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order */
// eslint-disable-next-line max-len
function complicatedCalculation(a, b, c, d, e, f) {
    return Math.pow(((a + b - c) * d / e), f);
}
console.log(complicatedCalculation(6, 5, 4, 3, 2, 1)); // Output: 10.5
console.log(complicatedCalculation(6, 2, 1, 4, 2, 3)); // Output: 2744
console.log(complicatedCalculation(2, 3, 6, 4, 2, 3)); // Output: -8
/* Task 13
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false */
function isEvenNumber(number) {
    return number % 2 === 0;
}
console.log(isEvenNumber(10)); // true
console.log(isEvenNumber(-4)); // true
console.log(isEvenNumber(5)); // false
console.log(isEvenNumber(-111)); // false
/* Task 14
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b */
function countOccurrences(a, b) {
    var count = 0;
    for (var i = 0; i < b.length; i += 1) {
        if (b[i] === a) {
            count += 1;
        }
    }
    return count;
}
console.log(countOccurrences('m', 'how many times does the character occur in this sentence?')); // 2
console.log(countOccurrences('h', 'how many times does the character occur in this sentence?')); // 4
console.log(countOccurrences('?', 'how many times does the character occur in this sentence?')); // 1
console.log(countOccurrences('z', 'how many times does the character occur in this sentence?')); // 0
/* Task 15
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false */
function isWholeNumber(a) {
    return Number.isInteger(a);
}
console.log(isWholeNumber(4)); // true
console.log(isWholeNumber(1.123)); // false
console.log(isWholeNumber(1048)); // true
console.log(isWholeNumber(10.48)); // false
console.log(isWholeNumber(0)); // true
/* Task 16
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value */
function function16(a, b) {
    if (a < b) {
        return a / b;
    }
    else {
        return a * b;
    }
}
console.log(function16(10, 100)); // 0.1
console.log(function16(90, 45)); // 4050
console.log(function16(8, 20)); // 0.4
console.log(function16(2, 0.5)); // 1
/* Task 18
Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation */
function function17(a, b) {
    if (a.includes(b)) {
        return b + a;
    }
    return a + b;
}
console.log(function17('cheese', 'cake')); // 'cheesecake'
console.log(function17('lips', 's')); // 'slips'
console.log(function17('Java', 'script')); // 'Javascript'
console.log(function17(' think, therefore I am', 'I')); // 'I think, therefore I am'
/* Task 19
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number */
function function19(a) {
    return parseFloat(a.toFixed(2));
}
console.log(function19(2.12397)); // 2.12
console.log(function19(3.136)); // 3.14
console.log(function19(1.12397)); // 1.12
console.log(function19(26.1379)); // 26.14
/* Task 20,
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting */
function function20(a) {
    var digitString = a.toString();
    var digits = digitString.split('').map(Number); // Split the string and map to numbers
    return digits;
}
console.log(function20(10)); // [1, 0]
console.log(function20(931)); // [9, 3, 1]
console.log(function20(193278)); // [1, 9, 3, 2, 7, 8]
/* Task 21
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc. */
function function21(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z]/g, '');
    str2 = str2.replace(/[^a-zA-Z]/g, '');
    str2 = str2.split('').reverse().join('');
    return str1 + str2;
}
console.log(function21('java', 'tpi%rcs')); // 'Javascript'
console.log(function21('c%ountry', 'edis')); // 'Countryside'
console.log(function21('down', 'nw%ot')); // 'Downtown'
/* Task 22
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number */
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
function nextHigherPrime(a) {
    while (true) {
        if (isPrime(a))
            return a;
        a += 1;
    }
}
function function22(a) {
    if (isPrime(a)) {
        return a;
    }
    else {
        return nextHigherPrime(a);
    }
}
console.log(function22(38)); // 41
console.log(function22(7)); // 7
console.log(function22(115)); // 127
console.log(function22(2000)); // 2003
console.log(function22(-1)); // 2
/* Task 23
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y */
function function23(x, y) {
    if (x % y === 0) {
        return x; // If x is divisible by y, return x
    }
    else {
        var remainder = x % y;
        return x + (y - remainder); // Find the next higher natural number divisible by y
    }
}
console.log(function23(1, 23)); // 23
console.log(function23(23, 23)); // 23
console.log(function23(7, 3)); // 9
console.log(function23(-5, 7)); // 0
/* Task 24
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string */
function function24(a, b) {
    var aArray = a.split(''); // Split the string 'a' into an array of characters
    for (var i = aArray.length - 3; i > 0; i -= 3) {
        aArray.splice(i, 0, b); // Insert 'b' after every 3rd character from the end
    }
    return aArray.join(''); // Join the array back into a string
}
console.log(function24('1234567', '.')); // '1.234.567'
console.log(function24('abcde', '$')); // 'ab$cde'
console.log(function24('zxyzxyzxyzxyzxyz', 'w')); // 'zwxyzwxyzwxyzwxyzwxyz'
/* Task 25
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word */
function decipherString(s) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // Define a function to increment a letter to the next letter in the alphabet
    var incrementLetter = function (letter) {
        var index = alphabet.indexOf(letter);
        if (index === -1) {
            return letter; // If it's not a lowercase letter, leave it unchanged
        }
        var nextIndex = (index + 1) % alphabet.length;
        return alphabet[nextIndex];
    };
    // Use the incrementLetter function to decode the input string
    var decoded = s.split('').map(incrementLetter).join('');
    return decoded;
}
console.log(decipherString('bnchmf')); // 'coding'
console.log(decipherString('bgddrd')); // 'cheese'
console.log(decipherString('sdrshmf')); // 'testing'
/* Task 26
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a' */
function getNthElement(arr, n) {
    if (n >= 1 && n <= arr.length) {
        return arr[n - 1];
    }
    else {
        return undefined; // Return undefined if n is out of bounds
    }
}
console.log(getNthElement([1, 2, 3, 4, 5], 3)); // 3
console.log(getNthElement([10, 9, 8, 7, 6], 5)); // 6
console.log(getNthElement([7, 2, 1, 6, 3], 1)); // 7
console.log(getNthElement([7, 2, 1, 6, 3], 7)); // undefined (out of bounds)
/* Task 27
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result */
function removeFirst3Elements(arr) {
    if (arr.length <= 3) {
        return [];
    }
    else {
        return arr.slice(3);
    }
}
console.log(removeFirst3Elements([1, 2, 3, 4])); // [4]
console.log(removeFirst3Elements([5, 4, 3, 2, 1, 0])); // [2, 1, 0]
console.log(removeFirst3Elements([99, 1, 1])); // []
console.log(removeFirst3Elements([7, 8])); // []
/* Task 28
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array */
function extractLast3Elements(arr) {
    if (arr.length <= 3) {
        return arr;
    }
    else {
        return arr.slice(-3);
    }
}
console.log(extractLast3Elements([1, 2, 3, 4])); // [2, 3, 4]
console.log(extractLast3Elements([5, 4, 3, 2, 1, 0])); // [2, 1, 0]
console.log(extractLast3Elements([99, 1, 1])); // [99, 1, 1]
console.log(extractLast3Elements([7, 8])); // [7, 8]
/* Task 29
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array */
function extractFirst3Elements(arr) {
    if (arr.length <= 3) {
        return arr;
    }
    else {
        return arr.slice(0, 3);
    }
}
console.log(extractFirst3Elements([1, 2, 3, 4])); // [1, 2, 3]
console.log(extractFirst3Elements([5, 4, 3, 2, 1, 0])); // [5, 4, 3]
console.log(extractFirst3Elements([99, 1, 1])); // [99, 1, 1]
console.log(extractFirst3Elements([7, 8])); // [7, 8]
/* Task 30
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a */
function getLastNElements(arr, n) {
    if (n <= 0) {
        return [];
    }
    else if (n >= arr.length) {
        return arr;
    }
    else {
        return arr.slice(arr.length - n);
    }
}
console.log(getLastNElements([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(getLastNElements([1, 2, 3], 6)); // [1, 2, 3]
console.log(getLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [6, 7, 8]
/* Task 31
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array */
function removeValueFromArray(arr, value) {
    return arr.filter(function (element) { return element !== value; });
}
console.log(removeValueFromArray([1, 2, 3], 2)); // [1, 3]
console.log(removeValueFromArray([1, 2, '2'], '2')); // [1, 2]
console.log(removeValueFromArray([false, '2', 1], false)); // ['2', 1]
console.log(removeValueFromArray([1, 2, '2', 1], 1)); // [2, '2']
/* Task 32
Write a function that takes an array (a) as argument
Return the number of elements in a */
function countElements(arr) {
    return arr.length;
}
console.log(countElements([1, 2, 2, 4])); // 4
console.log(countElements([9, 9, 9])); // 3
console.log(countElements([4, 3, 2, 1, 0])); // 5
/* Task 33
Write a function that takes an array of numbers as argument
Return the number of negative values in the array */
function countNegativeValues(arr) {
    return arr.filter(function (num) { return num < 0; }).length;
}
console.log(countNegativeValues([1, -2, 2, -4])); // 2
console.log(countNegativeValues([0, 9, 1])); // 0
console.log(countNegativeValues([4, -3, 2, 1, 0])); // 1
/* Task 34
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order */
function sortDescending(arr) {
    return arr.sort(function (a, b) { return b - a; });
}
console.log(sortDescending([1, 3, 2])); // [3, 2, 1]
console.log(sortDescending([4, 2, 3, 1])); // [4, 3, 2, 1]
/* Task 35
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result */
function sortAlphabetically(arr) {
    return arr.sort();
}
console.log(sortAlphabetically(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']
/* Task 36
Write a function that takes an array of numbers as argument
It should return the average of the numbers */
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    return sum / numbers.length;
}
console.log(calculateAverage([10, 100, 40])); // 50
console.log(calculateAverage([10, 100, 1000])); // 370
console.log(calculateAverage([-50, 0, 50, 200])); // 50
/* Task 37
Write a function that takes an array of strings as argument
Return the longest string */
function findLongestString(strings) {
    if (strings.length === 0) {
        return ''; // Return an empty string for an empty array
    }
    var longest = strings[0]; // Initialize the longest string with the first element
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        if (str.length > longest.length) {
            longest = str; // Update the longest string if a longer one is found
        }
    }
    return longest;
}
console.log(findLongestString(['help', 'me'])); // 'help'
console.log(findLongestString(['I', 'need', 'candy'])); // 'candy'
/* Task 38
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise */
function areAllElementsEqual(arr) {
    if (arr.length === 0) {
        return true; // An empty array is considered to have equal elements
    }
    var firstElement = arr[0];
    for (var i = 1; i < arr.length; i += i + 1) {
        if (arr[i] !== firstElement) {
            return false; // If any element is not equal to the first one, return false
        }
    }
    return true; // If all elements are equal, return true
}
console.log(areAllElementsEqual([true, true, true, true])); // true
console.log(areAllElementsEqual(['test', 'test', 'test'])); // true
console.log(areAllElementsEqual([1, 1, 1, 2])); // false
console.log(areAllElementsEqual(['10', 10, 10, 10])); // false
/* Task 39
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays */
function combineArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return [].concat.apply([], arrays);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(combineArrays([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']
/* Task 40
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array */
function sortObjectsByBAscending(arr) {
    // Use the sort() method with a custom comparison function
    return arr.sort(function (obj1, obj2) { return obj1.b - obj2.b; });
}
console.log(sortObjectsByBAscending([{ a: 1, b: 2 }, { a: 5, b: 4 }])); // [{a:1,b:2},{a:5,b:4}]
console.log(sortObjectsByBAscending([{ a: 2, b: 10 }, { a: 5, b: 4 }])); // [{a:5,b:4},{a:2,b:10}]
console.log(sortObjectsByBAscending([{ a: 1, b: 7 }, { a: 2, b: 1 }])); // [{a:2,b:1},{a:1,b:7}]
