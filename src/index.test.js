const getPath = require('./main')

test('find selector', () => {

  expect(getPath('.testClass')).toBe('<div class="testClass">Кликните на текст и посмотрите в консоле</div>')
})




