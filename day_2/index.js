const T1 = [1,2,3,4,5,6,7,8,9,10]

/** Returns a new array containing only the even elements of the input array.
@param {Array<number>} Array - The input array to filter.
@returns {Array<number>} - The new array containing only the even elements. */
function getEvenElements(Array) {
    return Array.filter((number) => number % 2 === 0 )
}


/** Returns a new array containing only the odd elements of the input array.
@param {Array<number>} Array - The input array to filter.
@returns {Array<number>} - The new array containing only the odd elements. */
function getOddElements(Array) {
    return Array.filter((number) =>  number & 1 === 1 )
}


/** Returns the maximum element in the input array.
@param {Array<number>} Array - The input array to find the maximum element.
@returns {number} - The maximum element in the input array. */
function getMaxInArray(Array) {
    return Math.max(...Array);
}


/** Returns the full name by concatenating the first name and last name arguments.
@param {string} _firstName - The first name to concatenate.
@param {string} _lastName - The last name to concatenate.
@returns {string} - The full name resulting from concatenating the first and last names. */
function fullName(_firstName , _lastName) {
    return Array.from(arguments).join(" ");
}


/** Returns the average value of elements in the input array.
@param {Array<number>} Array - The input array to calculate the average value.
@returns {number} - The average value of elements in the input array. */
function arrayAverage(Array) {
    return Array.reduce((S , el) => S + el) / Array.length
}

/**TEST */
let T2 = getEvenElements(T1); // [1,2,3,4,5,6,7,8,9,10]
let T3 = getOddElements(T1); // [ 2, 4, 6, 8, 10 ]
let T5 = getMaxInArray(T1); // [ 1, 3, 5, 7, 9 ] 
let myName = fullName("Toky" , "Fy"); // "Toky fy"
let Average = arrayAverage(T1); // 5.5

console.log(T1);
console.log(T2);
console.log(T3);
console.log(myName);
console.log(Average);