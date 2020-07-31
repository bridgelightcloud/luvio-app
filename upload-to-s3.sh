#!/bin/bash
echo "Uploading to S3 bucket..."
aws s3 sync ./web-build s3://app.getluv.io --quiet
echo "Upload complete."