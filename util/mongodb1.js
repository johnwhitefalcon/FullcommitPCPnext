
import { MongoClient } from 'mongodb'
//const assert = require('assert');
//const MongoClient = require('mongodb').MongoClient; 
const uri = process.env.MONGODB_URI1;
const dbname = process.env.MONGO_DB1;

export async function connectToDatabase1(){
  
//  const client = await new MongoClient(uri);
const client = await new MongoClient(uri)
const clientPromise  = await client.connect()

  
const db1 = await clientPromise.db(dbname);

return {db1}

}



//  await client.connect({
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  })
  
// const db = await client.db(dbname);








