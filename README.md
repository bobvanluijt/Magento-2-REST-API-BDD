# Behavior driven development for Magento 2 API
These test scripts validate a complete user experience based on the [Magento 2 REST API](http://devdocs.magento.com/guides/v2.0/rest/bk-rest.html) and the sample data.

Master branch | Develop branch
--- | ---
[![Build Status](https://travis-ci.org/dorel/Magento-2-REST-API-BDD.svg?branch=master)](https://travis-ci.org/dorel/Magento-2-REST-API-BDD) | [![Build Status](https://travis-ci.org/dorel/Magento-2-REST-API-BDD.svg?branch=develop)](https://travis-ci.org/dorel/Magento-2-REST-API-BDD)

## How it works
The Travis-ci YAML file installs a complete Magento 2 platform and enables the anonymous REST API's.

## Contribute
1. Contribute following the [Gitflow](http://nvie.com/posts/a-successful-git-branching-model/) method. You can create a feature branch that can be merged later into dev for testing.
2. All testcases should be done inside the file test/scenarios.js
3. Properly define your `it()` function. Example: `it('should output foo bar in JSON')`
4. Always use JSON
5. When creating or updating sessions, always make them available in the appropriate scope to mimic user behavior best.

## Issues
Log issues in the Github Issues tab