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
        });
    });
})();
