const dotenv = require('dotenv');
const express = require('express')
const app = express();
const cors = require('cors');
const cookieParser=require('cookie-parser');
const validator = require("email-validator");

const listingRoute = require('./routes/listing');
const emailRoute = require('./routes/email');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');

const router = express.Router()

const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true });

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/listing', listingRoute);
app.use('/api/email', emailRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

app.listen(4000, () => {
  console.log(`App listening on port 4000`)
})
