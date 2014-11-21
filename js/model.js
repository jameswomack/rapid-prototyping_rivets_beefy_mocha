var $, jQuery;
$ = jQuery = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
    title: 'Page title',
    subtitle: 'Page subtitle'
});
