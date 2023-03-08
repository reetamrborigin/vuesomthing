const { Credentials } = require('aws-sdk');
var AWS=require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    //change the credentials to ur credentials and for best prctice put the cedentials in .env files and use it
    credentials: {
        accessKeyId: 'AKIAVMBLFR4YRG2RF3FB',
        secretAccessKey: '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',
      }
})

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
module.exports ={dynamodb:dynamodb,docClient:docClient};