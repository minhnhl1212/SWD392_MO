const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const productRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB Connected!')).catch(err => console.log(err))

app.use(cors())

app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({limit: '10mb', extended: true}))

app.use('/api/products', productRouter)
app.use('/api/', authRouter)
app.use('/api/users', userRouter)
app.use('/api/carts', cartRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))