#!/usr/bin/env bash
rm index.zip
cd lambda
zip -r -X ../index.zip *
cd ..
aws lambda update-function-code --function-name chemex-first-floor --zip-file fileb://index.zip