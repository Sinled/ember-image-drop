import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { findAll, find } from '@ember/test-helpers';


module('Integration | Component | c alert', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(5);


    await render(hbs`{{image-drop}}`);

    assert.equal(findAll('.ember-image-drop').length, 1);
    assert.equal(findAll('.ember-image-drop input').length, 1);
    assert.equal(findAll('.ember-image-drop .text').length, 1);
    assert.equal(findAll('.ember-image-drop .placeholder').length, 1);
    assert.equal(findAll('.ember-image-drop .help-text').length, 1);
  });

  test('it renders', async function(assert) {
    assert.expect(2);


    await render(hbs`{{image-drop placeholder="banana" helpText="help!"}}`);
    assert.equal(find('.ember-image-drop .placeholder').textContent, 'banana');
    assert.equal(find('.ember-image-drop .help-text').textContent, 'help!');
  });

  test('background image updates with image', async function(assert) {
    assert.expect(2);
    this.set('image', 'data:fakeimagedata');

    await render(hbs`{{image-drop image=image}}`);

    let backgroundImage = this.$('.ember-image-drop').css('background-image');
    assert.equal(backgroundImage, 'url("data:fakeimagedata")');

    this.set('image', 'data:pancakes');
    backgroundImage = this.$('.ember-image-drop').css('background-image');
    assert.equal(backgroundImage, 'url("data:pancakes")');
  });
});

