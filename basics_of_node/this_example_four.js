/*
this - refers to the object that callled it.
*/
var Bucky = {
    printFirstName: function(){
        console.log("My name is Bucky");
        console.log(this === Bucky);
    }
};
// called explicitly through object
Bucky.printFirstName();

//The default calling context is global.
function doSomethingWorthless(){
    console.log("\nI am worthless");
    console.log(this === global);
}
// called by using the main program
doSomethingWorthless();
