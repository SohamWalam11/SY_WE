const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookroutes');

dotenv.config();

const app = express();
app.use(express.json());

//  Serve frontend from public folder
app.use(express.static('public'));

//  Prefix all book-related API routes with /api
app.use('/api', bookRoutes);

//  MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => console.error(err));
