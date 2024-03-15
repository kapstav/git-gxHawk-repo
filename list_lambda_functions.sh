#!/bin/bash

# Change directory to lib/lambda/lambda-handlers
cd lib/lambda/lambda-handlers

# List subfolders and concatenate them into a space-separated string
lambda_functions=$(ls -d */ | sed 's#/##' | tr '\n' ' ')

# Output the space-separated string
echo $lambda_functions
