import doubleAll from './doubleAll';

function compareArrays(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length)
        return false;
    for (let i = 0; i < firstArray.length; ++i) {
        if (firstArray[i] !== secondArray[i])
            return false;
    }
    return true;
}

console.log('Test compareArray with two equal arrays: ', compareArrays([1, 2, 3], [1, 2, 3]) === true);
console.log('Test compareArray with two unequal arrays: ', compareArrays([1, 2, 3, 4], [1, 2, 3]) === false);


console.log('Test for doubling array elements containing only positive integers:', compareArrays(doubleAll([1, 2, 3]), [2, 4, 6]) === true);
console.log('Test for arrays with both positive and negative numbers:', compareArrays(doubleAll([1, 2.0, -3, -44]), [2, 4.0, -6, -88]) === true);