module.exports = function deepChildElementCount (el) {
  var count = 0

  ;[].map.call(el.childNodes, (childNode) => {
    count++

    if (childNode.childElementCount > 0) {
      count += deepChildElementCount(childNode)
    }
  })

  return count
}
