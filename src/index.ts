import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './database/data-source'
import { errorMiddleware } from './middlewares/error'
import routes from './routes/routes'

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())

	app.use(routes)

	app.use(errorMiddleware)
	return app.listen(process.env.PORT)
})
