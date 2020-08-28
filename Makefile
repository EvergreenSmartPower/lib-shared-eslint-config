export PATH := $(shell pwd)/node_modules/.bin:$(PATH)

.PHONY: test test-lint lint audit

test: test-lint audit

test-lint:
	cd example && ../node_modules/.bin/eslint './{src,test}/**/*.{ts,tsx}' --max-warnings 0

lint:
	cd example && ../node_modules/.bin/eslint './{src,test}/**/*.{ts,tsx}' --max-warnings 0 --fix

audit:
	npm audit --audit-level=moderate
