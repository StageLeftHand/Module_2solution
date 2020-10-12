(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        buy.items = ShoppingListCheckOffService.GetItemsToBuy();
        buy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    };

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.GetBoughtItems();
    };

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuy = [
            { 
                name: "lamb", 
                quantity: 3 
            },
            { 
                name: "fish", 
                quantity: 2 
            },
            { 
                name: "sushi", 
                quantity: 20 
            },
            { 
                name: "chicken", 
                quantity: 7 
            },
            { 
                name: "beef", 
                quantity: 9 
            },
            { 
                name: "eggs", 
                quantity: 3 
            },
            { 
                name: "pork", 
                quantity: 2 
            }
        ];
        var boughtItems = [];

        service.GetItemsToBuy = function () {
            return toBuy;
        };

        service.GetBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (itemIndex) {
            var item = toBuy[itemIndex];
            boughtItems.push(item);
            toBuy.splice(itemIndex, 1);
        };
    };

})();