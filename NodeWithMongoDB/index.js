
const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb+srv://teammatrix3549:z41fmNb4lROnCBEt@cluster0.qnv3o6l.mongodb.net?retryWrites=true&w=majority";
const conf = { useUnifiedTopology: true };

async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(URL, conf);
    console.log("Connection Successful!");

    // Do other operations with the database

    // await InsertData(client); // Use await to ensure the data insertion completes before closing the connection
    // await DeleteOneItem(client);
    // await DeleteManyItem(client);
    // await findoneWithoutCondition(client);
    // await findoneWithCondition(client);
    // await findAllData(client);

    // await findAllDataByProjection(client);

    // await findAllDataByQuery(client);
    // await findAllDataBylimit(client);
    // await findAllDataSort(client);
    // await UpdateData(client);
    // await CreateCollection(client);
    await deleteCollection(client);

    client.close();
    
  } catch (err) {
    console.log("Connection failed!");
  }
}

connectToMongoDB();

// Insert Data 

async function InsertData(client) {
  try {
    const database = client.db("demo");
    const collection = database.collection("test");
    const data = { name: "Maruf Tushar Ahmed", Roll: "99", Class: "Six", City: "Magura" };
    const result = await collection.insertOne(data);
    console.log("Data Inserted Successfully");
  } catch (err) {
    console.log("Data Insert Failed", err);
  }
}

// Delete one Data 

async function DeleteOneItem(client) {
  try {
    const database = client.db("demo");
    const collection = database.collection("test");
    var deleteItem = { Roll: "02" };
    const result = await collection.deleteOne(deleteItem);
    console.log("Item Delete Successfully!");
  }
  catch (err) {
    console.log("Item not deleted, Something wrong-",err);
  }
}

// Delete many property

async function DeleteManyItem(client) {
  try {
    const database = client.db("demo");
    const collection = database.collection("test");
    
    const deleteResult = await collection.deleteMany();

    console.log(deleteResult.deletedCount + " items deleted");
    
  } catch (err) {
    console.log("Items not deleted, something went wrong -> ", err);
  }
}

// find data without condition in database

async function findoneWithoutCondition(client) {
  try {
    var database = client.db("demo");
    var collection = database.collection("test");
    var findObj = {}; // first row 
    var result = await collection.findOne(findObj);
    console.log("Find Success");
    console.log(result);
  } catch (err) {
    console.log("Not found/Error -> "+err);
  }
}

// find data with condition in database

async function findoneWithCondition(client){
  try {
    var database = client.db("demo");
    var collection = database.collection("test");
    var findObj = {"Roll": "99"}; 
    var result = await collection.findOne(findObj);
    console.log("Find Success");
    console.log(result);
  } catch (err) {
    console.log("Not found/Error -> "+err);
  }
}

// find all data in database

async function findAllData(client){
  try{
    var database = client.db("demo");
    var collection = database.collection("test");
    var result = await collection.find().toArray();
    console.log(result);
  }
  catch(err){
    console.log("An error occured -> " +err);
  }
}

// find data by using projection - specific find 
// (Problem ---------------)
async function findAllDataByProjection(client){
  try{
    var database = client.db("demo");
    var collection = database.collection("test");
    var ItemObj = {}
    // const ItemProjection={projection:{Roll: ""}};
    var ItemProjection={projection:{Roll:"",City:""}}
    var result = await collection.find(ItemObj, ItemProjection).toArray();
    console.log(result); 
  }
  catch(err){
    console.log("An error happended -> " +err);
  }
}

// find all data by query

async function findAllDataByQuery(client){
  try{
    var database = client.db("demo");
    var collection = database.collection("test");
    var Query={Roll :"75",City: "Magura"}
    var result  = await collection.find(Query).toArray();
    console.log(result);
  }
  catch(err){
    console.log("Error -> " +err);
  }
}

// find data using limit()

async function findAllDataBylimit(client){
  try{
    var database = client.db("demo");
    var collection = database.collection("test");
    var result = await collection.find().limit(2).toArray();
    console.log(result);
  }
  catch(err){
    console.log("Error -> " +err);
  }
}

// find data using sort

async function findAllDataSort(client){
  try{
    var database = client.db("demo");
    var collection = database.collection("test");
  // var sortPattern = {Roll: 1}; 
  var sortPattern = {City: -1}; 
  var result = await collection.find().sort(sortPattern).toArray();
  console.log(result);
  }
  catch(err){
    console.log(err);
  }
}

// updateOne data in a database 

async function UpdateData(client){
  try{
    var database = client.db("demo");
    var collection = database.collection("test");
    var MyQuery = {Roll : "99"};
    var MyNewValue = {$set: {name: "Tamim", City: "Chittagong"}}
    var result = await collection.updateOne(MyQuery, MyNewValue);
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}

// create a collection 

async function CreateCollection(client){
  try{
    var database = client.db("demo");
    var collection = await database.createCollection("second");
    console.log("Success create collection");
  }
  catch(err){
    console.log(err);
  }
}

// delete the collection

async function deleteCollection(client){
  try{
    var database = client.db("demo");
    var deleteCollection = await database.dropCollection("second");
    console.log("Success delete collection ->" +deleteCollection);
  }
  catch(err){
    console.log(err);
  }
}
