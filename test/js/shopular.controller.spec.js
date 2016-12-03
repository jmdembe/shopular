(function() {
    'use strict';
    var expect = chai.expect;

    describe('Shopular', function (){
        it('should retrieve inventory items once called', function () {
            var result = ShopularService.getAllItems();
            expect(result).to.be.an('array');
        });
    });
})();
