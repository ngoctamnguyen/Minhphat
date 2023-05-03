const express = require('express');
const cors = require('cors');
const reportRouter = require('./routers/reportRouter');
const suppliersRouter = require('./routers/suppliersRouter')
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const itemsRouter = require('./routers/itemsRouter');
const tygiaRouter = require('./routers/tygiaRouter');

const app = express();

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/reports', reportRouter);
app.use('/suppliers', suppliersRouter);
app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('/items', itemsRouter);
app.use('/tygia', tygiaRouter);

app.use(function(err, req, res, next) {
     res.status(500).json({success: false, data: err.message})
})

app.listen(8080, () => console.log('Listening on 8080...'))