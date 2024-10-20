const express = require('express')
const cors = require('cors')
require('dotenv').config() 
const app = express()
const port =  process.env.PORT || 5000

console.log(process.env.DB_USERZ)
console.log(process.env.DB_PASSZ)

app.use(cors())
app.use(express.json());
  
app.get('/', (req, res) => {
  res.send('ThinkUp sever!')
})

////////////////////////////mongodb//////////////////////////////////////////

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERZ}:${process.env.DB_PASSZ}@cluster0.ruz4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

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

     ////react.jsData///////////
     
     const ReactCollection = client.db('reactDB').collection('reactData')

     app.get('/reactData', async(req, res) => {
          
      const cursor = ReactCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     
    })



     ////react.jsData///////////

     ///////next.jsData///////////
      
     const nextCollection = client.db('nextDB').collection('nextData')

     app.get('/nextData', async(req, res) => {
          
      const cursor = nextCollection.find();
      const result = await cursor.toArray();
      res.send(result)
      
    })
     ///////next.jsData///////////

     ///////nodeData//////////

     const nodeCollection = client.db('nodeDB').collection('nodeData')

     app.get('/nodeData', async(req, res) => {
          
      const cursor = nodeCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     
     })
     ///////nodeData//////////


     ////expressData///////////

     const expressCollection = client.db('expressDB').collection('expressData')

     app.get('/expressData', async(req, res) => {
          
      const cursor = expressCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })
     ////expressData///////////


     ///mongoDB/////////////////

     const mongoCollection = client.db('mongoDB').collection('mongoData')

     app.get('/mongoData', async(req, res) => {
          
      const cursor = mongoCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })


     ///mongoDB/////////////////


     /////mongoose////

     const mongooseCollection = client.db('mongooseDB').collection('mongooseData')

     app.get('/mongooseData', async(req, res) => {
          
      const cursor = mongooseCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })


     /////mongoose////


     ////reduxData////

     const reduxCollection = client.db('reduxDB').collection('reduxData')

     app.get('/reduxData', async(req, res) => {
          
      const cursor = reduxCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })
     ////reduxData////


     /////postgresData////
      
     const postgresCollection = client.db('postgresDB').collection('postgresData')

     app.get('/postgresData', async(req, res) => {
          
      const cursor = postgresCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })


     /////postgresData////


     /////docker//////


     const dockerCollection = client.db('dockerDB').collection('dockerData')

     app.get('/dockerData', async(req, res) => {
          
      const cursor = dockerCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })



     /////docker//////


     //////awsData////////


     const awsCollection = client.db('awsDB').collection('awsData')

     app.get('/awsData', async(req, res) => {
          
      const cursor = awsCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     }) 


     /////graphqlData//////////

     const graphqlCollection = client.db('graphqlDB').collection('graphqlData')

     app.get('/graphqlData', async(req, res) => {
          
      const cursor = graphqlCollection.find();
      const result = await cursor.toArray();
      res.send(result)
     })





     /////crud question/////////

     const queCollection = client.db('queDB').collection('queData')



     /////////////add////

     app.post('/queData', async(req, res) => {
          
         const queData = req.body 
         console.log(queData)
         const result = await queCollection.insertOne(queData)
         res.send(result)
     
         
     })

     /////////////read//////


     app.get('/queData', async(req, res) => {
          
        const cursor = queCollection.find()
        const result = await cursor.toArray()
        res.send(result)
  
      
     })
    

     ///////delete////


     app.delete('/queData/:id', async(req, res) => {
          
         const id = req.params.id 
         const query = { _id: new ObjectId(id) }
         const result = await queCollection.deleteOne(query)
         res.send(result)

    
     }) 
 
    
     
    //////////////update////////////
    
    app.get('/queData/:id',  async(req, res) => {
      
      const id = req.params.id 
      const query = { _id: new ObjectId(id)}
      const result = await queCollection.findOne(query)
      res.send(result)
  
     })


     app.put('/queData/:id',  async(req, res) => {
      
   
      const id = req.params.id 
      const UpdateUser = req.body 
      console.log(id, UpdateUser) 
      const filter = { _id: new ObjectId(id) }
      const option = { upsert: true } 
      const upDtUsr = req.body 
      const queZ = {

         $set:{

          question:  upDtUsr.question, 
          answer:  upDtUsr.answer, 
            
        
         }

      }
      const result = await queCollection.updateOne(filter, queZ, option)
      res.send(result)
  })






     /////crud question/////////
      







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




// {
//   "version": 2,
//   "builds": [
//       {
//           "src": "./index.js",
//           "use": "@vercel/node"
//       }
//   ],
//   "routes": [
//       {
//           "src": "/(.*)",
//           "dest": "/",
//           "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
//       }
//   ]
// }