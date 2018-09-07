import { findAll, find } from '@ember/test-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('image-drop', 'Integration | Component | image drop', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{image-drop}}`);

  assert.equal(findAll('.ember-image-drop').length, 1);
  assert.equal(findAll('.ember-image-drop input').length, 1);
  assert.equal(findAll('.ember-image-drop .text').length, 1);
  assert.equal(findAll('.ember-image-drop .placeholder').length, 1);
  assert.equal(findAll('.ember-image-drop .help-text').length, 1);
});

test('text data is set correctly', function(assert) {
  assert.expect(2);

  this.render(hbs`{{image-drop placeholder="banana" helpText="help!"}}`);

  assert.equal(find('.ember-image-drop .placeholder').textContent, "banana");
  assert.equal(find('.ember-image-drop .help-text').textContent, "help!");
});

test('background image updates with image', function(assert) {
  assert.expect(2);
  this.set('image', 'data:fakeimagedata');
  this.render(hbs`{{image-drop image=image}}`);

  let backgroundImage = this.$('.ember-image-drop').css('background-image');
  assert.equal(backgroundImage, "url(data:fakeimagedata)");

  this.set('image', 'data:pancakes');
  backgroundImage = this.$('.ember-image-drop').css('background-image');
  assert.equal(backgroundImage, "url(data:pancakes)");
});
