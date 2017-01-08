import Ember from 'ember';
const { Component, computed, isPresent} = Ember;

export default Ember.Component.extend({
  g : null,
  showError: false,

  error_message: Ember.computed('errors.[]',function(){
    return this.get('errors')[0];
  }),

  actions: {
    showErrors: function() {
      this.set("showError", true);
    },
  }
});

