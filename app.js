'use strict';
//game intro
var UserName = prompt ('What is your name?');

       var response1 = ('Welcome ');

       alert(response1 + UserName  +'! ' + ' Thanks for joining me on this road to self exploration. Sometimes i forget who i am, so answer the following questions in a yes or no format to help me remember. Thank you for playing The Guessing Game');

       //console.log('The user\'s name is ' + UserName);


// First question
var AndyOrigin = prompt ('Was Andy born in Nigeria?');
if (AndyOrigin.toLowerCase() === 'yes') {
       alert('Yes! ' + UserName + ' That sound familiar!');

}else if (AndyOrigin.toLowerCase() === 'y') {
       alert('Yes! ' + UserName + ' That sound familiar!');

} else if (AndyOrigin.toLowerCase() === 'no') {
       alert(UserName + ' I could be wrong, but i think you\'re wrong.')
       prompt ('Was Andy born in Nigeria?');

}else if (AndyOrigin.toLowerCase() === 'n') {
       alert(UserName + ' I could be wrong, but i think you\'re wrong.')
       prompt ('Was Andy born in Nigeria?');
       
} else {
       alert ('Try Again!');
} //console.log('Where is Andy From?');
                                   


// second question
var AndyPet = prompt ('Does Andy hate Dogs?');
if (AndyPet.toLowerCase() === 'no') {
       alert('I think Symba the dog would strongly agree');

}else if (AndyPet.toLowerCase() === 'n') {
       alert('I think Symba the dog would strongly agree');

}else if (AndyPet.toLowerCase() === 'yes') {
       prompt('I think Symba the dog would strongly Disagree! Try again');

}else if (AndyPet.toLowerCase() === 'y') {
       prompt('I think Symba the dog would strongly Disagree! Try again');

}else {
       alert ('Andy Adores Dogs!!! try Again!');

} //console.log('And\'s pet prefrence');


// Third question
var AndyRide = prompt ('Can Andy ride a motorcycle?');
if (AndyRide.toLowerCase() === 'yes') {
       alert('Like a Pro!');

}else if (AndyRide.toLowerCase() === 'y') {
       alert('Like a Pro!');

}else if (AndyRide.toLowerCase() === 'no') {
       prompt('Might want to rethink that answer');

}else if (AndyRide.toLowerCase() === 'n') {
       prompt('Might want to rethink that answer');

}else {
       Alert ('Think some more and try again!!!');

}console.log('Andy\'s riding ability?');


//fourth question
var AndyCook = prompt ('Can Andy cook?');
if (AndyCook.toLowerCase() === 'yes') {
       alert('So I hear');

}else if (AndyCook.toLowerCase() === 'y') {
       alert('So I hear');

}else if (AndyCook.toLowerCase() === 'yes') {
       prompt('I thought you liked my cooking! Try again');

}else if (AndyCook.toLowerCase() === 'y') {
       prompt('I thought you liked my cooking! Try again');

}else {
       alert ('You must be hungry, Try again.');
}//console.log('Andy\'s cooking ability');

/// fifth question
       
var AndyBoard = prompt ('can Andy Snowboard?');
if (AndyBoard.toLowerCase() === 'no') {
       alert('But he would sure like to.');
       alert('Thank you for helping Andy discover himself');

}else if (AndyOrigin.toLowerCase() === 'n') {
       alert('But he would sure like to');
       alert('Thank you for helping Andy discover himself');

}else if (AndyPet.toLowerCase() === 'yes') {
       prompt('I like your faith! Try again');

}else if (AndyPet.toLowerCase() === 'y') {
       prompt('I like your faith! Try again');

}else {
       alert ('Try Again');
}//console.log('Andy\'s snowboarding abilities');


       
      