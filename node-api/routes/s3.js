require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

// this is set up only for image upload to aws

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
async function uploadFile(file) {
    if(file){
        const fileStream = await fs.createReadStream(file.path)

        const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
  }
  return s3.upload(uploadParams).promise()

    }
  

}
exports.uploadFile = uploadFile
