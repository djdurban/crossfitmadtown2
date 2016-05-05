//configure access: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html

var db = require('aws-sdk');
var moment = require('moment');

db.config.update({
    accessKeyId: process.env.db_AccessKeyID,
    secretAccessKey: process.env.db_SecretAccessKey,
    region: "us-east-1"
});

var docClient = new db.DynamoDB.DocumentClient();

var options = {
    TableName: process.env.PROD_MODE ? "Madtown_Blog" : "Madtown_Blog_Beta",
    KeyConditionExpression: "#tp = :type and #dt = :date",
    ExpressionAttributeNames:{
        "#tp": "Type",
        "#dt": "Date"
    }
};

exports.getItem = function (type, date, cb) {
    date = moment(date).format('M/D/YYYY');
    options.ExpressionAttributeValues = {
        ":type": type,
        ":date": date
    };
    docClient.query(options, function (err, response) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(response);
        }
        cb(err, response);
    });
};


