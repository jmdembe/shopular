(function() {
    'use strict';
    angular.module('shopular')
        .controller('ShopularController', ShopularController);

    ShopularController.$inject = ['ShopularService'];
    // this.product = {};

    function ShopularController(itemInventory) {
        this.tax = 1.0575;
        this.productToAdd = itemInventory.productToAdd(myItem);
      }
}());
