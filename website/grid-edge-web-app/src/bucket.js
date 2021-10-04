import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

const REGION = "us-east-2";
const CSV_BUCKET = "pecan-street-data-csv-bucket175351-staging";

// const s3Client = new S3Client({ region: REGION }); // needs bucketEndpoint? (create via console or amplify sdk & attach to bucket)

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

uploadFile("assets\\img\\panel.png");
