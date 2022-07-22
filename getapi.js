const express = require('express');
const port = process.env.PORT || 3000;
const dbconnect = require('./mongoconnection')

const app = express();
app.use(express.json());

app.get('/getdata', async (request, response) => {
    let data = await dbconnect()
    data = await data.find().toArray();
    console.log(data)
    response.send(data)
})

app.post('/Payment',async(request,response)=>{
    console.log(request.body)
    let data = await dbconnect()
    let result = await data.insert(request.body)
    // let data = await dbconnect()
    response.send(request.body)

})

// app.post('https://gwapi.triple000.com/GWTransaction/Payment',async(request,response)=>{
//     console.log(request.body)
//     let data = await dbconnect()
//     let result = await data.insert(request.body)
//     // let data = await dbconnect()
//     response.send(result)

// })




// app.listen(5000)
app.listen(port, ()=>{
    console.log("i am connect api again")
    console.log(`http://localhost:${port}`)
});