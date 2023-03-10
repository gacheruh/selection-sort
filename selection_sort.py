def selectionSort(arr):
    for i in range(len(arr) - 1):
        min = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min]:
                min = j

        if min != i:
            temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp

    return arr

print(selectionSort([3, 6, 2, 11, 17, 8, 0, 9]))
