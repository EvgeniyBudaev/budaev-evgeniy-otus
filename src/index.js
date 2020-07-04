import './scss/index.scss';

const maxItemAssociation = (...arrs) => {
  let arr0 = arrs.shift()

  for (let elem of arr0) {
    if (arrs.length !== 0) {
      inArrays(arrs, elem, arr0)
    } else return arr0
  }
}

const inArrays = (arrs, elem, arr0) => {
  for (let arr of arrs) {
    inArray(arr, elem, arr0)
  }
}

const inArray = (arr, elem, arr0) => {
  if (arr.includes(elem)) {
    let union = [...new Set([...arr0, ...arr])]
    console.log('result:', union)
  }
}

maxItemAssociation(['a', 'b'], ['a', 'c'], ['d', 'e'])
