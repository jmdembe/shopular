(function() {
    'use strict';

    angular.module('shopular')
        .controller('ShopularController', ShopularController);

    ShopularController.$inject = ['StorageService'];

    function ShopularController(StorageService) {
        this.product = {};
        this.tax = 1.0575;

        this.productInventory = StorageService.getAllItems();

        this.productToAdd = function productToAdd (product) {
          StorageService.productToAdd(product);
        };
      }
}());
