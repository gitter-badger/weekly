
# MOCHA_OPTS = --check-leaks
# REPORTER = spec
MAINNAME = $(shell cat package.json | grep main | awk -F'"' '{print $$4}')

install:
	@npm install

run:
	@node --harmony $(MAINNAME)

.PHONY: install run
