// (function() {
// 'use strict';

// angular.module('ShoppingListCheckOff', [])
// .controller('AlreadyBoughtController', AlreadyBoughtController)
// .controller('ToBuyController', ToBuyController)
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController.$inject = ['ShoppingListCheckOffService'];
// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

// function ToBuyController(ShoppingListCheckOffService) {
//     var buy = this;
//     buy.items = ShoppingListCheckOffService.GetItemsToBuy();
//     buy.buyItem = function(index) {
//         ShoppingListCheckOffService.buyItem(index);
//     };
// };

// function AlreadyBoughtController(ShoppingListCheckOffService) {
//     var bought = this;
//     bought.items = ShoppingListCheckOffService.GetBoughtItems();
// };

// function ShoppingListCheckOffService() {
//     var service = this;
//     var toBuy = [
//         { name: "lamb", quantity: 3 },
//         { name: "fish", quantity: 2 },
//         { name: "sushi", quantity: 20 },
//         { name: "chicken", quantity: 7 },
//         { name: "beef", quantity: 9 },
//         { name: "pork", quantity: 2 },
//         { name: "eggs", quantity: 3 }
//     ];

//     var boughtItems = [];

//     service.GetItemsToBuy = function() {
//         return toBuy;
//     };

//     service.GetBoughtItems = function() {
//         return boughtItems;
//     };

//     service.buyItem = function(itemIndex) {
//         var item = toBuy[itemIndex];
//         boughtItems.push(item);
//         ToBuy.splice(itemIndex, 1);
//     };
// };

// } )();






// (function () {
//     'use strict';
//     angular.module('ShoppingListCheckOff', [])
//         .controller('ToBuyController', ToBuyController)
//         .controller('AlreadyBoughtController', AlreadyBoughtController)
//         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


//     ToBuyController.$inject = ['ShoppingListCheckOffService'];
//     function ToBuyController(ShoppingListCheckOffService) {
//         var showList = this;
//         showList.items = ShoppingListCheckOffService.getShoppingList();

//         showList.removeItem = function (itemIndex) {
//             ShoppingListCheckOffService.removeItem(itemIndex);
//         };
//     }

//     AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//     function AlreadyBoughtController(ShoppingListCheckOffService) {
//         var alreadyBought = this;
//         alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
//     }

//     function ShoppingListCheckOffService() {
//         var service = this;

//         var boughtList = [];

//         var shoppingList = [
//             {
//                 name: "Milk",
//                 quantity: "2"
//             },
//             {
//                 name: "Carrot",
//                 quantity: "5"
//             },
//             {
//                 name: "Apples",
//                 quantity: "1"
//             },
//             {
//                 name: "Cheese",
//                 quantity: "3"
//             },
//             {
//                 name: "Bread",
//                 quantity: "1"
//             }
//         ];

//         service.getShoppingList = function () {
//             return shoppingList;
//         };
//         service.getBoughtList = function () {
//             return boughtList;
//         };

//         service.removeItem = function (itemIndex) {
//             var item = shoppingList[itemIndex];

//             boughtList.push(item);
//             shoppingList.splice(itemIndex, 1);
//         };


//     }



// })();




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