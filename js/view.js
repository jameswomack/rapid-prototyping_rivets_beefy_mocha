var $ = require('jquery');
var Rivets = require('./rivets-backbone');
var _ = require('underscore');
var Backbone = require('backbone');
var fs = require('fs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function(){
        this.listenTo(this.model, 'destroy', this.destroy);
    },
    render: function(){
        _.once(function(){
            this.loadTemplate();
            this.rivets = Rivets.bind(this.$el, this.model);
        }.bind(this))();
    },
    destroy: function(done){
        this.$el.fadeOut(function(){
            this.remove();
            this.unbind();
            this.rivets.unbind();
            typeof done === 'function' && done();
        }.bind(this));
    },
    loadTemplate: function(){
        var html = fs.readFileSync(__dirname + '/../html/views/main.html', 'utf8');
        return this.$el.html(html);
    }
});
