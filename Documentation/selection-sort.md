# Selection Sort

## Performance

- Worst-case: **``O(n²)``**
- Best-case: **``O(n²)``**
- Average-case: **``O(n²)``**

## Space Complexity

- Worst-case: **``O(n)``** total, **`O(1)`**

## Abstract

Sort by selecting the smallest unsorted item, then swapping it with the item in the next position to be filled.
- Pass through the entire array once
- Find the smallest element
- Once found, swap the smallest element with the first element with the first element of the array
- Repeat process while excluding the already sorted element

## Example

> **29**, 64, 73, 34, *20*

> 20, **64**, 73, 34, *29*

> 20, 29, **73**, *34* ,64

> 20, 29, 34, **73** , *64*

> 20, 29, 34, 64, 73

## Algorithm

- Array to sort: `A[0]` to `A[n-1]`
- n = length(A)
- Advance the position through the entire array 
    - Find the min element in the unsorted `a[i...n-1]`
    - Assume min is the first element
    - Find the smallest in array after the selected element
        - If there is a new smallest, swap the previous smallest with the new one
        
### Pseudo Code

```
procedure selectionSort(A: sortable)
    n = length
    for i=0 to n-1 (increment by 1)
        startMin = A[i]
        for j=i+1 to n (increment by 1)
            if A[j] < startMin
                swap startMin with A[j]
            end If
        end for
    end for
end procedure
```

### Implementations

#### JavaScript

```javascript
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
```

### Other Variants

#### Cocktail Sort

#### Bingo Sort
