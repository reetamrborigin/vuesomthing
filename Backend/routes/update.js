var { docClient } = require("../db/db");
const router = require("express").Router();

router.post("/", (req, res) => {
    var params={
        TableName:'student_dataAA',
        Key:{
            email:req.body.email
        },
        UpdateExpression:'set #name=:n',
        ExpressionAttributeNames:{
            "#name":"name"
        },
        
        ExpressionAttributeValues:{
            ":n":"amogh",
        },
        ReturnValues:"UPDATED_NEW"
    }
    
    docClient.update(params,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }})
});

module.exports = router;
