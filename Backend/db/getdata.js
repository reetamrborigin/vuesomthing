var {docClient}= require('./db')

var params={
    TableName:'student_dataAA',
    Key:{
        "id":2
    }
    
}

docClient.get(params,function(err,data){
    if(err){
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    }else{
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }})