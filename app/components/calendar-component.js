import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  lessons: null,
  occurrences: null,
  request_form_is_open: false,

  init:function(){
    this._super();
    this.set('occurrences', this.get('lessons').toArray());
  },

  open_request_form: function(){
    this.set('request_form_is_open', true);
  },

  is_valid_time: function(occurrence) {
    var i;
    var occs = this.get('occurrences');
    var st = Date.parse(occurrence.get('startsAt'));
    var et = Date.parse(occurrence.get('endsAt'));
    for (i = 0; i < occs.length; i++) {
      if(st < Date.parse(occs[i].get('startsAt')) && et > Date.parse(occs[i].get('startsAt'))){
        return false;
      }
    }
    return true;
  },

  actions: {
    calendarAddOccurrence: function(occurrence) {
      if (this.is_valid_time(occurrence) === true) {
        this.get('occurrences').pushObject(Ember.Object.create({
          title: occurrence.get('title'),
          startsAt: occurrence.get('startsAt'),
          endsAt: occurrence.get('endsAt')
        }));
      this.open_request_form();
      }
    },
 
    calendarUpdateOccurrence: function(occurrence, properties) {
      occurrence.setProperties(properties);
    },
 
    calendarRemoveOccurrence: function(occurrence) {
      if (occurrence.get('title') !== 'Lesson') {
        this.get('occurrences').removeObject(occurrence);
      }
    },

    close_request_form: function() {
      this.set('request_form_is_open',false);
      delete this.get('occurrences').popObject();
    },
  }
});
