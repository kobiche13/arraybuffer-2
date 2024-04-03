import ArrayBufferConverter from '../converter';
import getBuffer from '../getbuffer';

test('converter b buffer', () => {
  const result = new ArrayBufferConverter();
  const buffer = getBuffer();
  expect(result.load(buffer)).toEqual([
    '{', '"', 'd', 'a', 't', 'a', '"', ':',
    '{', '"', 'u', 's', 'e', 'r', '"', ':',
    '{', '"', 'i', 'd', '"', ':', '1', ',',
    '"', 'n', 'a', 'm', 'e', '"', ':', '"',
    'H', 'i', 't', 'm', 'a', 'n', '"', ',',
    '"', 'l', 'e', 'v', 'e', 'l', '"', ':',
    '1', '0', '}', '}', '}',
  ]);
});
