import { Router } from 'express'

import * as math from '../../lib/math'

const router = new Router()

const add = (req, res) =>
  res
    .status(200)
    .json({ sum: math.add(parseInt(req.params['a']))(parseInt(req.params['b'])) })
router.use('/add/:a/:b', add)

const subtract = (req, res) =>
  res
    .status(200)
    .json({ difference: math.subtract(parseInt(req.params['a']))(parseInt(req.params['b'])) })
router.use('/subtract/:a/:b', subtract)

export default router
