import Ember from 'ember';
import moment from 'moment';
// import _ from 'lodash/lodash';
import MaterializeInput from "ember-cli-materialize/components/md-input";
import layout from '../templates/components/input-dob';

const HUMAN_DATE_FORMAT = "MMMM D, YYYY";
const SERVER_DATE_FORMAT = "YYYY-MM-DD";

export default MaterializeInput.extend({
  layout,

  is_modal_shown: false,
  error_msg: null,
  month: null,
  day: null,
  year: null,
  MONTHS: ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'],
  // DAYS: Ember.computed('year', 'month', function() {
  //   var year = this.get('year');
  //   var month = this.get('month');
  //   var num_days = moment(`${year}-${month}`, "YYYY-MMMM").daysInMonth();
  //   if (this.get('day') > num_days) {
  //     this.set('day', 1);
  //   }
  //   return _.range(1, num_days + 1);
  // }),
  DAYS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  init: function() {
    this._super();
    function gen_year_array() {
      var highest_year = new Date().getFullYear();
      var lowest_year = highest_year - 115;
      return _.range(highest_year, lowest_year - 1, -1);
    }
    this.set('YEARS', gen_year_array());
  },

  didInsertElement: function() {
    this._super(...arguments);
    this._setupPicker();
  },

  willDestroyElement: function() {
    this._super(...arguments);
    this._teardownPicker();
  },

  _setupPicker: function() {
    var date = null;
    if (this.get('value') !== null) {
      this.set('isActive', true);
      date = moment(this.get('value'), SERVER_DATE_FORMAT);
      this.$(`#${this.get('id')}`).val(date.format(HUMAN_DATE_FORMAT));
    }
    else {
      date = moment();
    }
    this.set('month', date.format('MMMM'));
    this.set('day', parseInt(date.format('D')));
    this.set('year', parseInt(date.format('YYYY')));

    // Init modal visibility event handler.
    this.$(`#${this.get('id')}`).click(function(e) {
      this.set('error_msg', null);
      this.set('is_modal_shown', true);
    }.bind(this));
  },

  _teardownPicker: function() {},

  actions: {
    toggle_modal: function() {
      this.toggleProperty('is_modal_shown');
    },
    on_click_ok: function() {
      var is_age = (birthday, age_in_years) => {
        var eighteen = moment().subtract(age_in_years, 'years');
        return eighteen.isAfter(birthday);
      };
      var birthday = moment(this.get('month') + " " + this.get('day') + ", " + this.get('year'), HUMAN_DATE_FORMAT);
      if (!is_age(birthday, 21)) {
        this.set('error_msg', "Must be at least 21 years old.");
        return;
      }
      this.set('is_modal_shown', false);
      this.set('value', birthday.format(SERVER_DATE_FORMAT));
      this.set('isActive', true);
      this.$(`#${this.get('id')}`).val(birthday.format(HUMAN_DATE_FORMAT));
    }
  }
});

