//declare a fuction
function formatName(firstName, lastName) {
    // console.log(firstName);
    // console.log(lastName);

    // return lastName + ' ' + firstName;
    var formatedName = lastName + ' ' + firstName;
    
   if(localStorage.getItem('userFullName')){

   }else{
        localStorage.setItem('userFullName', formatedName);
   }
    
    return formatedName;
}

var userFirstName = 'Emily';
var userLastName = 'Vagim';

formatName(userLastName, userFirstName);

//function expression
var createUserObj = function (firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null 
    };

    return userObj;
}(userFirstName, userLastName); //add this last set of parenthasis to evaluate function expression immediatly after creation

// console.log(createUserObj);

//constructor way
var concatinate = new Function('x', 'y', 'return x + y');
// console.log(concatinate('Emily', 'Vagim'));