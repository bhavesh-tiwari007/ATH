const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute.js');

app.use(express.json());
app.use(userRouter)

app.listen(3000, () => {
    console.log('server started');
}
);