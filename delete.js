const dbconnect = require('./mongoconnection')

const deletedb = async () =>{
    let data = await dbconnect();
    let result = await data.deleteOne({name:'subhash2'})
    console.log(result)
    if(result.acknowledged){
        console.log('record deleted')
    }
}

deletedb()