import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    total:{
        type: Number,
    },
    subPointDistribution: {
    Engagement: {
              type: Number,
       },
       Learning:{
                type: Number,
       },
       Project:{
                type: Number,
       },
       Additional:{
                type: Number,
       },
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

export const Student = mongoose.model('Student', studentSchema);
