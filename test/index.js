var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();

lab.test('returns true when 1 + 1 equals 2', function (done) {

    Code.expect(1+1).to.equal(2);
    done();
});
