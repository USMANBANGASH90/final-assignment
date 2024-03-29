"use strict";
let guest_list = ['kashif', 'talha', 'sattar'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n')
// }
let absent_guest = 'talha';
let new_guest = 'muteeb';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n')
// }
console.log(`Mr. ${absent_guest}is not coming to the party.`);
console.log('good news! we find big table so we are inviting 3 more guests.');
guest_list.unshift('ahmed');
guest_list.splice(2, 0, 'usman');
guest_list.push('anees');
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n');
}
console.log('\nsorry we cannot arrange big table, only two peoples will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry Mr. ${remove_guest},you are not invited to dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr. ' + guest_list[i] + ',\n\nyou are still invited./n/nthank you!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
