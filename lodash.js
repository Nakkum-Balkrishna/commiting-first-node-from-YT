const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]
const temp = _.flattenDeep(items)
console.log(temp)