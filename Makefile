SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

test:
	@mocha --reporter spec test

clean:
	@rm -rf components node_modules

.PHONY: test clean
