const addElementDom = () => {
  const $root = document.querySelector('#root')
  // const $root = document.createElement('div')
  const $el = create('div', 'testClass')
  $el.innerText = "Кликните на текст и посмотрите в консоле"
  $root.append($el)
  return $root
}

const getPath = (selector) => {
  // console.log('selector', selector)
  const $domNoda = document.querySelector(selector)
  $domNoda.addEventListener('click', () => {
    console.log($domNoda)
  })

}

const create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return el
}

addElementDom()

getPath('.testClass')

// if (module) {
//   module.exports = getPath
// }

