import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import Amplify, { Auth, Storage } from 'aws-amplify';
// import App from "./app";
import awsmobile from './aws-exports.js';

Amplify.default.configure(awsmobile);

const REGION = "us-east-2";
const CSV_BUCKET = "pecan-street-data-csv-bucket175351-staging";

// don't use this, look at app.js
function uploadFile(fileName){
    try {
        const client = new S3Client({ region: REGION });
        const splitArr = fileName.split("\\");
        const key = splitArr[splitArr.length - 1];
        const command = new PutObjectCommand({ Bucket: CSV_BUCKET, Key: key, Body: fileName });
        const response = client.send(command);
        return response;
    }
    catch (err){
        console.log("oops");
    }    
};

function downloadFile(fileName){
    try {
        const client = new S3Client({ region: REGION });
        const command = new GetObjectCommand({ Bucket: CSV_BUCKET, Key: fileName }); // input has Bucket, Key
        const response = client.send(command);
        return response["Body"];
    }
    catch (err) {
        return null;
    }
}
