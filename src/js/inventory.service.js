(function() {
    'use strict';
    angular.module('shopular')
        .factory('InventoryService', InventoryService);

    function InventoryService() {

      var tax = 1.

      var storeItems = [];
      var newItem = {};


      return {
          getAllItems: getAllItems,
          productToAdd: productToAdd,
          // updateItems: updateItems,
      }

      function getAllItems() {
          return inventory;
      }

      /**
       * Adds products on submission of the form
       * @param {Object} product The new product to be added to the list
       */

      function productToAdd(product) {
        if (typeof(product)!=='object') {
          return;
        }
        newItem = {
            id: Date.now(),
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            color: product.color,
            discount: product.discount
          }
        inventory.push(newItem);
        return inventory;
        }

    }
}());
