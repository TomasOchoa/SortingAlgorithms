"use strict";

//main
(function(){
    //Array that holds some sortable items
    var array = [3,29,63,34,91,12,96,62,15,48,5,11,55,77,31,60,53,44,58,61,49,99,89,57,83,75,85,73,6,94,27,79,26,59,39,37,40,71,14,23,66,42,93,41,45,33,100,64,35,4,82,36,22,9,67,51,90,17,30,21,52,97,47,68,38,78,2,87,10,50,18,74,19,80,98,84,25,20,43,86,32,16,24,2,1,76,46,13,65,54,8,56,88,28,81,70,69,92];
    var array2 = [3,29,63,34,91,12,96,62,15,48,5,11,55,77,31,60,53,44,58,61,49,99,89,57,83,75,85,73,6,94,27,79,26,59,39,37,40,71,14,23,66,42,93,41,45,33,100];

    //Do bubble sort
    bubbleSort(array);
}());

/**
 * Bubble Sort
 * @param a Array to sort
 */
function bubbleSort(a){
    var swapped;
    do{
        swapped = false;
        for(var i=0;i<a.length;i++){
            if(a[i] > a[i+1]){
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped);
}