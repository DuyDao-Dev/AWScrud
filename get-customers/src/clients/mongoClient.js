const { MongoClient } = require('mongodb')

const getCollectionClient = async (collectionName) => {
  const { MONGODB_NAME } = process.env
  const mongo = await getDbConnection()
  return mongo.db(MONGODB_NAME).collection(collectionName)
}

const getDbConnection = async () => {
  let cachedDb
  try {
    const mongoOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryReads: true,
      retryWrites: true,
      connectTimeoutMS: 10000
    }

    const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGO_PASSWORD}@josepraticedatabase.tjl9tfh.mongodb.net`
    cachedDb = await MongoClient.connect(url, mongoOptions)
  } catch (error) {
    console.error('Error connecting to Mongo', error)
    throw error
  }

  return cachedDb
}

module.exports = {
  getDbConnection,
  getCollectionClient
}
