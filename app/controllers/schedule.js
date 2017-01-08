import Ember from 'ember';
import ENV from "../config/environment"
 
export default Ember.Controller.extend({
  // store: Ember.inject.service(),
  // occurrences: Ember.A([{
  //     title: "Lesson",
  //     startsAt: "Wed Aug 31 2016 14:00:00 GMT-0400 (PDT)",
  //     endsAt: "Wed Aug 31 2016 14:30:00 GMT-0400 (PDT)",
  //   }]),

  // init: function() {
  //   this._super();
  //   debugger;
  //   this.store.findAll('lesson').then(function(lessons){debugger;});
  //   // var occ = this.get('model').then(function(model){debugger;})
  // },

  // selections: Ember.A([{
  //     title: "Lesson",
  //     startsAt: "Wed Aug 31 2016 15:00:00 GMT-0400 (PDT)",
  //     endsAt: "Wed Aug 31 2016 15:30:00 GMT-0400 (PDT)",
  //   }]),
  // selections: null,
  // occurrences: null,

  // _initializeDefaults: Ember.on('init', function() {
  //   if (this.get('selections') == null) {
  //     this.set('selections', Ember.A());
  //   }

  //   if (this.get('occurrences') == null) {
  //     this.set('occurrences', 
  //       Ember.A([{
  //         title: "Lesson",
  //         startsAt: "Wed Aug 31 2016 09:00:00 GMT-0400 (PDT)",
  //         endsAt: "Wed Aug 31 2016 09:30:00 GMT-0400 (PDT)",
  //       }]),
  //     );
  //   }
  // }),

  // actions: {
  //   calendarAddOccurrence: function(occurrence) {
  //     this.get('occurrences').pushObject(Ember.Object.create({
  //       title: occurrence.get('title'),
  //       startsAt: occurrence.get('startsAt'),
  //       endsAt: occurrence.get('endsAt')
  //     }));
  //   },
 
  //   calendarUpdateOccurrence: function(occurrence, properties) {
  //     occurrence.setProperties(properties);
  //   },
 
  //   calendarRemoveOccurrence: function(occurrence) {
  //     this.get('occurrences').removeObject(occurrence);
  //   }
  // }
});