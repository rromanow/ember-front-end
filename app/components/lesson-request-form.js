import Ember from 'ember';

export default Ember.Component.extend({

  lesson:null,
  startTime:null,
  endTime:null,

  states: {
    confirm_state:true,
    form_parent_state:false,
    form_adult_state:false,
    submiting_state:false,
    error_state:false,
    submitted_state:false,
    question_state:false
  },
  init:function(){
    this._super();
    this.set('startTime', moment(this.get('lesson.startsAt')).format('ddd hh:mm a'));
    this.set('endTime', moment(this.get('lesson.endsAt')).format('hh:mm a'));
  },

  stateTransition:function(current_state,next_state){
    this.set("states." + current_state, false);
    this.set("states." + next_state, true);
  },

  getCurrentState:function(){
    var states = this.get('states');
    for (var key in states) {
      if (states[key] === true) {
        return key;
      }
    }
    return 'confirm_state';
  },

  submit_lesson_request:function(){


  },

  actions:{

    on_click_submit:function(){
      var current_state = this.getCurrentState();
      this.stateTransition(current_state,'submitting_state');
      this.submit_lesson_request();
    },

    on_click_parent:function(){
      this.stateTransition('question_state','form_parent_state');
    },

    on_click_adult:function(){
      this.stateTransition('question_state','form_adult_state');
    },

    on_click_confirm:function(){
      this.stateTransition('confirm_state','question_state');
    },

    close_request_form:function(){
      var current_state = this.getCurrentState();
      this.stateTransition(current_state,'confirm_state');
      this.sendAction('close_request_form');
    },
  }
});
