import express from 'express';
import data from './data.js';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyparser from 'body-parser';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndexes: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyparser.json());
app.use('/api/users', userRoute);
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
  const productId   = req.params.id;
  const product = data.products.find(x => x.id === productId);
  if (product) {
    res.send(product);
  } else res.status(404).send({msg: "product Not Found"});
});
app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});