const dbconnect = require('./mongoconnection')

const insert  = (async()=>{
    const db = await dbconnect();
    const result = await db.insert(
        [
            {name:'subhash2',age:22,Address:'himanchal',state:'himanchal2'},
            {name:'subhash3',age:22,Address:'himanchal',state:'himanchal3'},
            {name:'subhash4',age:22,Address:'himanchal',state:'himanchal4'}
        ]
        )
    console.log(result)
})

insert();