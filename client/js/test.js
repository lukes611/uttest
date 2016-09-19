//mocha testing
mocha.setup('bdd');


describe('IndexHTMLCode', function(){

    describe('#valid()', function(){
        it('should return a boolean', function(){
            chai.expect(IndexHTMLCode.valid()).to.be.a('boolean');
        });

        var test = function(otherChecked, descriptionSet){
            document.getElementById(IndexHTMLCode.radioId).checked = otherChecked;
            document.getElementById(IndexHTMLCode.inputTagId).value = descriptionSet ? 'hello' : '';
            return IndexHTMLCode.valid();
        };

        it('should give the corect output', function(){
            //other is not checked, and description has nothing should be true
            chai.expect(test(false, '')).to.be.equal(true);

            //should be not valid if other is true but nothing wat put into the description
            chai.expect(test(true, '')).to.be.equal(false);

        });

    });




});

if(IndexHTMLCode.dev) mocha.run();