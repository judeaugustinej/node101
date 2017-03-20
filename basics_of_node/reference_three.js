/*
making multiple copy of object.
*/

var Bucky = {
    favFood: "bacon",
    favMovie: "Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);

// == 'comparies the values'
console.log(19 == '19'); // True compares values only
console.log(19 === '19'); // false to compare values and types.
