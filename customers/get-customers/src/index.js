const { getCollectionClient } = require('./clients/mongoClient');

const handler = async (event) => {
  console.log('event', event);
  console.log(process.env);
  const customers = await getCollectionClient('customers');
  const result = await customers.find().toArray();
  console.log(result);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

module.exports.handler = handler;