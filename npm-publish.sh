#!/usr/bin/env bash

set -euo pipefail

echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc
export NPM_TOKEN=$(aws ssm get-parameter --region eu-west-1 --name /CodePipeline/NpmToken --with-decryption --query "Parameter.Value" --output text)

PACKAGE_NAME=$(node -e 'console.log(require("./package.json").name)')
LOCAL_VERSION=$(node -e 'console.log(require("./package.json").version)')
PUBLISHED_VERSION=$(npm view ${PACKAGE_NAME} version || echo 0)
if [[ "${LOCAL_VERSION}" = "${PUBLISHED_VERSION}" ]] ; then
    echo "Local version: ${LOCAL_VERSION} matches Published version: ${PUBLISHED_VERSION}. Nothing to do"
    exit 0
fi
echo "Local version: ${LOCAL_VERSION} != Published version: ${PUBLISHED_VERSION}."
echo "Publishing ${LOCAL_VERSION}"

npm publish
