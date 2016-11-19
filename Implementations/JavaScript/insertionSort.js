"use strict";

//main
(function(){
    //Array that holds random ints
    var array = [3,29,63,34,91,12,96,62,15,48,5,11,55,77,31,60,53,44,58,61,49,99,89,57,83,75,85,73,6,94,27,79,26,59,39,37,40,71,14,23,66,42,93,41,45,33,100,64,35,4,82,36,22,9,67,51,90,17,30,21,52,97,47,68,38,78,2,87,10,50,18,74,19,80,98,84,25,20,43,86,32,16,24,2,1,76,46,13,65,54,8,56,88,28,81,70,69,92];
    var array2 = [3,29,63,34,91,12,96,62,15,48,5,11,55,77,31,60,53,44,58,61,49,99,89,57,83,75,85,73,6,94,27,79,26,59,39,37,40,71,14,23,66,42,93,41,45,33,100];
    insertionSort(array2)
}());

/**
 * Insertion Sort
 * @param a - The array to sort
 */
function insertionSort(a){
    //Before sort
    console.log('Before Sort');
    console.log(a);
    console.log('------------');

    //Outer loop
    for(var i=0;i<a.length;i++){
        var j=i;
        //Inner loop
        while(j > 0 && a[j] < a[j-1]){
            var temp = a[j];
            a[j] = a[j-1];
            a[j-1] = temp;
            j--;
        }
    }
    //After sort
    console.log('After Sort');
    console.log(a);
}
