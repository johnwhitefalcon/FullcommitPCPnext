


import { MongoClient } from 'mongodb'
//const assert = require('assert');
//const MongoClient = require('mongodb').MongoClient; 
const uri = process.env.MONGODB_URI2;
const dbname = process.env.MONGO_DB2;

export async function connectToDatabase2(){
  
//  const client = await new MongoClient(uri);
const client = await new MongoClient(uri)
const clientPromise  = await client.connect()

  
const db = await clientPromise.db(dbname);

return {db}

}



//  await client.connect({
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  })
  
// const db = await client.db(dbname);







