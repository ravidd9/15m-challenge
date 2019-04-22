const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/15m", { useNewUrlParser: true })


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const thingSchema = new Schema({
    text: String
})

const Thing = mongoose.model("Thing", thingSchema)

app.get(`/things`, function(req, res){
    Thing.find({}).exec((err,things) => {
        res.send(things)
    })
})

app.post(`/thing`, function(req,res){
    let t1 = new Thing({
        text: req.body.text
    })
    t1.save()
    res.send(t1)
})










const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})