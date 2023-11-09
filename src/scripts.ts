// False outputs in Tasks: 11-2, 11-3, 23-4, 
// Q: 45, 61

/* Task 1
Write a function that takes two numbers (a and b) as argument
Subtract b from a
Return the result */

const subtract = (a: number, b: number): number => a - b;

console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98

/* Task 2
Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result */

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2)); // 3
console.log(sum(1, 10)); // 11
console.log(sum(99, 1)); // 100

/* Task 3
Write a function that takes a value as argument
Return the type of the value */

function getType(value: any): string {
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

function isequal(a: any, b: any): boolean {
  return a === b && typeof a === typeof b;
}

console.log(isequal(2, 3)); // false
console.log(isequal(3, 3)); // true
console.log(isequal(1, '1')); // false
console.log(isequal('10', '10'));// true


/* Task 5
Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a' */

function nthCharacter(a: string, n: number): string {
  if (n >= 0 && n < a.length) {
    return a.charAt(n - 1);
  } else {
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

function removeFirstThreeChars(a: string): string {
  return a.slice(3);
}

console.log(removeFirstThreeChars('abcdefg')); // Output: 'defg'
console.log(removeFirstThreeChars('1234')); // Output: '4'
console.log(removeFirstThreeChars('fgedcba')); // Output: 'dcba'

/* Task 7
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result */

function extractLastThreeChars(a: string): string {
  return a.slice(-3);
}

console.log(extractLastThreeChars('abcdefg')); // Output: 'efg'
console.log(extractLastThreeChars('1234')); // Output: '234'
console.log(extractLastThreeChars('fgedcba')); // Output: 'cba'

/* Task 8
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result */

function getFirstThreeChars(a: string): string {
  return a.slice(0, 3);
}

console.log(getFirstThreeChars('abcdefg')); // Output: 'abc'
console.log(getFirstThreeChars('1234')); // Output: '123'
console.log(getFirstThreeChars('fgedcba')); // Output: 'fge'

/* Task 9
Write a function that takes a string (a) as argument
Extract the first half a
Return the result */

function extractFirstHalf(a: string): string {
  const halfLength = Math.floor(a.length / 2);
  return a.slice(0, halfLength);
}

console.log(extractFirstHalf('abcdefgh')); // Output: 'abcd'
console.log(extractFirstHalf('1234')); // Output: '12'
console.log(extractFirstHalf('gedcba')); // Output: 'ged'

/* Task 10
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result */

function removeLast3Characters(a: string): string {
  return a.slice(0, -3);
} 

console.log(removeLast3Characters('abcdefg')); // Output: 'abcd'
console.log(removeLast3Characters('1234')); // Output: '1'
console.log(removeLast3Characters('fgedcba')); // Output: 'fged'

/* Task 11
Write a function that takes two numbers (a and b) as argument
Return b percent of a */

function calculatePercentage(a: number, b: number): number {
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
function complicatedCalculation(a: number, b: number, c: number, d: number, e: number, f: number): number {
  return ((a + b - c) * d / e)**f;
}

console.log(complicatedCalculation(6, 5, 4, 3, 2, 1)); // Output: 10.5
console.log(complicatedCalculation(6, 2, 1, 4, 2, 3)); // Output: 2744
console.log(complicatedCalculation(2, 3, 6, 4, 2, 3)); // Output: -8

/* Task 13
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false */

function isEvenNumber(number: number): boolean {
  return number % 2 === 0;
}

console.log(isEvenNumber(10)); // true
console.log(isEvenNumber(-4)); // true
console.log(isEvenNumber(5)); // false
console.log(isEvenNumber(-111)); // false

/* Task 14
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b */

function countOccurrences(a: string, b: string): number {
  let count = 0;
  for (let i = 0; i < b.length; i += 1) {
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

function isWholeNumber(a: number): boolean {
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

function function16(a: number, b: number): number {
  if (a < b) {
    return a / b;
  } else {
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

function function17(a: string, b: string): string {
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

function function19(a: number): number {
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

function function20(a: number): number[] {
  const digitString = a.toString();
  const digits = digitString.split('').map(Number); // Split the string and map to numbers
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

function function21(str1: string, str2: string): string {
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

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function nextHigherPrime(a: number): number {
  while (true) {
    if (isPrime(a)) return a;
    a += 1;
  }
}

function function22(a: number): number {
  if (isPrime(a)) {
    return a;
  } else {
    return nextHigherPrime(a);
  }
}

console.log(function22(38)); // 41
console.log(function22(7)); // 7
console.log(function22(115)); // 127
console.log(function22(2000));// 2003
console.log(function22(-1));// 2

/* Task 23
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y */

function function23(x: number, y: number): number {
  if (x % y === 0) {
    return x; // If x is divisible by y, return x
  } else {
    const remainder = x % y;
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

function function24(a: string, b: string): string {
  const aArray = a.split(''); // Split the string 'a' into an array of characters
  for (let i = aArray.length - 3; i > 0; i -= 3) {
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

function decipherString(s: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Define a function to increment a letter to the next letter in the alphabet
  const incrementLetter = (letter: string): string => {
    const index = alphabet.indexOf(letter);
    if (index === -1) {
      return letter; // If it's not a lowercase letter, leave it unchanged
    }
    const nextIndex = (index + 1) % alphabet.length;
    return alphabet[nextIndex];
  };

  // Use the incrementLetter function to decode the input string
  const decoded = s.split('').map(incrementLetter).join('');

  return decoded;
}

console.log(decipherString('bnchmf')); // 'coding'
console.log(decipherString('bgddrd')); // 'cheese'
console.log(decipherString('sdrshmf')); // 'testing'

/* Task 26
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a' */

function getNthElement(arr: any[], n: number): any {
  if (n >= 1 && n <= arr.length) {
    return arr[n - 1];
  } else {
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

function removeFirst3Elements(arr: any[]): any[] {
  if (arr.length <= 3) {
    return [];
  } else {
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

function extractLast3Elements(arr: any[]): any[] {
  if (arr.length <= 3) {
    return arr;
  } else {
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

function extractFirst3Elements(arr: any[]): any[] {
  if (arr.length <= 3) {
    return arr;
  } else {
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

function getLastNElements(arr: any[], n: number): any[] {
  if (n <= 0) {
    return [];
  } else if (n >= arr.length) {
    return arr;
  } else {
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

function removeValueFromArray(arr: any[], value: any): any[] {
  return arr.filter((element: any) => element !== value);
}

console.log(removeValueFromArray([1, 2, 3], 2)); // [1, 3]
console.log(removeValueFromArray([1, 2, '2'], '2')); // [1, 2]
console.log(removeValueFromArray([false, '2', 1], false)); // ['2', 1]
console.log(removeValueFromArray([1, 2, '2', 1], 1)); // [2, '2']

/* Task 32
Write a function that takes an array (a) as argument
Return the number of elements in a */

function countElements(arr: any[]): number {
  return arr.length;
}

console.log(countElements([1, 2, 2, 4])); // 4
console.log(countElements([9, 9, 9])); // 3
console.log(countElements([4, 3, 2, 1, 0])); // 5

/* Task 33
Write a function that takes an array of numbers as argument
Return the number of negative values in the array */

function countNegativeValues(arr: number[]): number {
  return arr.filter(num => num < 0).length;
}

console.log(countNegativeValues([1, -2, 2, -4])); // 2
console.log(countNegativeValues([0, 9, 1])); // 0
console.log(countNegativeValues([4, -3, 2, 1, 0])); // 1

/* Task 34
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order */

function sortDescending(arr: number[]): number[] {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([1, 3, 2])); // [3, 2, 1]
console.log(sortDescending([4, 2, 3, 1])); // [4, 3, 2, 1]

/* Task 35
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result */

function sortAlphabetically(arr: string[]): string[] {
  return arr.sort();
}

console.log(sortAlphabetically(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

/* Task 36
Write a function that takes an array of numbers as argument
It should return the average of the numbers */

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([10, 100, 40])); // 50
console.log(calculateAverage([10, 100, 1000])); // 370
console.log(calculateAverage([-50, 0, 50, 200])); // 50

/* Task 37
Write a function that takes an array of strings as argument
Return the longest string */

function findLongestString(strings: string[]): string {
  if (strings.length === 0) {
    return ''; // Return an empty string for an empty array
  }

  let longest = strings[0]; // Initialize the longest string with the first element

  for (const str of strings) {
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

function areAllElementsEqual(arr: any[]): boolean {
  if (arr.length === 0) {
    return true; // An empty array is considered to have equal elements
  }

  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i += i + 1) {
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

function combineArrays(...arrays: any[][]): any[] {
  return [].concat(...arrays);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(combineArrays([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

/* Task 40
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array */

function sortObjectsByBAscending(arr: { a: number; b: number }[]): { a: number; b: number }[] {
  // Use the sort() method with a custom comparison function
  return arr.sort((obj1, obj2) => obj1.b - obj2.b);
}

console.log(sortObjectsByBAscending([{ a: 1, b: 2 }, { a: 5, b: 4 }])); // [{a:1,b:2},{a:5,b:4}]
console.log(sortObjectsByBAscending([{ a: 2, b: 10 }, { a: 5, b: 4 }])); // [{a:5,b:4},{a:2,b:10}]
console.log(sortObjectsByBAscending([{ a: 1, b: 7 }, { a: 2, b: 1 }])); // [{a:2,b:1},{a:1,b:7}]

/* Task 41
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array */

function mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray = [...new Set([...arr1, ...arr2])];
  return mergedArray.sort((a, b) => a - b);
}

console.log(mergeAndSortArrays([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]

/* Task 42
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum */

function sumArrayElementsGreaterThan(arr: number[], b: number): number {
  let sum = 0;
  for (const num of arr) {
    if (num > b) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumArrayElementsGreaterThan([1, 2, 3, 4, 5, 6, 7], 2)); // Expected: 25
console.log(sumArrayElementsGreaterThan([-10, -11, -3, 1, -4], -3)); // Expected: 1
console.log(sumArrayElementsGreaterThan([78, 99, 100, 101, 401], 99)); // Expected: 602

/* Task 43
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max */

function generateRange(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(generateRange(2, 10)); // Expected: [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(generateRange(1, 3)); // Expected: [1, 2, 3]
console.log(generateRange(-5, 5)); // Expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(generateRange(2, 7)); // Expected: [2, 3, 4, 5, 6, 7]

/* Task 44
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']} */

function groupStringsByFirstLetter(strings: string[]): { [key: string]: string[] } {
  const result: { [key: string]: string[] } = {};

  for (const str of strings) {
    const firstLetter = str[0].toLowerCase(); // Convert to lowercase for consistent grouping

    if (result[firstLetter]) {
      result[firstLetter].push(str);
    } else {
      result[firstLetter] = [str];
    }
  }

  return result;
}

console.log(groupStringsByFirstLetter(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben'] }
console.log(groupStringsByFirstLetter(['Ant', 'Bear', 'Bird'])); // { a: ['Ant'], b: ['Bear', 'Bird'] }
console.log(groupStringsByFirstLetter(['Berlin', 'Paris', 'Prague'])); // { b: ['Berlin'], p: ['Paris', 'Prague'] }

/* Task 45
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array */

function updateArray(arr: any[], num: number): any[] {
  const result = num < 6 ? [0] : [num];
  return result.concat(arr);
}

console.log(updateArray([1, 2, 3], 6)); // [6, 1, 2, 3]
console.log(updateArray(['a', 'b'], 2)); // [0, 'a', 'b']
console.log(updateArray([null, false], 11)); // [11, null, false]

/* Task 46
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array */

function saveEveryNthElement(arr: any[], n: number): any[] {
  const result = [];
  for (let i = n - 1; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
}

console.log(saveEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3, 6, 9]
console.log(saveEveryNthElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // [6, 1]
console.log(saveEveryNthElement([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // [2, 6, 4, 8, 10]

/* Task 47
Write a function that takes an object with two properties as argument
It should return the value of the property with key country */

function getCountry(obj: { continent: string, country: string }): string {
  return obj.country;
}

console.log(getCountry({ continent: 'Asia', country: 'Japan' })); // 'Japan'
console.log(getCountry({ country: 'Sweden', continent: 'Europe' })); // 'Sweden'

/* Task 48
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor */

function getProp2Value(obj: { [key: string]: any }): any {
  return obj['prop-2'];
}

console.log(getProp2Value({ one: 1, 'prop-2': 2 })); // 2
console.log(getProp2Value({ 'prop-2': 'two', prop: 'test' })); // 'two'

/* Task 49
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string */

function getValueByKey(obj: { [key: string]: any }, key: string): any {
  return obj[key];
}

console.log(getValueByKey({ continent: 'Asia', country: 'Japan' }, 'continent')); // 'Asia'
console.log(getValueByKey({ country: 'Sweden', continent: 'Europe' }, 'country')); // 'Sweden'

/* Task 50
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise */

function hasKey(obj: { [key: string]: any }, key: string): boolean {
  return key in obj;
}

console.log(hasKey({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(hasKey({ x: 'a', y: 'b', z: 'c' }, 'a')); // false
console.log(hasKey({ x: 'a', y: 'b', z: 'c' }, 'z')); // true

/* Task 51
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object */

function createObjectWithKey(a: string): { key: string } {
  return { key: a };
}

console.log(createObjectWithKey('a')); // { key: 'a' }
console.log(createObjectWithKey('z')); // { key: 'z' }
console.log(createObjectWithKey('b')); // { key: 'b' }

/* Task 52
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object */

function createObjectWithKeyAndValue(a: string, b: string): { [key: string]: string } {
  const obj: { [key: string]: string } = {};
  obj[a] = b;
  return obj;
}

console.log(createObjectWithKeyAndValue('a', 'b')); // { a: 'b' }
console.log(createObjectWithKeyAndValue('z', 'x')); // { z: 'x' }
console.log(createObjectWithKeyAndValue('b', 'w')); // { b: 'w' }

/* Task 53
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object */

function createObjectFromArrays(a: (string | number)[], b: (string | number)[]): { [key: string]: string | number } {
  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length.");
  }

  const obj: { [key: string]: string | number } = {};

  for (let i = 0; i < a.length; i++) {
    obj[String(a[i])] = b[i];
  }

  return obj;
}

console.log(createObjectFromArrays(['a', 'b', 'c'], [1, 2, 3])); // { a: 1, b: 2, c: 3 }
console.log(createObjectFromArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // { w: 10, x: 9, y: 5, z: 2 }
console.log(createObjectFromArrays([1, 'b'], ['a', 2])); // { '1': 'a', b: 2 }

/* Task 54
Write a function that takes an object (a) as argument
Return an array with all object keys */

function getObjectKeys(obj: { [key: string]: any }): string[] {
  return Object.keys(obj);
}

console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // ['a', 'b', 'c']
console.log(getObjectKeys({ j: 9, i: 2, x: 3, z: 4 })); // ['j', 'i', 'x', 'z']
console.log(getObjectKeys({ w: 15, x: 22, y: 13 })); // ['w', 'x', 'y']

/* Task 55
Write a function that takes an object (a) as argument
Return the sum of all object values */

function sumObjectValues(obj: { [key: string]: number }): number {
  return Object.values(obj).reduce((acc, value) => acc + value, 0);
}

console.log(sumObjectValues({ a: 1, b: 2, c: 3 })); // 6
console.log(sumObjectValues({ j: 9, i: 2, x: 3, z: 4 })); // 18
console.log(sumObjectValues({ w: 15, x: 22, y: 13 })); // 50

/* Task 56
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b' */

function excludeProperty(obj: { [key: string]: any }, propertyToExclude: string): { [key: string]: any } {
  const result: { [key: string]: any } = {};
  for (const key in obj) {
    if (key !== propertyToExclude) {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(excludeProperty({ a: 1, b: 7, c: 3 }, 'b')); // { a: 1, c: 3 }
console.log(excludeProperty({ b: 0, a: 7, d: 8 }, 'b')); // { a: 7, d: 8 }
console.log(excludeProperty({ e: 6, f: 4, b: 5, a: 3 }, 'b')); // { e: 6, f: 4, a: 3 }

/* Task 57
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e' */

function mergeObjects(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any } {
  // Correct the property name 'b' to 'd' in the second object (obj2)
  if ('b' in obj2) {
    obj2['d'] = obj2['b'];
    delete obj2['b'];
  }

  // Merge both corrected objects
  const mergedObject = { ...obj1, ...obj2 };

  return mergedObject;
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}

/* Task 58
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object */

function multiplyValues(obj: { [key: string]: number }, multiplier: number): { [key: string]: number } {
  const multipliedObject: { [key: string]: number } = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      multipliedObject[key] = obj[key] * multiplier;
    }
  }

  return multipliedObject;
}

console.log(multiplyValues({ a: 1, b: 2, c: 3 }, 3)); // {a:3,b:6,c:9}
console.log(multiplyValues({ j: 9, i: 2, x: 3, z: 4 }, 10)); // {j:90,i:20,x:30,z:40}
console.log(multiplyValues({ w: 15, x: 22, y: 13 }, 6)); // {w:90,x:132,y:78}

/* Task 59
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object */

function swapKeysAndValues(obj: { [key: string]: string | number }): { [key: string]: string | number } {
  const swappedObject: { [key: string]: string | number } = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      swappedObject[obj[key]] = key;
    }
  }

  return swappedObject;
}

console.log(swapKeysAndValues({ z: 'a', y: 'b', x: 'c', w: 'd' })); // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapKeysAndValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapKeysAndValues({ a: 1, z: 24 })); // {1:'a',24:'z'}

/*  Task 60
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object */

function replaceEmptyWithNull(obj: { [key: string]: string }): { [key: string]: string | null } {
  const result: { [key: string]: string | null } = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key].trim(); // Remove leading and trailing whitespace

      result[key] = value === '' ? null : value;
    }
  }

  return result;
}

console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' })); // { a: 'a', b: 'b', c: null }
console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' })); // { a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })); // { a: 'a', b: 'b ', c: null, d: null }

/* Task 61
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in */

function extractPersonalInfo(person: {
  fn?: string;
  ln?: string;
  size?: number;
  weight?: number;
}): {
  fn?: string;
  ln?: string;
  size?: string;
  weight?: string;
} {
  const result: {
    fn?: string;
    ln?: string;
    size?: string;
    weight?: string;
  } = {};

  if (person.fn) {
    result.fn = person.fn;
  }

  if (person.ln) {
    result.ln = person.ln;
  }

  if (person.size !== undefined) {
    result.size = person.size + 'cm';
  }

  if (person.weight !== undefined) {
    result.weight = person.weight + 'kg';
  }

  return result;
}

console.log(extractPersonalInfo({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 }));
console.log(extractPersonalInfo({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 }));
console.log(extractPersonalInfo({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }));
console.log(extractPersonalInfo({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' }));

/* Task 62
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array */

/* Task 63
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array */

/* Task 64
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise */

/* Task 65
Write a function that takes two date instances as argument
It should return the number of days that lies between those dates */

/* Task 66
Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise */

/* Task 67
Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays */

/* Task 68
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element */

/* Task 69
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element */

/* Task 70
Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects */

/* Task 71
Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string */




