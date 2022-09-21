install:
	npm ci
	npm link
	
test-publish: 
	npm publish --dry-run

lint: 
	npx eslint .

test:
	npm test

test-watch:
	npm test -s -- --watch

test-coverage: # Run coverage tests
	npm test -- --coverage --coverageProvider=v8
