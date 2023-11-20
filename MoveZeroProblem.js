// Problem statement
// you are given an array of integers. your task is to move all the zeros to the end of the array while maintaining the relative order of the other elements. The modified array should have zeros at the end, and the non-zero elements should retain their original order.



function moveZeros(arr) {
    // Initialize pointers i and j to the beginning of the array
    let i = 0;
    let j = 0;

    // Length of the array
    const n = arr.length;

    // Iterate through the array using pointer i
    while (i < n) {
        // Check if the current element is non-zero
        if (arr[i] !== 0) {
            // Swap the elements at i and j
            [arr[i], arr[j]] = [arr[j], arr[i]];
            // Increment j to point to the next position
            j++;
        }
        // Move to the next element
        i++;
    }

    return arr;
}

// Example usage
const arr = [0, 1, 0, 2, 0, 3];
console.log("Original array:", arr);
console.log("Array after moving zeros:", moveZeros(arr));
