const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/weather', (req, res) => {
    res.json({ message: "Weather data will go here!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});