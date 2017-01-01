(function() {
    'use strict';

    var expect=chai.expect;

    describe('Shopular controller', function() {
        var ShopularController;
        var fakeStorageService = {};

        beforeEach(module('shopular'));

        beforeEach(module(function($provide){
            $provide.value('StorageService', fakeStorageService);
        }));

        beforeEach(inject(function($controller){
            fakeStorageService.getAllItems = function () {
              return [
                  {'name': 'pickles', 'price': 1.22, 'quantity': 2, 'color': 'green', 'discount': 2}
              ];
            };
            ShopularController = $controller('ShouplarController');
        }));
      });

        it('Should have the needed scope variables', function() {
          expect(ShopularController.product).to.be.an('object');
          expect(Object.keys(ShopularController.product).length).to.equal(0);
        });
}());
