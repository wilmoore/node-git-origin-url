# git-origin-url [![Build Status](https://travis-ci.org/wilmoore/node-git-origin-url.svg)](https://travis-ci.org/wilmoore/node-git-origin-url) [![Build Status](https://david-dm.org/wilmoore/git-origin-url.png)](https://david-dm.org/wilmoore/git-origin-url) [![NPM version](https://badge.fury.io/js/git-origin-url.png)](http://badge.fury.io/js/git-origin-url)

> Retrieve the git remote origin URL of the current repo for [Node.js][].

## Example

    var origin = require('git-origin-url');

    origin(function (err, url) {
      if (err) throw err;
      console.log(url);
    });

    //=> https://github.com/wilmoore/node-git-origin-url.git

## Installation

    $ npm install git-origin-url

## Inspiration

- [resolve-git-remote][]

## License

  MIT

[resolve-git-remote]:   https://github.com/thlorenz/resolve-git-remote
[Node.js]:              http://nodejs.org

