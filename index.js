// index.js
const express = require('express');
const app = express();
const PORT = 5002;

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Phone', price: 499 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});
