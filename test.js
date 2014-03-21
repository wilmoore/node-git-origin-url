var test = require('tape');
var url  = require('./index');

test('origin url', function (t) {
  url(function (err, url) {
    t.equal(url, "https://github.com/wilmoore/node-git-origin-url.git");
    t.end();
  });
});

