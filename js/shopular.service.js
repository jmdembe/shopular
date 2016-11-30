(function() {
    'use strict';
    angular.module('shopular')
        .factory('ShopularService', ShopularService);

    function ShopularService() {

      console.log("I'm here!");
      var storeItems = [];

      return {
          getAll: getAll,
          saveItem: saveItem,
          updateItems: updateItems
      }

      function getAllItems() {
          return storeItems;
      }

      /**
       * Adds products on submission of the form
       * @param {Object} product The new product to be added to the list
       */

      function saveItem(storeItem) {
          storeItem.push({
              id: Math.random(),
              name: product.name,
              price: product.price,
              quantity: product.quantity,
              color: product.color,
              discount: product.discount
            })
          }

      function updateItems(id) {
          var found = null;
          storeItem.forEach(function findItem) {
              
          }
      }
    }
}());
