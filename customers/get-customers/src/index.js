const { getCollectionClient } = require('./clients/mongoClient')
const  { config } = require ('dotenv')

const handler = async (event) => {

  config();

  const customers = await getCollectionClient('customers')
  const result = await customers.find().toArray()
  console.log(result)
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response
}

console.log(handler())
