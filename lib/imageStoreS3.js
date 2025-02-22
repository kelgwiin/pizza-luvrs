const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.save = (name, data, callback) => {
    let params = {
        Bucket: 'pizza-luvrs-kelwin-gamez',
        Key: `pizzas/${name}.png`,
        Body: new Buffer(data, 'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    };

    s3.putObject(params, (err, data) => {
        callback(err, `//pizza-luvrs-kelwin-gamez.s3-us-west-2.amazonaws.com/${params.Key}`)
    });

};