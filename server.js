const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
      
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.error(`Error: ${error.message}`);
//       process.exit(1);
//     }
//   };
  
//   module.exports = connectDB;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(8000, () => console.log('Server running on port 8000'));
  }).catch(err => console.error(err));