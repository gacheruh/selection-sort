# Selection Sort

Selection sort is a simple sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and moving it to the beginning of the sorted part of the array.

The algorithm works by dividing the input array into two parts: the sorted part and the unsorted part. Initially, the sorted part is empty, and the unsorted part is the entire input array. In each iteration, the algorithm finds the smallest element in the unsorted part of the array and swaps it with the first element in the unsorted part, which is also the last element in the sorted part. This effectively adds the smallest element to the sorted part and reduces the size of the unsorted part by one. The algorithm continues this process until the entire array is sorted.

## Here is a step-by-step explanation of how selection sort works:

1. Set a variable i to 0, which represents the index of the first element in the unsorted part of the array.
2. Find the index j of the smallest element in the unsorted part of the array, which is the element with the minimum value among the elements from i to n-1, where n is the size of the array.
3. Swap the element at index i with the element at index j, which effectively adds the smallest element to the sorted part of the array.
4. Increment i by 1 to move to the next element in the unsorted part of the array.
5. Repeat steps 2-4 until i reaches n-1, which means the entire array is sorted.

Selection sort has a time complexity of O(n^2), which makes it inefficient for large arrays. However, it has the advantage of being simple and easy to implement, making it useful in situations where simplicity is more important than efficiency.
