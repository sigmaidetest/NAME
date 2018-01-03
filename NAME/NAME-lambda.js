
const ddb = AWS.DynamoDB.DocumentClient();
function handle(event, context, callback) {

    ddb.put({
        TableName: 'Invoice',
        Item: {
            X: 'FX'
        }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });




}