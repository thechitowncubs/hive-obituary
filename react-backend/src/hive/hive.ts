import { Client } from "@hiveio/dhive";
const client = new Client(["https://api.pharesim.me", "https://api.hivekings.com", "https://anyx.io", "https://api.openhive.network"]);



// Use connect method to connect to the server
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://@165.22.36.39:27017';
 
// Database Name
const dbName = 'hive';
 

async function getHiveBlocks() {
  for await (const block of client.blockchain.getBlocks()) {
    return "id:" + `${block.block_id}`;
  }
}



function MongoConnection(){
  MongoClient.connect(url, function(err, MongoBomb) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = MongoBomb.db(dbName);
  
  
  
  
 function findDocuments(db){
    // Get the documents collection
    const collection = db.collection('blocks');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      MongoBomb.close();
    });
  }
  
  
function insertHiveBlocks(db) {
    console.log("test");
    // Get the documents collection
    const collection = db.collection('blocks');
    // Insert some document
    collection.insertOne(getHiveBlocks()), function(err, result) {
      try{ 
        console.log("MADE IT")
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("Inserted 1 documents into the collection");
        MongoBomb.close();
      } catch {
        console.log("POOP");
      }
    }
  }


insertHiveBlocks(db);
findDocuments(db);
MongoBomb.close();
  })
}
MongoConnection();
