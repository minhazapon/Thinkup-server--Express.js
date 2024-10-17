const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port =  process.env.PORT || 5000

console.log(process.env.DB_USERS)
console.log(process.env.DB_PASS)

app.use(cors())
app.use(express.json());
  
app.get('/', (req, res) => {
  res.send('ThinkUp sever!')
})

////////////////////////////mongodb//////////////////////////////////////////

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERS}:${process.env.DB_PASS}@cluster0.ruz4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    ////crud/////////

    
    /////javaScriptData/////////
    const javascriptCollection = client.db('javascriptDB').collection('javascriptData')

    app.get('/javascriptData', async(req, res) => {
          
      const cursor = javascriptCollection.find();
      const result = await cursor.toArray();
      res.send(result)
      

    })

     /////javaScriptData/////////


     /////typeScriptData/////////
     const typescriptCollection = client.db('typescriptDB').collection('typescriptData')

     app.get('/typescriptData', async(req, res) => {
          
       const cursor = typescriptCollection.find();
       const result = await cursor.toArray();
       res.send(result)
      
    })
     /////typeScriptData/////////

     ////react.js///////////
     
     const ReactCollection = client.db('reactDB').collection('reactData')

     app.get('/reactData', async(req, res) => {
          
      const cursor = ReactCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     
    })



     ////react.js///////////

     ///////next.js///////////
      
     const nextCollection = client.db('nextDB').collection('nextData')

     app.get('/nextData', async(req, res) => {
          
      const cursor = nextCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     
    })


     ///////next.js///////////
      







    ////crud/////////



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

////////////////////////////mongodb//////////////////////////////////////////

app.listen(port, () => {
  console.log(`ThinkUp sever port ${port}`)
})