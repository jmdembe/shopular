(function() {
    'use strict';
    var expect = chai.expect;

    describe('Shopular controller', function() {
        var ShopularService;

        //first step, create a clean module and bootstrap it.
        beforeEach(module('shopular'));

        beforeEach(inject(function(_ShopularService_) {
            ShopularService = _ShopularService_;
        }));

        it('Should be able to retrieve an array of inventory items', function (){
            var result = ShopularService.getAllItems();
            expect(result).to.be.an('array');
            expect(result.length).to.equal(12);
        });

        it('Should be able to add a new inventory item', function (){
            var result = ShopularService.productToAdd({
              name: 'jello',
              price: .99,
              quantity: 8456785,
              color: 'orange',
              discount: 0
            });
            expect(result).to.be.an('array');
            var inventory = ShopularService.getAllItems();
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
