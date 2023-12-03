const express = require('express');
const app = express();
const PORT = 5000;
require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.DB_URI
const userRoutes = require('./routes/login')
mongoose.connect(uri,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !', e));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/auth', userRoutes)