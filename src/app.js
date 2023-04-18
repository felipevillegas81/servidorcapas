import express from 'express'
import usersRouters from './routes/user.routes.js'
import ordersRoutes from './routes/orders.routes.js'
import businessRoutes from './routes/business.routes.js'

const app = express()

// Routes
app.use('/api/users', usersRouters)
app.use('/api/orders', ordersRoutes)
app.use('/api/business', businessRoutes)

// Listener
app.listen(3000, () => console.log('Listening on port 3000'))