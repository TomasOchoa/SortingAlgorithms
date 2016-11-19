# Sorting Algorithms

The purpose of this repo is for personal practice and documentation of different sorting techniques, general information 
of said techniques and their implementations.

## Bubble Sort

### Performance

- Worst-case: **`O(n²)`**
- Best-case: **`O(n)`**
- Average-case: **`O(n²)`**

### Space Complexity

- Worst-case: **`O(1)`** auxiliary

### Abstract

- Compare each item to the next item.
- Swap if required.
- Repeat until a pass without any swaps occurred
    - No swaps `==` sorted

### Example

> **7**,**5**,2,4,3,9

> 5,**7**,**2**,4,3,9

> 5,2,**7**,**4**,3,9

> 5,2,7,**4**,**3**,9

> 5,2,7,4,**3**,**9**

> 5,2,7,4,3,9

### Algorithm

#### Pseudo Code

```
procedure bubbleSort(A: sortable items)
    n = length(A)
    do
        swapped = false
        for i = 1 to n-1
            if(A[i] > A[i+1])
                swap(A[i] with A[i+1])
                swapped = true
            end if
        end for
    while swapped = true
end procdeure
```

#### Implementations

##### JavaScript Implementation

```javascript
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
```

#### Other Variants