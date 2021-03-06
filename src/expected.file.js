const differentFiles = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const equalFiles = `{
    common: {
        setting1: Value 1
        setting2: 200
        setting3: true
        setting6: {
            doge: {
                wow: 
            }
            key: value
        }
    }
    group1: {
        baz: bas
        foo: bar
        nest: {
            key: value
        }
    }
    group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
}`;

const plainFiles = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;
const jsonStr = '{"common":{"type":"different","deleted":{"setting1":"Value 1","setting2":200,"setting3":true,"setting6":{"key":"value","doge":{"wow":""}}},"added":{"follow":false,"setting1":"Value 1","setting3":null,"setting4":"blah blah","setting5":{"key5":"value5"},"setting6":{"key":"value","ops":"vops","doge":{"wow":"so much"}}},"children":{"follow":{"type":"added","added":false},"setting1":{"type":"same","value":"Value 1"},"setting2":{"type":"deleted","deleted":200},"setting3":{"type":"different","deleted":true,"added":null},"setting4":{"type":"added","added":"blah blah"},"setting5":{"type":"added","added":{"key5":"value5"}},"setting6":{"type":"different","deleted":{"key":"value","doge":{"wow":""}},"added":{"key":"value","ops":"vops","doge":{"wow":"so much"}},"children":{"doge":{"type":"different","deleted":{"wow":""},"added":{"wow":"so much"},"children":{"wow":{"type":"different","deleted":"","added":"so much"}}},"key":{"type":"same","value":"value"},"ops":{"type":"added","added":"vops"}}}}},"group1":{"type":"different","deleted":{"baz":"bas","foo":"bar","nest":{"key":"value"}},"added":{"foo":"bar","baz":"bars","nest":"str"},"children":{"baz":{"type":"different","deleted":"bas","added":"bars"},"foo":{"type":"same","value":"bar"},"nest":{"type":"different","deleted":{"key":"value"},"added":"str"}}},"group2":{"type":"deleted","deleted":{"abc":12345,"deep":{"id":45}}},"group3":{"type":"added","added":{"deep":{"id":{"number":45}},"fee":100500}}}';
const emptyFiles = '{\n}';

export {
  differentFiles, equalFiles, emptyFiles, plainFiles, jsonStr,
};
