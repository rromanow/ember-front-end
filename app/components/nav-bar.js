import Ember from 'ember';

export default Ember.Component.extend({

  init: function() {
    this._super();
    this.router = this.container.lookup("router:main");
  },

});
