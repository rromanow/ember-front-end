import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lesson-request-form', 'Integration | Component | lesson request form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lesson-request-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lesson-request-form}}
      template block text
    {{/lesson-request-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
