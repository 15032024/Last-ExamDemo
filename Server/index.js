const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')


const app = express()
const port = 7000
const BASE_URL = "mongodb+srv://LastExam:lastexam123@cluster0.puoouhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const username ="LastExam"
const password = "lastexam123"


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    image: { type: String, require: true },
    title: { type: String, require: true  },
    price: { type: Number, require: true  },
    oldPrice: { type: Number, require: true  },
    
});

const shopModel = mongoose.model('Shop', ShopSchema);

app.get('/api/products', async (req, res) => {
  try {
    const allProduct = await shopModel.find({})

    if (allProduct.length>0) {
        res.status(200).send({message:"ALL Product", data: allProduct})
    }else{
        res.status(204).send({message:"DATA IS EMPTY"})
    }
} catch (error) {
    res.status(500).send({message: error.message})
  }
})


app.get('/api/products/:id', async (req, res) => {
    const { id} = req.params
  try {
    const getProduct = await shopModel.find({})
    if (getProduct) {
        res.status(200).send({message:"Product finded", data:getProduct})
    }else{
        res.status(204).send({message:"DATA NOT FOUND"})
    }
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

app.delete('/api/products/:id', async (req, res) => {
    const {id}= req.params
  try {
    const deletedProduct = await shopModel.findByIdAndDelete({})
    if (deletedProduct) {
        res.status(200).send({message:"product deleted"})
    }else{
        res.status(204).send({message:"DATA is not found for deleted"})
    }
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

app.post('/api/products', async (req, res) => {

  try {
    const newProduct = new shopModel({...req.body})
     await newProduct.save()
    res.status(201).send({message:"NEW product Added", data:newProduct})
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})





mongoose.connect(BASE_URL)
  .then(() => {console.log('Connected!')
  app.listen(port, () => {
    console.log(`Example app http://localhost:${port}`)
  })

  });