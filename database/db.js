const mongoose = require("mongoose");

const connectToDb = () => {
  return mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToDb;
