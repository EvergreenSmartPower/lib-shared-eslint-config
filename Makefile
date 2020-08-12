export PATH := $(shell pwd)/node_modules/.bin:$(PATH)
DOCKER_TAG ?= shared-eslint-config:latest

.PHONY: build test lint audit test-in-container

test-in-container:
	docker run -t --rm $(DOCKER_TAG)

build-image:
	bash ./docker-build.sh $(DOCKER_TAG)

test:
	cd example && ../node_modules/.bin/eslint './{src,test}/**/*.{ts,tsx}' --max-warnings 0

lint:
	cd example && ../node_modules/.bin/eslint './{src,test}/**/*.{ts,tsx}' --max-warnings 0 --fix

audit:
	npm audit --audit-level=moderate
