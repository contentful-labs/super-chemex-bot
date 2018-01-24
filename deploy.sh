#!/usr/bin/env bash

usage() {
    echo "Usage: deploy.sh <lambda-function-name>"
}

if [ -z "$1" ]; then
    echo "Provide a function name."
    usage
    exit 1
fi

# Test AWS existence
which aws 1>/dev/null 2>&1

if [ "$?" -ne "0" ]; then
    echo "Please install the AWS cli tools."
    exit 2
fi

# Remove the zip file, if it exists
rm super-chemex-bot.zip 2>/dev/null

echo "Zipping the lambda/ directory..."
cd lambda; zip -q -r -X ../super-chemex-bot.zip *; cd ..

echo "Deploying to AWS..."
aws lambda update-function-code --function-name $1 --zip-file fileb://super-chemex-bot.zip >/dev/null

if [ "$?" -eq "255" ]; then
    echo "super-chemex-bot couldn't deploy to AWS properly. Check the function name and try again."
else
    echo "super-chemex-bot deployed!"
fi