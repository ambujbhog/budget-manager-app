
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
    allItems: {
        exp: [],
        inc: []
    },
    totals: {
        exp: 0,
        inc: 0
    }
    
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },

        testing: function(){
            console.log(data);
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
    };

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
    var input, newItem;

        // 1. Get the input data from the field
     input = UICtrl.getinput();

        // 2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
