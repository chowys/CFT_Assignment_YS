import { addNumbers, subtractNumbers } from '../frontend/src/App';

test('adds two numbers correctly', () => {
  expect(addNumbers(10, 3)).toBe(13);
});

test('subtracts two numbers correctly', () => {
  expect(subtractNumbers(98, 55)).toBe(43);
});
