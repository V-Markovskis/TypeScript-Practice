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
console.log(arrayOfObjects(([{a:2,b:10},{a:5,b:4}]));
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
    let sortedArray = uniqArray.sort();

    return sortedArray;
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log("============================");

