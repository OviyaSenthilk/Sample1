const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/api', (req, res) => {
    res.json('Welcome to API!');
});

app.post('/api/data',(req,res)=>{
    const {name,age} =req.body;
    res.json({message:`Hello ${name},your are ${age}years old!`});
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
