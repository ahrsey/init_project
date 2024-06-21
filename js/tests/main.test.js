const assert = require('node:assert').strict
const helloWorld = require('../src/main.js')

assert.deepEqual('hello world 1', helloWorld())
