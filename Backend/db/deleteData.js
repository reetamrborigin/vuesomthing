var {docClient}=require('./db')

// const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'student_dataAA',
  Key: {
    id: 'esfwefwefsw'
  }
};

docClient.delete(params, function(err, data) {
  if (err) {
    console.error('Unable to delete item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('DeleteItem succeeded:', JSON.stringify(data, null, 2));
  }
});
