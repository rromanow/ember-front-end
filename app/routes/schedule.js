import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model: function(){
    // return this.store.findAll('lesson').then(function(lessons) {
    //   return lessons.map(function(x) { return x.toJSON(); });
    // });
    // return this.store.findAll('lesson').toArray();
    return this.store.findAll('lesson');
    // return this.store.findAll('lesson').then(function(lessons) {
    //   return lessons.toArray();
    // });
    // return Ember.A([{
    //   startsAt: "Wed Aug 31 2016 11:00:00 GMT-0400 (PDT)",
    //   endsAt: "Wed Aug 31 2016 11:30:00 GMT-0400 (PDT)",
    //   title: "Lesson"
    // }]);
      
  },
  // setupController: function(controller, model) {
  //   debugger;
  //   controller.set('model', model);
  //   controller.set('pathname', window.location.pathname);
  // }

  // afterModel: function() {
  //   debugger;
  // },
});
