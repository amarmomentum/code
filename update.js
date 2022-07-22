const dbconnect = require('./mongoconnection')

const updatedb = async () =>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {name:'subhash'},{
        $set: {name: 'amar2'}
        }
    )
    console.log('result',result)
}

updatedb()