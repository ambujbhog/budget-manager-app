
//Budget Controller
var budgetController = (function(){
    



})();


// UI Controller
var UIController = (function(){
    //Some Code



})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // 1. Get the input data from the field

        // 2. Add the item to the budget controller

        // 3. Add the item to the User Interface

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        console.log('It works');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        // Check if 'enter' is pressed and do the same thing as input button above
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
        
    });

})(budgetController, UIController);

