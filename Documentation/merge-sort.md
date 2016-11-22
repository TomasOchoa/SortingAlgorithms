# Merge Sort

## Performance

- Worst-case: **`O(n log n)`**
- Best-case: **`O(n log n)`** typical, **`O(n)`** natural variant 
- Average-case: **`O(n log n)`**

## Space Complexity

- Worst-case: **`O(n)`** total, **`O(n)`** auxiliary

## Abstract

Sorting is based on the *divide and conquer* paradigm. It involves the following three steps:
1. Divide the array into two (or more) subarrays.
2. Sort each subarray (Conquer).
3. Merge them into one (In a smart way!).

## Example

Consider the following array of numbers.
> `27, 10, 12, 25, 34, 16, 15, 31`

Divide it into two parts.
> `27, 10, 12, 25` `34, 16, 15, 31`

Divide each part into two more parts.
> `27, 10` `12, 25` `34, 16` `15, 31`

Divide each part again into two more parts.
> `27` `10` `12` `25` `34` `16` `15` `31`

Merge parts (**Cleverly**!).
> `10, 27` `12, 25` `16, 34` `15, 31`

Repeat merge of parts.
> `10, 12, 25, 27` `15, 16, 31, 34`

Merge into final part
> `10, 12, 15 ,16, 25, 27, 31, 34`

## Algorithm

### Pseudo Code

#### Top-Down Implementation

#### Bottom-up Implementation

### Implementations

### Other Variants
