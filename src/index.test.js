const getPath = require('./index')

test('find selector', () => {
  expect(getPath('.app')).toEqual('<div class="app" id="root"></div>')
})


