const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI,{dbName:'Devoic_students'}, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        }); 

const studentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    total: { type: Number },
    subPointDistribution: {
        Engagement: { type: Number },
        Learning: { type: Number },
        Project: { type: Number },
        Additional: { type: Number },
    },
    isDeleted: { type: Boolean,  },
});
 
const Student = mongoose.model('Student', studentSchema);



module.exports = Student;