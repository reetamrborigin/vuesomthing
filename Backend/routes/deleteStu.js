var {docClient} = require('../db/db')
const router = require('express').Router();


router.post("/",(req,res)=>{
    const params = {
        TableName: 'student_dataAA',
        Key: {
          name: req.body.name
        }
      };
      
      docClient.delete(params, function(err, data) {
        if (err) {
          console.error('Unable to delete item. Error JSON:', JSON.stringify(err, null, 2));
        } else {
          console.log('DeleteItem succeeded:', JSON.stringify(data, null, 2));
        }
      });
      
})


module.exports = router;