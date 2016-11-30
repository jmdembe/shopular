(function() {
  'use strict';

  angular.module('shopular')
    .controller('StoreItemController', StoreItemController);

    function StoreItemController() {
      this.products = [];
      this.productToAdd = {};

      /**
       * Adds new product information
       * @param {Object} product New product to be added
       */
      this.addProducts = function addProducts(product) {
        this.products.push({
          id: Number(product.id),
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          color: product.color,
          discount: product.discount
        })
      };

    }

}());
