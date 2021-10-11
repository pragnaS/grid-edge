import json
import boto3
import os


def retrieve_model(bucket_name, model_key):
    try:
        s3 = boto3.resource('s3')
        model = s3.Object(bucket_name, model_key)
        return 'no exception in retriving model'
    except Exception as e:
        return None


def handler(event, context):
    csv_bucket = os.environ['CSV_BUCKET']
    model_bucket = os.environ['MODEL_BUCKET']
    model = retrieve_model(model_bucket, 'model_name')
    return {
        'statusCode': 200,
        'body': json.dumps('Handler returns successfully'),
        'model': model
    }