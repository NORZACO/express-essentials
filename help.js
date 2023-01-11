
function gender(male) {
    //function that receives male as parameter
    //if male is passed as parameter return it
    //else return 'female'
    if (male == 'male') {
        return male
    } else {
        return 'female'
    }
}

function ageAdder(age) {
    //function that receives age as parameter
    //initialize humanAge with age value
    //adds humanAge and myAge(28) and return the value
    const humanAge = age
    let myAge = 28;
    return myAge + humanAge;
}

function multiply(n1, n2) {
    //function that receives two parameters n1 and n2
    //call ageAdder with n1 as parameter and return humanAge
    //call gender function with n2 as parameter and return gender
    //initialize some variable name, lastName, fullName
    //concatenate fullName, humanAge and gender and return them using template literals
    const callback = ageAdder(n1);
    const genderReveal = gender(n2);
    let name = 'Jonathan';
    let lastName = 'Braaten Mjøs';
    const fullName = name + " " + lastName;
    return `${fullName} ${callback} ${genderReveal}`;
}

// call multiply?
console.log(multiply(10));
console.log(multiply(28, 'male'));


//------------------------------------------------------------------------------------------------------------------------------------------

// function callback (firstName, lastName) {
//     let myName = 'Jonathan';
//     let myLastName = 'Braaten Mjøs';
//     const fullName = myName + myLastName;
//     return fullName
//   }

//   function resultCallback () {
//   let userinfo = callback('Jonathan', 'Braaten Mjøs')
//   return userinfo

//   }
//   console.log(resultCallback())


function callback(firstName, lastName) {
    //function that receives two parameters firstName and lastName
    //concatenates both parameters and return fullName
    const fullName = firstName + " " + lastName;
    return fullName
}

function resultCallback() {
    // function that calls callback function with 
    // two parameters 'Jonathan' and 'Braaten Mjøs'
    //and return the value
    let userinfo = callback('Jonathan', 'Braaten Mjøs')
    return userinfo

}
console.log(resultCallback())



// -------------------------------------------------------------------------------------------------


function randomRPS() {
    // array with the possible options of the game
    const options_array = ['rock', 'paper', 'scissors'];
    // generate a random number between 0 and 2
    const randomIndex = Math.floor(Math.random() * options_array.length);
    // return the option of the game selected by the generated random number
    return options_array[randomIndex];
}

console.log(randomRPS());

// -------------------------------------------------------------------------------------------------
