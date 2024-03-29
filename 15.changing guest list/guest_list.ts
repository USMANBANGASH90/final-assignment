

let guest_list :string[] = ['kashif','talha','sattar'] ;

for(let i=0; i<guest_list.length; i++){

    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n')

}
let absent_guest :string = 'talha' ;

let new_guest :string = 'muteeb' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you.\n\nthank you!\n\n')

}

console.log(`Mr. ${absent_guest}is not coming to the party.`) ;



