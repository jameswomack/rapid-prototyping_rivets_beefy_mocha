var Model = mrequire('model');
var Backbone = require('backbone');

describe('App.Model', function(){
    it('should inherit from Backbone.Model', function(){
        expect(Model.prototype).to.have.property('on');
        expect(Model.prototype).to.have.property('off');
    });
});
