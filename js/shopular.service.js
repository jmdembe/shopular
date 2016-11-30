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

      function getAll() {
          return storeItems;
      }

      function saveItem(storeItem) {

      }

      function updateItems(storeItem) {

      }
    }
}());
