var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController() {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.

    vm.joe = new Guy("Joe", 100);
    vm.bob = new Guy("Bob", 150);
    vm.bank = 200;

    function Guy(name, startingCash) {
        this.name = name;
        this.cash = startingCash;
        this.giveCash = function (amount) {
            if (amount <= this.cash && amount > 0) { //fill in the if statement. Does this guy have enough money to give?
                //subtract from the guys cash the amount requested, don't forget 'this'
                this.cash = this.cash - amount;
                return amount; //return the amount given.
            } else {
                alert("I don't have enough cash to give you")
                return 0;
            }
        }
        this.receiveCash = function (amount) {
            if (amount > 0) {
                this.cash = this.cash + amount;
                return amount;
            } else {
                alert("There is not enough money to transfer!");
                return 0;
            }
        }
    }

    vm.giveMoneyToJoe = function () {
        if (vm.bank >= 10) {
            vm.bank = vm.joe.receiveCash(10)
        } else {
            alert("The Bank is out of money.")
        }
    }

    vm.receiveMoneyFromBob = function () {
        vm.bank += vm.bob.giveCash(5);
    }
}
