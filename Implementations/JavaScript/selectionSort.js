"use strict";

//main
(function(){
    //Array that holds random ints
    var array = [3,29,63,34,91,12,96,62,15,48,5,11,55,77,31,60,53,44,58,61,49,99,89,57,83,75,85,73,6,94,27,79,26,59,39,37,40,71,14,23,66,42,93,41,45,33,100,64,35,4,82,36,22,9,67,51,90,17,30,21,52,97,47,68,38,78,2,87,10,50,18,74,19,80,98,84,25,20,43,86,32,16,24,2,1,76,46,13,65,54,8,56,88,28,81,70,69,92];
    var array2 = [3,29,63,34,91,12,96,62,15,48,5,11,55,77,31,60,53,44,58,61,49,99,89,57,83,75,85,73,6,94,27,79,26,59,39,37,40,71,14,23,66,42,93,41,45,33,100];
    selectionSort(array2);
}());

/**
 * selectionSort: Implementation of the selection sort algorithm
 * @param a - Array to sort
 */
function selectionSort(a){
    console.log('Before sorting');
    console.log(a);
    console.log('-------------------');

    for(var i=0;i<a.length-1;i++){
        //Variable that holds the current min for each pass
        var min = i;

        for(var j=i+1;j<a.length;j++){
            //If a smaller number has been found
            if(a[j] < a[min]){
                //Set the new min to the current min position
                min = j;
            }
        }
        //After each pass, if the current min element != the initial min element, swap them
        if(min != i){
            var temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
    console.log('After sorting');
    console.log(a);
}