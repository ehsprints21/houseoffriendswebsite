require('dotenv').config()
// const fs = require('fs')
// const S3 = require('aws-sdk/clients/s3')

// // this is set up only for image upload to aws

// const bucketName = process.env.AWS_BUCKET_NAME
// const region = process.env.AWS_BUCKET_REGION
// const accessKeyId = process.env.AWS_ACCESS_KEY
// const secretAccessKey = process.env.AWS_SECRET_KEY

// const s3 = new S3({
//   region,
//   accessKeyId,
//   secretAccessKey
// })

// // uploads a file to s3
// async function uploadFile(file) {
//     if(file){
//         const fileStream = await fs.createReadStream(file.path)

//         const uploadParams = {
//         Bucket: bucketName,
//         Body: fileStream,
//         Key: file.filename
//   }
//   return s3.upload(uploadParams).promise()

//     }
  

// }
// exports.uploadFile = uploadFile

const multer = require("multer");

const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
    /* ... */
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: process.env.AWS_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, `${file.fieldname}-${Date.now()}.jpg`);
        }
    })
});

module.exports = upload;
