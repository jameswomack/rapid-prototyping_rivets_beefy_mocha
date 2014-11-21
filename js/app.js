var $ = require('jquery');

var App = {
    Model: require('./model'),
    View:  require('./view')
};

App.start = function(){
    new this.View({
        el: $('#main'),
        model: new this.Model()
    }).render();
}.bind(App);

module.exports = App;
