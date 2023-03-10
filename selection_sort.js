function selectionSort(arr){
    let i = 0

    while(i < arr.length) {
        for(let j = 0; j < arr.length -1; j++){
            if(arr[j + 1] < arr[j]){
                let min = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = min
            }
        }
        i++
    }

    return arr
}

console.log(selectionSort([8, 5, 9, 3, 6]));
console.log(selectionSort([51, 8, 4, 99, 161, 61, 16, 19, 2, 1, 3]));

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([8, 5, 9, 3, 6]));
