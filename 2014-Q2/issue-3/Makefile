
# MOCHA_OPTS = --check-leaks
# REPORTER = spec
REGISTRY = --registry=http://registry.npm.taobao.org
MAINNAME = $(shell cat package.json | grep main | awk -F'"' '{print $$4}')

install:
	@npm install $(REGISTRY) --disturl=http://npm.taobao.org/dist

run:
	@node --harmony $(MAINNAME)

.PHONY: install run
