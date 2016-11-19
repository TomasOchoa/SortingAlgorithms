# Insertion Sort

## Performance

- Worst-case: **`O(n²)`** comparisons, swaps
- Best-case: **`O(n)`** comparisons, **`O(1)`** swaps 
- Average-case: **`O(n²)`** comparisons, swaps

## Space Complexity

- Worst-case: **`O(n)`** total, **`O(1)`** auxiliary

## Abstract

Sorts an unordered list of elements by moving it's entries one at a time, and then inserts each of them into a sorted
part (initially empty).

## Advantages

- Simple implementation
- Efficient for (quite) small data sets
- Adaptive
- Stable
- In place
- Can sort a list as it is received

## Example

- Sorted part is in **bold**
- Unsorted part is not in bold.

> 29, 20, 73, 34, 64
 
> **29**, 20, 73, 34, 64 
 
> **20**, **29**, 73, 34, 64

> **20**, **29**, **73**, 34, 64

> **20**, **29**, **34**, **73**, 64

> **20**, **29**, **34**, **64**, **73**

## Algorithm

### Pseudo Code
- For zero-based array:
```
for i=1 to length(A) - 1
    j = i
    while j > 0 and A[j] < A[j-1]
        swap(A[j], A[j-1])
        j = j-1
    end while
end for
```

### Optimized Pseudo Code 

### Implementations

#### JavaScript

```javascript
function insertionSort(a){
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
}
```

### Other Variants
