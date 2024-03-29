"use strict";
//store the location in the array.make sure the array is not be a alphabetical order.
let places = ['italy', 'america', 'germany', 'eiffil tower', 'agra'];
//print your array in its original order.
console.log('original ' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//show that your array is still in its original order by printing it.
console.log('original ' + places);
// print your array in reverse alphaabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('original ' + places);
//reverse the order of your list.print the array to show that its order  has changes.
console.log('original ' + places.reverse());
//reverse the  order of your list again. print the list tom show its back to its original order.
console.log('original ' + places.reverse());
//sort your array so its started in alphabetical order. print the array to show  that its order has been changed.
console.log(places.sort());
//sort to change your array so its stored in reverse alphabetical order. print the list to  show that its  order has changed.
console.log('original ' + places.sort().reverse());
