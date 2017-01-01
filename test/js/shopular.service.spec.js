(function() {
    'use strict';
    var expect = chai.expect;

    describe('Shopular Service', function() {
        var StorageService;

        beforeEach(module('shopular'));

        beforeEach(inject(function(_StorageService_) {
            StorageService = _StorageService_;
        }));

        it('Should be able to retrieve an array of inventory items', function (){
            var result = StorageService.getAllItems();
            expect(result).to.be.an('array');
            expect(result.length).to.equal(12);
        });

        it('Should be able to add a new inventory item', function (){
            var result = StorageService.productToAdd({
              name: 'jello',
              price: .99,
              quantity: 8456785,
              color: 'orange',
              discount: 0
            });
            expect(result).to.be.an('array');
            var inventory = StorageService.getAllItems();
            expect(inventory[12].name).to.equal('jello');
        });

        it('Should fail if the user does not provide all required items', function (){
            ShopularService.productToAdd('meep');
            var result = ShopularService.getAllItems();
            console.log(result);
            expect(result.length).to.equal(12);

        });
    });
})();
