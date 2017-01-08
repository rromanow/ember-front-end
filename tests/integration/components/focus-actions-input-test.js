import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('focus-actions-input', 'Integration | Component | focus actions input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{focus-actions-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#focus-actions-input}}
      template block text
    {{/focus-actions-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
