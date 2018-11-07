
//Budget Controller
var budgetController = (function(){
    
var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
};

var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
};

var data = {
    allItem: {
        exp: [],
        inc: []
    },
    totals: {
        exp: 0,
        inc: 0
    }
    
};


})();


// UI Controller
var UIController = (function(){

    var DOMstrings = { // All strings are stored here 
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return{
        getinput: function(){

            return {
             type: document.querySelector(DOMstrings.inputType).value,
             description: document.querySelector(DOMstrings.inputDescription).value,
             value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){ //Making private DOMstrings public
            return DOMstrings;

        }
    };

})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings(); // Getting DOMstrings

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
        // Check if 'enter' is pressed and do the same thing as input button above
            if (event.keyCode === 13 || event.which === 13){
                    ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function(){

        // 1. Get the input data from the field
        var input = UICtrl.getinput();

        // 2. Add the item to the budget controller

        // 3. Add the item to the User Interface

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        
    };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
