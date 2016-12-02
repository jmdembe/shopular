(function() {
    'use strict';

    angular.module('shopular')
        .controller('ShopularController', ShopularController);

    ShopularController.$inject = ['ShopularService'];

    function ShopularController(ShopularService) {
        this.product = {};
        this.tax = 1.0575;
        this.productToAdd = ShopularService.productToAdd(this.product);
      }
}());
