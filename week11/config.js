const MongoClient = require('mongodb').MongoClient;

//contact
//Mckbj9mCDkp1WE2A
class Database {
    constructor() {
      this.client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
      this.dbName = dbName;
    }
  
    async connect() {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
    }
  
    getDb() {
      return this.db;
    }

    async close() {
        await this.client.close();
    }
}
  
const start = async () => {
    await database.connect();
}

const end=async()=>{
    await database.close();
}

// const database = new Database(url='mongodb+srv://contact:<password>@cluster0.eby1tva.mongodb.net/?retryWrites=true&w=majority', dbName='contactproject');

const database = new Database(url='mongodb://localhost:27017', dbName='contactproject');
start();

console.log('Database connected');

module.exports = database;