const NODE_ENV = process.env['NODE_ENV']

if (NODE_ENV !== 'production' || NODE_ENV !== 'qa') require('babel-register')
require('./app')
