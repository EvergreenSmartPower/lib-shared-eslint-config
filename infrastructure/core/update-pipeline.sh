#!/usr/bin/env bash

set -euo pipefail

component_name="SharedEslintConfigPipeline"
environment="Core"

github_oauth_token_parameter_name="/CodePipeline/GitHubOauthToken"
github_oauth_token=$(aws ssm get-parameter --region eu-west-1 \
  --name "${github_oauth_token_parameter_name}" \
  --with-decryption \
  --query "Parameter.Value" --output text)

aws cloudformation deploy --stack-name "${component_name}-${environment}" \
  --template-file ./SharedEslintConfigPipeline.yml \
  --parameter-overrides "ComponentName=${component_name}" \
                        "ParameterKey=ComponentName,ParameterValue=${component_name}" \
                        "GitHubUser=EvergreenSmartPower" \
                        "GitHubRepo=lib-shared-eslint-config" \
                        "GitHubToken=${github_oauth_token}" \
  --tags "ComponentName=${component_name}" "Environment=${environment}" \
  --region eu-west-1 \
  --capabilities CAPABILITY_IAM
