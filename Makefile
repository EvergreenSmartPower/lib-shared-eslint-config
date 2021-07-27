export PATH := $(shell pwd)/node_modules/.bin:$(PATH)

.PHONY: test
test: test-lint audit

.PHONY: test-lint
test-lint:
	cd example && ../node_modules/.bin/eslint './{src,test}/**/*.{ts,tsx}' --max-warnings 0

.PHONY: lint
lint:
	cd example && ../node_modules/.bin/eslint './{src,test}/**/*.{ts,tsx}' --max-warnings 0 --fix

.PHONY: audit
audit:
	npm audit --audit-level=moderate

.PHONY: check-lockfile-version
check-lockfile-version:
	@node -e " \
		const packageLock = require('fs').readFileSync('package-lock.json', 'utf-8'); \
		const lockfileVersion = JSON.parse(packageLock).lockfileVersion; \
		if (!(lockfileVersion >= 2)) { \
			console.error('lockfileVersion must be 2 or greater'); \
			process.exit(1); \
		}"
