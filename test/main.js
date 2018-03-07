const test = require('tape')
const deepChildElementCount = require('../')

test('flat', (t) => {
  var container = document.createElement('div')

  for (var i = 0; i < 5; i++) {
    container.appendChild(document.createElement('div'))
  }

  t.equal(deepChildElementCount(container), 5)
  t.end()
})

test('on two levels', (t) => {
  var container = document.createElement('div')

  for (var i = 0; i < 5; i++) {
    var subContainer = document.createElement('div')

    for (var j = 0; j < 5; j++) {
      subContainer.appendChild(document.createElement('div'))
    }

    container.appendChild(subContainer)
  }

  t.equal(deepChildElementCount(container), 30)
  t.end()
})
