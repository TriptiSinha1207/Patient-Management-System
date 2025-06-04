
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Patient = require('./models/Patient');

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/patientDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/patients', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.post('/patients', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.status(201).json(newPatient);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
