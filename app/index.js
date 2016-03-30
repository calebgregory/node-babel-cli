import path from 'path'

import express from 'express'

import routes from './routes'

const app = express()

app.use('/', express.static(path.resolve(__dirname,'..','dist','public')))
app.use(routes)

const server = app.listen(3333, (err) => {
  if (err) throw err
  console.log(`(>'')> - listening on port ${server.address().port}.`)
})

export default app
