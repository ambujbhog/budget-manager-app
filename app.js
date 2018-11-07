
//Budget Controller
var budgetController = (function(){
    



})();


// UI Controller
var UIController = (function(){
    //Some Code



})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('button was clicked')
    });

})(budgetController, UIController);