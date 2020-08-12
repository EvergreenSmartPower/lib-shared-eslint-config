#!/usr/bin/env bash

set -euo pipefail

if [[ $# -eq 0 ]] ; then
    echo 'Useage: npm-publish-from-docker.sh dockerimage'
    exit 1
fi

DOCKER_IMAGE=$1
NPM_TOKEN=$(aws ssm get-parameter --region eu-west-1 --name /CodePipeline/NpmToken --with-decryption --query "Parameter.Value" --output text)

PACKAGE_NAME=$(docker run --rm -t ${DOCKER_IMAGE} node -e 'console.log(require("./package.json").name)')
LOCAL_VERSION=$(docker run -e NPM_TOKEN=${NPM_TOKEN} "$DOCKER_IMAGE" node -e 'console.log(require("./package.json").version)')
PUBLISHED_VERSION=$(docker run -e NPM_TOKEN=${NPM_TOKEN} "$DOCKER_IMAGE" npm view ${PACKAGE_NAME} version || echo 0)
if [[ "${LOCAL_VERSION}" = "${PUBLISHED_VERSION}" ]] ; then
    echo "Local version: ${LOCAL_VERSION} matches Published version: ${PUBLISHED_VERSION}. Nothing to do"
    exit 0
fi
echo "Local version: ${LOCAL_VERSION} != Published version: ${PUBLISHED_VERSION}."
echo "Publishing ${LOCAL_VERSION}"

docker run -e NPM_TOKEN=${NPM_TOKEN} "$DOCKER_IMAGE" npm publish
