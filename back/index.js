console.log("started");
const express = require('express');
const cors = require('cors');
const getGoogleSheetsData = require('./sheets');
const Student = require('./db');
 
const app = express();
const port = 3000;
   
app.use(express.json());
app.use(cors({
credentials:true}));
app.get('/data', async(req, res) => {
    const data = await Student.find();
    res.json(data)
})
  
app.get('/', async (req, res) => {
    const data = await getGoogleSheetsData('1U6vMi2WSHhmCp5y21AFNfRG26_rWncH3rOlnq036smc', 'Sheet1!A2:H');
    const students = data.map(row => ({
        rollNo:row[0],
        name: row[1],
        department: row[2],
        total: Number(row[7]),
        subPointDistribution: {
            Engagement: Number(row[3]),
            Learning: Number(row[4]),
            Project: Number(row[5]),
            Additional: Number(row[6]),
        },  
    })); 
// Clear the Student collection
await Student.deleteMany();
    await Student.insertMany(students);
    res.send('Data inserted into MongoDB');
}); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});