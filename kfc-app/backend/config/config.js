const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await (
      await mongoose.connect('mongodb://localhost:27017/kfc')
    ).then(con => console.log('database connection established'));
  } catch (error) {
    console.log(error);
  }
};

