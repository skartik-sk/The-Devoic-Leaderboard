// import express from 'express';
// import mongoose from 'mongoose';
// import {Student} from './model.js'
// import cors from 'cors';
// // Connect to the MongoDB database

// mongoose.connect('mongodb+srv://skartik1706:cujpav-1bomZo-mavhod@cluster0.sadkv2q.mongodb.net/',{dbName:'Devoic_students'})
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     }); 

// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use(cors())

// // Define your API routes here
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// // Add student info
// app.post('/', async (req, res) => {
//     try {
//         console.log(req);
//         const { name, department, subPointDistribution } = req.body;
//         const total = subPointDistribution.Engagement + subPointDistribution.Learning + subPointDistribution.Project + subPointDistribution.Additional;
//         const student = new Student({ name, department,total, subPointDistribution });
//         await student.save();
//         res.status(201).send(student);
//     } catch (error) {
//         console.error('Error adding student:', error);
//         res.status(500).send('Error adding student');
//     }
// });

// // Update student info
// app.put('/:id', async (req, res) => {
//     try {
//         const { name, department, subPointDistribution } = req.body;
//         const total = subPointDistribution.Engagement + subPointDistribution.Learning + subPointDistribution.Project + subPointDistribution.Additional;
//         const student = await Student.findByIdAndUpdate(req.params.id, { name, department,total, subPointDistribution }, { new: true });
//         if (!student) {
//             return res.status(404).send('Student not found');
//         }
//         res.send(student);
//     } catch (error) {
//         console.error('Error updating student:', error);
//         res.status(500).send('Error updating student');
//     }
// });
// app.delete('/:id', async (req, res) => {
//     try {
//         const student = await Student.findByIdAndUpdate(req.params.id, { $set: { isDeleted: true } }, { new: true });
//         if (!student) {
//             return res.status(404).send('Student not found');
//         }
//         res.send(student);
//     } catch (error) {
//         console.error('Error deleting student:', error);
//         res.status(500).send('Error deleting student');
//     }
// });
// app.get('/:id', async(req, res) => {
//     const student = await Student.findById(req.params.id);
//     res.send(student);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });