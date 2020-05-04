const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://dzony:dzony@cluster0-ohvhq.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("conected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
