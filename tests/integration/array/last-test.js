import { last } from 'ember-awesome-macros/array';
import get from 'ember-metal/get';
import { A as emberA } from 'ember-array/utils';
import { module, test } from 'qunit';
import compute from 'ember-macro-test-helpers/compute';

let array;

module('Integration | Macro | array | last', {
  beforeEach() {
    array = emberA(['test1', 'test2']);
  }
});

test('default', function(assert) {
  compute({
    assert,
    computed: last('array'),
    properties: {
      array
    },
    strictEqual: 'test2'
  });
});

test('handles array changes', function(assert) {
  let { subject } = compute({
    computed: last('array'),
    properties: {
      array
    }
  });

  array.removeAt(1);

  assert.strictEqual(get(subject, 'computed'), 'test1');
});
