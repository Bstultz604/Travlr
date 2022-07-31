

import { Blog } from '../models/blog';

//Function will merge arrays in reverse order
export function blogMerge(blogsArray: Blog[], left, right, mid) {

  //Number of elements in each sub array
  var leftElements = mid - left + 1;
  var rightElements = right - mid;

  //create temp arrays
  var leftArray : Blog[] = new Array(leftElements);
  var rightArray: Blog [] = new Array(rightElements);

  //Copy data to temp arrays leftArray[] and rightArrays[]
  for (i = 0; i < leftElements; i++) {
    leftArray[i] = blogsArray[left + i];
  }

  for (j = 0; j < rightElements; j++) {
    rightArray[j] = blogsArray[mid + 1 + j];
  }

  //merges the temp arrays back into blogsArray

  //Initial index of left and right array
  var i = 0; // left array
  var j = 0;  //right array

  //Inital index of merged array
  var k = left;

  

  while (i < leftElements && j < rightElements) {
    //compare elements in each sub array

    //Converts the arrays 'date' properties into DATE objects
    leftArray[i].date = new Date();
    rightArray[j].date = new Date(); 

    //Checks if elements 'date' variable in left array is less then right array
    //Converts the DATE object into milliseconds for easy numeric comparison
    if (leftArray[i].date.getTime() <= rightArray[j].date.getTime()) {
      //places elemnent from right array
      blogsArray[k] = rightArray[j];
      j++;
    }
    else {
      //places element from left array
      blogsArray[k] = leftArray[i];
      i++;
    }
    k++;
  }

  //copy remaining elements of left array
  while (i < leftElements) {
    blogsArray[k] = leftArray[i];
    i++;
    k++;
  }

  //Copy remaing elements of right array
  while (j < rightElements) {
    blogsArray[k] = rightArray[j];
    j++;
    k++;
  }
  
}

//recursivly calls to merge sort
export function blogMergeSort(blogsArray: Blog[], left, right){

  //returns recursive
  if (left >= right) {
    return;
  }

  var mid = left + Math.floor((right - left) / 2);

  blogMergeSort(blogsArray, left, mid);
  
  blogMergeSort(blogsArray, mid + 1, right);

  blogMerge(blogsArray, left, right, mid);
}
