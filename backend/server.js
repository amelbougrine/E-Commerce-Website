import express from 'express';
import data from './data.js';

const app = express();
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