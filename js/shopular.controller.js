(function() {
    'use strict';

    angular.module('shopular')
        .controller('ShopularController', ShopularController);

    ShopularController.$inject = ['ShopularService'];

    function ShopularController(ShopularService) {
        this.product = {};
        this.tax = 1.0575;

        this.productInventory = ShopularService.getAllItems();

        this.productToAdd = function productToAdd (product) {
          ShopularService.productToAdd(product);
        };
      }
}());
