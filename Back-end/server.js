const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./config/db');
const listingRoutes = require('./routes/listingRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/listings', listingRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
