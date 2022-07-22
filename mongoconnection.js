// const {MongoClient} = require('mongodb')
// const url="mongodb://localhost:27017";
// const client  = new MongoClient(url);
// const database = `Demo-database`

// export default async function getData()
// {
//     let result = await client.connect()
//     let db = result.db(database)
//     let collection = db.collection('formdata')
//     // console.log(collection.find({}).toArray())
//     return response =  await collection.find({}).toArray()
//     // console.log(response)
    
// }
// getData()

const {MongoClient} = require('mongodb')
const url="mongodb://localhost:27017";
const client  = new MongoClient(url);
const database = `Demo-database`

async function dbconnect()
{
    let result = await client.connect()
    let db = result.db(database)
    return db.collection('formdata')
    // let response =  await collection.find({}).toArray()
    // console.log(response)
    
}

module.exports = dbconnect;;