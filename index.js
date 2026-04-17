const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'CI/CD Pipeline is Healthy' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});