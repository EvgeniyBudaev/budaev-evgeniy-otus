const getPath = (selector) => {
  console.log(document.querySelector(selector))
  const result = document.querySelector(selector)
  return result
}

module.exports = getPath
