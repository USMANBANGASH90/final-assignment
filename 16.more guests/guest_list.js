"use strict";
let guest_list = ['kashif', 'talha', 'sattar'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n')
// }
let absent_guest = 'talha';
let new_guest = 'muteeb';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n');
}
console.log(`Mr. ${absent_guest}is not coming to the party.`);
console.log('good news! we find big table so we are inviting 3 more guests.');
guest_list.unshift('ahmed');
guest_list.splice(2, 0, 'usman');
guest_list.push('anees');
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n');
}
