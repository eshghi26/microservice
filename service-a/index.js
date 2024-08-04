const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/service-a', (req, res) => {
    res.json({ message: 'Hello from Service A!' });
});

app.listen(PORT, () => {
    console.log(`Service A running on port ${PORT}`);
});
