/**
 *
 * Find common elements in three sorted arrays

 Given three arrays sorted in non-decreasing order, print all common elements in these arrays.
    Examples:

    Input:
    ar1[] = {1, 5, 10, 20, 40, 80}
    ar2[] = {6, 7, 20, 80, 100}
    ar3[] = {3, 4, 15, 20, 30, 70, 80, 120}
    Output: 20, 80

    Input:
    ar1[] = {1, 5, 5}
    ar2[] = {3, 4, 5, 5, 10}
    ar3[] = {5, 5, 10, 20}
    Output: 5, 5

 * 
 */

let x = [1, 5, 5]

let  = [3, 4, 5, 5]

let z = [5, 5, 10, 20]

const commonElements = (arr1, arr2, arr3) => {
  let i = j = k = 0;
  let res = [];
  
  while (i < arr1.length && j < arr2.length && k < arr3.length){
    if(arr1[i] === arr2[j] && arr2[j] === arr3[k]){
      res.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]){
      i++;
    } else if (arr2[j] < arr3[k]){
      j++;
    } else {
      k++;
    }
  }
  
  return res;
}

commonElements(x, y, z);
