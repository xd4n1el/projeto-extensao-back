const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(() => console.log('connected to mongo'));