const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express()
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'home.html'));
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

mongoose.connect("mongodb+srv://ragavanr738:Ragav%402005@agrowdb.4wgvu.mongodb.net/?retryWrites=true&w=majority&appName=AgrowDB")
    .then(() => {
        console.log("Connected to mongo");
        app.listen(3000, () => {
            console.log("Hello this is my express app listening in 3000");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
    });


app.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/product', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/product', (req, res) => {

    try {
        res.send("A response is given by node api Server");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);
        if (!products)
            res.status(404).json({ message: "Product Not Found" });
        const updatesProduct = await Product.findById(id);
        res.status(200).json(updatesProduct);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})