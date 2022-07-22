const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
const dataApi = require("./data.json")
const cors = require("cors")
var fs = require('fs');

const dbconnect = require('./mongoconnection')

// mongodb data connection

// 1st type yo handle promise

// dbconnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })


// 2 nd type of handle promise
const main = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray()
    console.log(data)
}

main()
// code end

app.use(express.json());



app.use(cors());

app.post("/pay", (request, response)=>{
    console.log("GGGGGGGG",request.body)
    response.send(request.body)
    if(request.body){   
        // var readMe = fs.readFileSync('data.txt', 'utf8')
        // console.log(readMe)
        // fs.writeFileSync('writeme.txt',readMe)

        const toJson = JSON.stringify(request.body)
        // var json2 = [...json2.push(toJson)]
        // console.log("json2",json2)
        // var data =[]
        // data.push(toJson)
        // console.log("data array",data)

        fs.writeFileSync('new.json',toJson)
    }
});

app.get("/service", (request, response)=>{
    response.send(dataApi);
})

app.listen(port, ()=>{
    console.log("i am live again")
    console.log(`http://localhost:${port}`)
});