const express = require('express')
const app = express()


const goods =[
    {name:"Коньки", price:"1900", amount:"18", id:1},
    {name:"Клюшка", price:"700", amount:"32", id:2},
    {name:"Шайба", price:"150", amount:"48", id:3},
    {name:"Перчатки", price:"1000", amount:"7", id:4},
    {name:"Шлем", price:"1500", amount:"4", id:5},
    {name:"Щитки", price:"1200", amount:"3", id:6},
    {name:"Лопата для снега", price:"900", amount:"9", id:7},
    {name:"Бутылка", price:"300", amount:"5", id:8},
    {name:"Шнурки", price:"200", amount:"8", id:9},
    {name:"Сумка", price:"1800", amount:"3", id:10},
] 



app.get('/goods', (req, res)=>{
    const count = parseInt(req.query.count)
    const offset = parseInt(req.query.offset)
    if(count){
        const newGoods = goods.slice(offset, count+offset )
        res.json({newGoods, count:goods.length})
    }else{
        res.json(goods)
    }
})


app.get('/goods/:id', (req,res)=>{
    const getGoodsId = parseInt(req.params.id)
    const newGood = goods.find((good)=> parseInt(good.id) === getGoodsId)
    console.log(newGood)
    if(newGood){
        res.status(200).json(newGood)
    }else{
        res.status(404).send()
    }
})






app.listen(5000, ()=>{
    console.log('App listen on port 5000!')
})