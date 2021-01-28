'use strict';
function knowMe (){
Gettting the user name
var UserName = prompt('What is your name?');

var response1 = ('Welcome ');

alert(response1 + UserName + '! ' + ' Thanks for joining me on this road to self exploration. Sometimes i forget who i am, so answer the following questions to help me remember. Thank you for playing The Guessing Game');

console.log('The user\'s name is ' + UserName);


//First question
var AndyOrigin = prompt('Was Andy born in Nigeria?');
if (AndyOrigin.toLowerCase() === 'yes') {
       alert('Yes! ' + UserName + ' That sound familiar!');

} else if (AndyOrigin.toLowerCase() === 'y') {
       alert('Yes! ' + UserName + ' That sound familiar!');

} else if (AndyOrigin.toLowerCase() === 'no') {
       alert(UserName + ' I could be wrong, but i think you\'re wrong.')
       prompt('Was Andy born in Nigeria?');

} else if (AndyOrigin.toLowerCase() === 'n') {
       alert(UserName + ' I could be wrong, but i think you\'re wrong.')
       prompt('Was Andy born in Nigeria?');

} else {
       alert('Try Again!');
} //console.log('Where is Andy From?');



//second question
var AndyPet = prompt('Does Andy hate Dogs?');
if (AndyPet.toLowerCase() === 'no') {
       alert('I think Symba the dog would strongly agree');

} else if (AndyPet.toLowerCase() === 'n') {
       alert('I think Symba the dog would strongly agree');

} else if (AndyPet.toLowerCase() === 'yes') {
       prompt('I think Symba the dog would strongly Disagree! Try again');

} else if (AndyPet.toLowerCase() === 'y') {
       prompt('I think Symba the dog would strongly Disagree! Try again');

} else {
       alert('Andy Adores Dogs!!! try Again!');

} //console.log('And\'s pet prefrence');


// Third question
var AndyRide = prompt('Can Andy ride a motorcycle?');
if (AndyRide.toLowerCase() === 'yes') {
       alert('Like a Pro!');

} else if (AndyRide.toLowerCase() === 'y') {
       alert('Like a Pro!');

} else if (AndyRide.toLowerCase() === 'no') {
       prompt('Might want to rethink that answer');

} else if (AndyRide.toLowerCase() === 'n') {
       prompt('Might want to rethink that answer');

} else {
       alert('Think some more and try again!!!');

}//console.log('Andy\'s riding ability?');


//fourth question
var AndyCook = prompt('Can Andy cook?');
if (AndyCook.toLowerCase() === 'yes') {
       alert('So I hear');

} else if (AndyCook.toLowerCase() === 'y') {
       alert('So I hear');

} else if (AndyCook.toLowerCase() === 'no') {
       prompt('I thought you liked my cooking! Try again');

} else if (AndyCook.toLowerCase() === 'n') {
       prompt('I thought you liked my cooking! Try again');

} else {
       alert('You must be hungry, Try again.');
}//console.log('Andy\'s cooking ability');

/// fifth question

var AndyBoard = prompt('can Andy Snowboard?');
if (AndyBoard.toLowerCase() === 'no') {
       alert('But he would sure like to.');
       alert('Thank you for helping Andy discover himself');

} else if (AndyOrigin.toLowerCase() === 'n') {
       alert('But he would sure like to');
       alert('Thank you for helping Andy discover himself');

} else if (AndyPet.toLowerCase() === 'yes') {
       prompt('I like your faith! Try again');

} else if (AndyPet.toLowerCase() === 'y') {
       prompt('I like your faith! Try again');

} else {
       alert('Try Again');
}//console.log('Andy\'s snowboarding abilities');

}




       // question6
       //declares value of position
               let position = 3;
               let ageValue = ''
          for (let i = 0;  i <= position; i++) {
              
              let ageValue = prompt('Guess my dog\'s age?');    
                 
                if (ageValue < 10) {
                     alert('Too low! Try again!');
       
              } else if (ageValue > 10) {
                     alert('Too High! Try again!');
       
       
              } else if (ageValue === '10') {
                    alert('You Win!!!');
                    i = 4;
              

              }if (i === 3) { 
                     alert('He\'s 10 years old!');

              }
       
       }        console.log('loop is done')


// question 7
var arrayOfPlaces = ['colombia','fuji','patagonia','peru','ghana','south africa','myanmar'];
question7: 
 for (let j = 0; j < 6; j++){     
var futureDreams = prompt('Where would Andy like to live next? You have 6 tries').toLowerCase();
 for (let i = 0; i < arrayOfPlaces.length; i++){   
       if (futureDreams === arrayOfPlaces[i]){        
             alert('You know me well.')
                break question7;    
       }if(futureDreams !== arrayOfPlaces.length) {
             alert('Wrong! Try again!')
       }if (j === 5){
            alert('Nice try, this is where i\'m at ' + arrayOfPlaces);
       }
}
}
      


  // the question                          
                              
                            
  // if they get they run out of tries, this should happen                              
                              
                                
}

knowMe ()