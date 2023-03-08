var {docClient}=require('./db')

var params = {
    TableName: 'student_data',
    Item:{
        "name":"jrebgjkbedFFFF",
        "email": "snfgjlekwnf",
        "password":"wegnevf"
    }

}

docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }}
    )
