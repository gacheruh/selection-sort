public class selection_sort {
    public static void main(String[] args){
        int[] arr = selectionSort(new int[]{6, 3, 4, 34, 9, 1, 5, 2});

        //In Java, when you print an array directly using System.out.println(), it will print the default toString() representation of the array, which is in the format of "[I@<hashcode>".
        // To print the sorted array instead of the default toString() representation, you need to loop through the array and print each element separately.
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }

    public static int[] selectionSort(int[] arr){
        for(int i = 0; i < arr.length - 1; i++){
            int min = i;
            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[min]){
                    min = j;
                }
            }
            if(min != i){
                int temp = arr[min];
                arr[min] = arr[i];
                arr[i] = temp;
            }
        }
        return arr;
    }
}
