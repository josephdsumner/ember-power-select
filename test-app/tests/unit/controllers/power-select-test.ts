import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Controller | power-select', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:power-select');
    assert.ok(controller);
  });
});
