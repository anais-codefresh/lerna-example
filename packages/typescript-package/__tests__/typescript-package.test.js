'use strict';

const printName = require('../lib/typescript-package');

test('make sure the first name plust the last name equal the full name', () => {
  expect(printName("Hanna", "Baum")).toBe("Hanna Baum");
});