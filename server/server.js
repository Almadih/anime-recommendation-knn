const express = require('express')
const cors = require('cors')
var sqlite3 = require('sqlite3').verbose();
const KNN = require('../knn')
const path = require('path')

var db = new sqlite3.Database('anime.db');

const app = express()
app.use(cors())
app.use(express.static('public'))



app.get('/anime',(req,res)=>{
    db.all('select * from animes',(err,rows)=>{
        res.json(rows)
    })
})

app.get('/anime/:id/recommendation',async(req,res)=>{
    db.get('select * from animes where id = ?',[req.params.id],async(err,row)=>{
        const { action,comedy,shounen,school,supernatrual,drama,romance,score} = row
        const data = await getAllAnimes()
        let result = KNN(data,[action,comedy,shounen,school,supernatrual,drama,romance,score],6)
        finalData = await getNeighborsData(result.slice(1))
        res.json(finalData)
    })
})

app.get('/anime/:id',(req,res)=>{
    db.get('select * from animes where id = ?',[req.params.id],(err,row)=>{
        res.json(row)
    })
})

app.listen(3000,()=>{
    console.log('running in port 3000')
})



const getAllAnimes = async()=>{
    return new Promise((resolve, reject) => {
    db.all('select * from animes',async(err,res)=>{
       resolve(await mapAnimes(res))
    })
})
}

const mapAnimes = async(res)=>{
    data = []
    res.map((row)=>{
        const { id,name,action,comedy,shounen,school,supernatrual,drama,romance,score} = row
        data.push([id,name,action,comedy,shounen,school,supernatrual,drama,romance,score])
    })

    return await data
}


const getNeighborsData = (range)=>{
    return new Promise((resolve,reject)=>{

        db.all('select * from animes where id in (?,?,?,?,?)',range,(err,rows)=>{
           resolve(rows)
        })
    })
}


