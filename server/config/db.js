const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    })
}

module.exports = connectDB;