import Ember from 'ember';
// import EmberValidations, { validator } from 'ember-validations';
import EmberValidations, { validator } from 'ember-validations';
export default Ember.Component.extend(EmberValidations, {
  store: Ember.inject.service(),
  is_submit_button_disabled: Ember.computed(
    'lesson_request.student_last_name',
    'lesson_request.student_first_name',
    'lesson_request.parent_first_name',
    'lesson_request.phone',
    'lesson_request.email',
    'lesson_request.parent_last_name',
    function(){
      var errorCounts = this.get('validators').mapBy('errors.length');
      if( errorCounts.reduce(function (a, b) { return a + b }, 0) === 0) {
        return false;
      } else {
        return true;
      }}
  ),
  // is_submit_button_disabled: Ember.observer(''),
  validations: {
    'lesson_request.student_last_name': {
      length: { minimum: 2 , message:'Valid Name Required'},
    },
    'lesson_request.parent_first_name': {
      length: { minimum: 2 , message:'Valid Name Required'},
    },
    'lesson_request.parent_last_name': {
      length: { minimum: 2 , message:'Valid Name Required'},
    },
    'lesson_request.student_first_name': {
      length: { minimum: 2 , message:'Valid Name Required'},
    },
    'lesson_request.phone': {
      numericality: true,
      length: { is:10 , message:''},
    },
    'lesson_request.email': {
      length: { minimum: 2 , message:'Too Short'},
      format: { with: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, message:'Please enter a valid email' }
    },
  },

  
  init: function(){
    this._super();
    this.set('lesson_request', this.get('store').createRecord('lesson_request'));
  },

  actions: {

    on_click_submit:function(){
      this.sendAction();
    },
  },
});
