import data from './data';
import express from 'express';

const app = express();
app.get("/api/products",(req, res) => {
    res.send(data.products);
})
app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
})