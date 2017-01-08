import DS from 'ember-data';

export default DS.Model.extend({
  student_first_name: DS.attr(),
  student_last_name: DS.attr(),
  student_middle_name: DS.attr(),
  parent_first_name: DS.attr(),
  parent_last_name: DS.attr(),
  parent_middle_name: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  starts_at: DS.attr(),
  ends_at:DS.attr(),
  date_of_birth:DS.attr(),
});
