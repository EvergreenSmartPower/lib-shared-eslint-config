#!/usr/bin/env bash

set -euo pipefail

if [[ $# -eq 0 ]] ; then
    echo 'Useage: docker-build.sh image-tag:version'
    exit 1
fi

DOCKER_BUILD_TAG=$1
NPM_TOKEN=$(aws ssm get-parameter --region eu-west-1 --name /CodePipeline/NpmToken --with-decryption --query "Parameter.Value" --output text)
docker build --build-arg NPM_TOKEN=${NPM_TOKEN} --tag "${DOCKER_BUILD_TAG}" --tag shared-eslint-config:latest .
