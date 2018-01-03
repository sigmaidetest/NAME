const ddb = AWS.DynamoDB();
function handle(event, context, callback) {


    ddb.put({
        TableName: 'Invoice',
        Item: {
            X: 'MEN',
            Hii: 200.2
        }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });


}