var {docClient} = require('../db/db')
const router = require('express').Router();

router.post('/',(req,res)=>{
    var params = {
        TableName: 'student_dataAA',
        Item:{
            "name":req.body.name,
            "email": req.body.email,
            "password":req.body.password
        }
    
    }
    
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }}
        )
})



module.exports = router;