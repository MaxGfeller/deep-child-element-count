# deep-child-element-count

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Like [`ParentNode.childElementCount`](https://developer.mozilla.org/de/docs/Web/API/ParentNode/childElementCount)
but counting all the nested children too.

Example:

```javascript
const deepChildElementCount = require('deep-child-element-count')

var container = document.createElement('div')

var firstChild = document.createElement('div')
container.appendChild(firstChild)

var secondChild = document.createElement('div')
var containedChild = document.createElement('div')
secondChild.appendChild(containedChild)
container.appendChild(secondChild)

console.log(container.childElementCount)
// => 2

console.log(deepChildElementCount(container))
// => 3
```
