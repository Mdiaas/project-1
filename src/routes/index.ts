import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoute } from './specifications.route'

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoute)

export { router }