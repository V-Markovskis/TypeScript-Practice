import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));

// task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
const myFunction = (a: number, b: number) => a + b;
console.log(myFunction(1,2));
console.log(myFunction(1,10));
console.log(myFunction(99,1));
console.log("============================");

// task2
// Write a function that takes a value as argument
// Return the type of the value
function typeOfFunction(value: any): string {
    return typeof value;
}

console.log(typeOfFunction(1));
console.log(typeOfFunction(false));
console.log(typeOfFunction({}));
console.log(typeOfFunction(null));
console.log(typeOfFunction('string'));
console.log(typeOfFunction(['array']));
console.log("============================");

// task3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function isEqual(a: any, b: any): boolean {
    return (a === b);
}

console.log(isEqual(2, 3));
console.log(isEqual(3, 3));
console.log(isEqual(1, '1'));
console.log(isEqual('10', '10'));
console.log("============================");


// task4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
function nthChar(a: string, b: number) {
    return a.charAt(b - 1);
}

console.log(nthChar('abcd', 1));
console.log(nthChar('zyxbwpl', 5));
console.log(nthChar('gfedcba', 3));
console.log("============================");


// task5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function removeChar(a: string) {
    return a.slice(3);
}

console.log(removeChar('abcdefg'));
console.log(removeChar('1234'));
console.log(removeChar('fgedcba'));
console.log("============================");


// task6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function returnLastPart(a: string) {
    return a.substring(a.length - 3) ;
}

console.log(returnLastPart('abcdefg'));
console.log(returnLastPart('1234'));
console.log(returnLastPart('fgedcba'));
console.log("============================");


// task7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function returnFirstPart(a: string) {
    return a.substring(0, 3);
}

console.log(returnFirstPart('abcdefg'));
console.log(returnFirstPart('1234'));
console.log(returnFirstPart('fgedcba'));
console.log("============================");


// task8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function returnHalf(a: string) {
    return a.substring(0, a.length / 2);
}

console.log(returnHalf('abcdefgh'));
console.log(returnHalf('1234'));
console.log(returnHalf('gedcba'));
console.log("============================");


// task9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeLast(a: string) {
    return a.slice(0, a.length - 3);
}

console.log(removeLast('abcdefg'));
console.log(removeLast('1234'));
console.log(removeLast('fgedcba'));
console.log("============================");


//task10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function percentOf(a: number, b: number) {
    return (a / 100 * b);
}

console.log(percentOf(100,50));
console.log(percentOf(10,1));
console.log(percentOf(500,25));
console.log("============================");


//task11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
function mathOrder(a: number,b: number,c: number,d: number,e: number,f: number) {
    return Math.pow((a + b - c) * d / e , f);
}

console.log(mathOrder(6,5,4,3,2,1));
console.log(mathOrder(6,2,1,4,2,3));
console.log(mathOrder(2,3,6,4,2,3));
console.log("============================");

//task12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function isEvenNum(a: number) {
    return a % 2 === 0 ? true : false;
}

console.log(isEvenNum(10));
console.log(isEvenNum(-4));
console.log(isEvenNum(5));
console.log(isEvenNum(-111));
console.log("============================");


// task13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function charOccurs(a: string, b: string) {
    return (b.split(a).length - 1);
}

console.log(charOccurs('m', 'how many times does the character occur in this sentence?'));
console.log(charOccurs('h', 'how many times does the character occur in this sentence?'));
console.log(charOccurs('?', 'how many times does the character occur in this sentence?'));
console.log(charOccurs('z', 'how many times does the character occur in this sentence?'));
console.log("============================");


// task14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function isWholeNum(a: number) {
    return a % 1 === 0 ? true : false;
}

console.log(isWholeNum(4));
console.log(isWholeNum(1.123));
console.log(isWholeNum(1048));
console.log(isWholeNum(10.48));
console.log("============================");


// task15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function mathOperations(a: number, b: number) {
    if(a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log(mathOperations(10, 100));
console.log(mathOperations(90, 45));
console.log(mathOperations(8, 20));
console.log(mathOperations(2, 0.5));
console.log("============================");


// task16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function containsString(a: string, b: string) {
    if(a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

console.log(containsString('cheese', 'cake'));
console.log(containsString('lips', 's'));
console.log(containsString('Java', 'script'));
console.log(containsString(' think, therefore I am', 'I'));
console.log("============================");


// task17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function roundNum(a: number) {
    return a.toFixed(2);
}

console.log(roundNum(2.12397));
console.log(roundNum(3.136));
console.log(roundNum(1.12397));
console.log(roundNum(26.1379));
console.log("============================");



// task18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
function arrayFromNum(a: number) {
    let converter: string = a.toString();
    return converter.split("");
}

console.log(arrayFromNum(10));
console.log(arrayFromNum(931));
console.log(arrayFromNum(193278));
console.log("============================");


//task19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
function chaosString(a: string, b: string) {
    a = a.replace("%", "");
    let converter: string = b.replace("%", "").split("").reverse().join("");

    return a + converter;
}

console.log(chaosString('java', 'tpi%rcs'));
console.log(chaosString('c%ountry', 'edis'));
console.log(chaosString('down', 'nw%ot'));
console.log("============================");


// task20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
const isPrime = (num: number) => {
    const isPrimeNumber = (n: number) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    };

    if (isPrimeNumber(num)) {
        return num; // return if prime num
    }

    // if not prime - increment
    let nextPrime = num + 1;
    while (true) {
        if (isPrimeNumber(nextPrime)) {
            return nextPrime;
        }
        nextPrime++;
    }
};

console.log(isPrime(38));
console.log(isPrime(7));
console.log(isPrime(115));
console.log("============================");


// task21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function divideNum (x: number, y: number) {
    if(x % y === 0) {
        return x;
    }

    while(x % y !== 0) {
        x++;
    }
    
    return x;
}

console.log(divideNum(1, 23));
console.log(divideNum(23, 23));
console.log(divideNum(7, 3));
console.log(divideNum(-5, 7));
console.log("============================");


// task22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function insertString(a: string, b: string) {
    let arrayString: string[] = a.split("");
    for(let i = arrayString.length - 3; i >= 0; i -= 3) {
        //insert the element (b) into array (arrayString), starting at index (i), without deleting any elements
        arrayString.splice(i, 0, b);
    }
    
    return arrayString.join("");
}

console.log(insertString('1234567','.'));
console.log(insertString('abcde','$'));
console.log(insertString('zxyzxyzxyzxyzxyz','w'));
console.log("============================");


// task23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function incrementLetter(a: string) {
    let arrayString: string[] = a.split("");
    for(let i = 0; i < arrayString.length; i++) {
        if(arrayString[i] === 'z') {
            arrayString[i] = 'a';
        }

        arrayString[i] = String.fromCharCode(arrayString[i].charCodeAt(0) + 1);
        //https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters
    }
    return arrayString.join("");
}

console.log(incrementLetter('bnchmf'));
console.log(incrementLetter('bgddrd'));
console.log(incrementLetter('sdrshmf'));
console.log("============================");


// task24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function nthElement(a: number[], n: number) {
    return a[n - 1];
}

console.log(nthElement([1,2,3,4,5],3));
console.log(nthElement([10,9,8,7,6],5));
console.log(nthElement([7,2,1,6,3],1));
console.log("============================");


// task25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function removePartArray(a: number[]) {
    a.splice(0, 3);
    return a;
}

console.log(removePartArray([1,2,3,4]));
console.log(removePartArray([5,4,3,2,1,0]));
console.log(removePartArray([99,1,1]));
console.log("============================");


// task26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function lastPartRemove(a: number[]) {
    if(a.length === 3) {
        return a;
    }

    a.splice(a.length - 3, 3);
    return a;
}

console.log(lastPartRemove([1,2,3,4]));
console.log(lastPartRemove([5,4,3,2,1,0]));
console.log(lastPartRemove([99,1,1]));
console.log("============================");


// task27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function firstPartRemove(a: number[]) {
    if(a.length === 3) {
        return a;
    }

    a.splice(0, 3);
    return a;
}

console.log(firstPartRemove([1,2,3,4]));
console.log(firstPartRemove([5,4,3,2,1,0]));
console.log(firstPartRemove([99,1,1]));
console.log("============================");


// task28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function partOfArray(a: number[], n: number) {
    if(n >= a.length) {
        return a;
    }

    return a.slice(-n);
}

console.log(partOfArray([1, 2, 3, 4, 5], 2));
console.log(partOfArray([1, 2, 3], 6));
console.log(partOfArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log("============================");


//task29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function cleanArray(a: any[], b: any) {
    // return a.join("").replace(new RegExp(b, "g"), "").split("");

    return a.filter((element) => element !== b);
}

console.log(cleanArray([1,2,3], 2));
console.log(cleanArray([1,2,'2'], '2'));
console.log(cleanArray([false,'2',1], false));
console.log(cleanArray([1,2,'2',1], 1));
console.log("============================");


// task30
// Write a function that takes an array (a) as argument
// Return the number of elements in a
function countElements(a: number[]) {
    return a.length;
}

console.log(countElements([1,2,2,4]));
console.log(countElements([9,9,9]));
console.log(countElements([4,3,2,1,0]));
console.log("============================");


//task31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function negativeNumsArray(a: number[]) {
    const negativeNums = a.map(function(num) {
        return num < 0 ? 1 : 0;
    })
    // reduce adds all elements of the array starting from the inital value 0
    return negativeNums.reduce((accumulator, num) => accumulator + num, 0);
}

console.log(negativeNumsArray([1,-2,2,-4]));
console.log(negativeNumsArray([0,9,1]));
console.log(negativeNumsArray([4,-3,2,1,0]));
console.log("============================");


//task32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function descendingSort(a: number[]) {
    return a.sort().reverse();
}

console.log(descendingSort([1,3,2]));
console.log(descendingSort([4,2,3,1]));
console.log("============================");


// task33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function sortAlphabet(a: string[]) {
    return a.sort();
}

console.log(sortAlphabet(['b', 'c', 'd', 'a']));
console.log(sortAlphabet(['z', 'c', 'd', 'a', 'y', 'a', 'w']));
console.log("============================");



// task34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function averageNum(a: number[]) {
    let temp = 0;
    for(let i = 0; i < a.length; i++) {
        temp += a[i];
    }
    return temp / a.length;


    // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // const average = sum / numbers.length;

    // return average;
}

console.log(averageNum([10,100,40]));
console.log(averageNum([10,100,1000]));
console.log(averageNum([-50,0,50,200]));
console.log("============================");


// task35
// Write a function that takes an array of strings as argument
// Return the longest string
function longestString(a: string[]) {
    const longest = a.reduce(
        function (a, b) {
            return a.length > b.length? a : b;
        }
    )
    return longest;

    //(a) accumulator / remember previous iteration
    //(b) current element in iteration
}


console.log(longestString(['help', 'me']));
console.log(longestString(['I', 'need', 'candy']));
console.log("============================");


//task36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function equalElements(a: any[]) {
    const filteredArray = a.filter((element) => element === a[0]);

    return filteredArray.length === a.length;
}

console.log(equalElements([true, true, true, true]));
console.log(equalElements(['test', 'test', 'test']));
console.log(equalElements([1,1,1,2]));
console.log(equalElements(['10',10,10,10]));
console.log("============================");


// task37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function createArray(...a: any[][]) {
    //(...) spread operator
    //exp. a(array1, array2, array3)
    return a.reduce(
        function(accumulator, currentArray) {
            return accumulator.concat(currentArray);
        }, []);
}

console.log(createArray([1, 2, 3], [4, 5, 6]));
console.log(createArray(['a', 'b', 'c'], [4, 5, 6]));
console.log(createArray([true, true], [1, 2], ['a', 'b']));
console.log("============================");


//task38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function arrayOfObjects(a: {a: number, b: number}[]) {
    // (a: {b: number}[]) this is a parameter of the function a, which is expected to be an array of objects.
    // Each object in the array must have a property b of type number.
    return a.sort((object1, object2) => object1.b - object2.b);

    //if the result is negative, object1 will be placed before object2
    //if positive, object2 will be placed before object1
    //if zero, order will not change
}

console.log(arrayOfObjects([{a:1,b:2},{a:5,b:4}]));
console.log(arrayOfObjects([{a:2,b:10},{a:5,b:4}]));
console.log(arrayOfObjects([{a:1,b:7},{a:2,b:1}]));
console.log("============================");


//task39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function mergeArrays(a: any[], b: any[]) {
    let concatArray = a.concat(b);
    //concatArray.indexOf(item) === position - checks if the index of the first occurrence of item item in array concatArray is equal to the current index pos.
    //If it is, then the item is unique.
    //https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
    let uniqArray = concatArray.filter((item, position) => concatArray.indexOf(item) === position);
    // when the sort method is called without the compare function,
    // the array elements are sorted as strings
    let sortedArray = uniqArray.sort((a, b) => a - b);

    return sortedArray;
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log("============================");


//task40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function sumArrayElements(a: number[], b: number) {
    // let sumElements = 0;
    // for(let i = 0; i < a.length; i++) {
    //     if(a[i] > b) {
    //         sumElements += a[i];
    //     }
    // }

    // return sumElements;

    let filteredElements = a.filter((element) => element > b);
    let resultSum = filteredElements.reduce((acc, element) => acc + element, 0);
    return resultSum;
}

console.log(sumArrayElements([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumArrayElements([-10, -11, -3, 1, -4], -3));
console.log(sumArrayElements([78, 99, 100, 101, 401], 99));
console.log("============================");


//task41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function arrayRange(min: number, max: number) {
    // let array: number[] = []
    // for(let i = min; i <= max; i++) {
    //     array.push(i);
    // }

    // return array;

    return Array.from({length: max - min + 1}, (_, index) => min + index);
    // 1) array from object {length: max - min + 1}
    // 2) {length: max - min + 1} means object with only one property, determines the length of the new array
    // 3) (_, index) => min + index   arrow function that is used to display each of the new array.
        // The _ here stands for and argument that don't use (because we only care about index)
    // (_) unused argument, usage (currentValue)
}

console.log(arrayRange(2, 10));
console.log(arrayRange(1, 3));
console.log(arrayRange(-5, 5));
console.log(arrayRange(2, 7));
console.log("============================");



//task42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
function groupByFirstLetter(namesArr: string[]) {
    // Create an object to store grouping results
    const nameObj: Record<string, string[]> = {};

    //Iterate over each row in the array
    namesArr.forEach((item) => {
        // Get the first letter of the string and convert it to lower case
        const firstLetter: string = item[0].toLowerCase();
    
    // If the key with this letter is not in the object, create it and assign it to an empty array
    if(!nameObj[firstLetter]) {
        nameObj[firstLetter] = [];
    }

    // Add the current string to the corresponding array
    nameObj[firstLetter].push(item);
    });

    // Return object with grouped strings
    return nameObj;
}

console.log(groupByFirstLetter(['Alf', 'Alice', 'Ben']));
console.log(groupByFirstLetter(['Ant', 'Bear', 'Bird']));
console.log(groupByFirstLetter(['Berlin', 'Paris', 'Prague']));
console.log("============================");


//task43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
function addFirstElementArray(a: any[], b: number) {
    let arrayCopy = a.slice(0);
    if(b < 6) {
        b = 0;
    }
    arrayCopy.unshift(b);
    return arrayCopy;

    //return [num < 6 ? 0 : num, ...arr];
}

console.log(addFirstElementArray([1,2,3], 6));
console.log(addFirstElementArray(['a','b'], 2));
console.log(addFirstElementArray([null,false], 11));
console.log("============================");


//task44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function arrayCreation(a: number[], n: number) {
    const filteredArray = a.filter((currentValue, currentIndex, arrayToBeFiltered) => {
        return (currentIndex + 1 ) % n === 0;
    })

    return filteredArray;
}

console.log(arrayCreation([1,2,3,4,5,6,7,8,9,10],3));
console.log(arrayCreation([10,9,8,7,6,5,4,3,2,1],5));
console.log(arrayCreation([7,2,1,6,3,4,5,8,9,10],2));
console.log("============================");


//task45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function keyCountryValue(obj: { continent: string; country: string }) {
    return obj.country;
}

console.log(keyCountryValue({  continent: 'Asia',  country: 'Japan'}));
console.log(keyCountryValue({  country: 'Sweden',  continent: 'Europe'}));
console.log("============================");


//task46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
function objectPropert(obj: { [key: string]: any} ) {
    return obj['prop-2'];
}

// [key: string] This is the part that tells TS that object properties can have arbitary string keys
// (key) is a variable name that can be used to access object properties
// (string) is a variable type

console.log(objectPropert({  one: 1,  'prop-2': 2}));
console.log(objectPropert({  'prop-2': 'two',  prop: 'test'}));
console.log("============================");



//task47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function equalStringProperty(obj: { [key: string]: any }, word: string) {
    return obj[word];
}

//if you used a dot, JavaScript would try to find the property named 'word', not the value of the word variable.

console.log(equalStringProperty({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(equalStringProperty({  country: 'Sweden',  continent: 'Europe'}, 'country'));
console.log("============================");


//task48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function isPropertyExist(obj: { [key: string]: any }, b: string) {
    return obj[b] ? true : false;

    // return obj.hasOwnProperty(b);
}


console.log(isPropertyExist({a:1,b:2,c:3},'b'));
console.log(isPropertyExist({x:'a',y:'b',z:'c'},'a'));
console.log(isPropertyExist({x:'a',y:'b',z:'c'},'z'));
console.log("============================");



//task49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
function createObject(a: string) {
    return { key: a };
}

console.log(createObject('a'));
console.log(createObject('z'));
console.log(createObject('b'));
console.log("============================");



//task50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function createObjectWithParams(a: string, b: string) {
    return {
        a: b
    };
}

console.log(createObjectWithParams('a','b'));
console.log(createObjectWithParams('z','x'));
console.log(createObjectWithParams('b','w'));
console.log("============================");


// task51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function objectsFromArrays(a: any[], b: any[]): { [key: string]: any } {
    return a.reduce((result, key, index) => {
        result[key] = b[index];
        return result;
    }, {});

    //(result) at each iteration will start with an empty object {}
    //(result) represents an object to which properties are added at each step
    // (key) this is a variable that stores the current element of the array (a)
    // b[index] at each iteration, index provides the current index of the element in array a,
    // and we USE IT to get the corresponding element from array b
}

console.log(objectsFromArrays(['a','b','c'],[1,2,3]));
console.log(objectsFromArrays(['w','x','y','z'],[10,9,5,2]));
console.log(objectsFromArrays([1,'b'],['a',2]));
console.log("============================");


// task52
// Write a function that takes an object (a) as argument
// Return an array with all object keys
function arrayFromObjectKeys(a: { [key: string]: any }) : string[] {
    return Object.keys(a).reduce((result, key) => {
        result.push(key);
        return result;
    }, [])
}

console.log(arrayFromObjectKeys({a:1,b:2,c:3}));
console.log(arrayFromObjectKeys({j:9,i:2,x:3,z:4}));
console.log(arrayFromObjectKeys({w:15,x:22,y:13}));
console.log("============================");


// task53
// Write a function that takes an object (a) as argument
// Return the sum of all object values
function sumValuesFromObject(a: { [key:string]: any }): number {
    return Object.values(a).reduce((result, value) => {
        result += value;
        return result;
    }, 0);
}

console.log(sumValuesFromObject({a:1,b:2,c:3}));
console.log(sumValuesFromObject({j:9,i:2,x:3,z:4}));
console.log(sumValuesFromObject({w:15,x:22,y:13}));
console.log("============================")


//task54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function deletePropertyFromArray(obj: { [key: string]: any }) : { [key: string]: any } {
    const {b, ...rest} = obj;

    return rest;    
}

console.log(deletePropertyFromArray({ a: 1, b: 7, c: 3 }));
console.log(deletePropertyFromArray({ b: 0, a: 7, d: 8 }));
console.log(deletePropertyFromArray({ e: 6, f: 4, b: 5, a: 3 }));
console.log("============================")


//task55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function twoObjectsOperation(obj1: { [key: string]: any }, obj2: { [key: string]:any }) : { [key: string]: any} {
    if(obj2.hasOwnProperty('b')) {
        obj2['d'] = obj2['b'];
        delete obj2['b'];
    }

    const obj3 = {...obj1, ...obj2};
    return obj3;
}

console.log(twoObjectsOperation({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(twoObjectsOperation({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
console.log("============================")


//task56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function multiplyValues(obj: { [key: string]: any }, num: number) : { [key: string]: any } {
    return Object.keys(obj).reduce((result, key) => {
        result[key] = obj[key] * num;
        return result;
    }, {} as { [key: string]: any });
}

console.log(multiplyValues({a:1,b:2,c:3},3));
console.log(multiplyValues({j:9,i:2,x:3,z:4},10));
console.log(multiplyValues({w:15,x:22,y:13},6));
console.log("============================")


//task57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function swapProperties(obj: { [key: string]: any }): { [key: string]: any } {
    return Object.keys(obj).reduce((result, key) => {
        result[obj[key]] = key;
        return result;
    }, {} as { [key: string]: any });
}

// for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         const value = obj[key];
//         swappedObject[value] = key;
//     }
// }


console.log(swapProperties({z:'a',y:'b',x:'c',w:'d'}));
console.log(swapProperties({2:'a',4:'b',6:'c',8:'d'}));
console.log(swapProperties({a:1,z:24}));
console.log("============================")



//task58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function swapToNullValues(obj: { [key:string]: any }) : { [key: string]: any } {
    for (const key in obj) {
        if(obj.hasOwnProperty(key)) {
            let value = obj[key];
            if(value.trim() === "") {
                obj[key] = null;
            }
        }
    }
    return obj;
}

console.log(swapToNullValues({ a: 'a', b: 'b', c: '' }));
console.log(swapToNullValues({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(swapToNullValues({ a: 'a', b: 'b ', c: ' ', d: '' }));
console.log("============================")


//task59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function personalInformation(obj: { [key: string]: any }) : { [key: string]: any } {
    const result: { [key: string]: any } = {};

    if(obj.hasOwnProperty('fn')) {
        result.fn = obj.fn;
    }

    if(obj.hasOwnProperty('ln')) {
        result.ln = obj.ln;
    }

    if(obj.hasOwnProperty('size')) {
        result.size = `${obj.size}cm`;
    }

    if(obj.hasOwnProperty('weight')) {
        result.size = `${obj.weight}cm`;
    }

    return result;
}

console.log(personalInformation({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(personalInformation({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(personalInformation({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(personalInformation({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));
console.log("============================");


//task60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
function addContinent(array: { [key: string]: any }[], arg: string) : { [key:string]: any }[] {
    for(const obj of array) {
        for(const key in obj) {
            if(obj.hasOwnProperty(key)) {
                obj.continent = arg;
            }
        }
    }
    return array;
 }
 

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
console.log("============================");

