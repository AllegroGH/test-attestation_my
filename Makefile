install:
	npm ci

test:
	npm test

test-steps:
	npx jest --testNamePattern step1
	npx jest --testNamePattern step2
	npx jest --testNamePattern step3
	npx jest --testNamePattern step4
	npx jest --testNamePattern step5

test-coverage: # запуск тестов с измерением покрытия
	npm test --  --coverage
