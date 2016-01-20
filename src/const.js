'use strict';

const {tagged} = require('daggy');
const Const = tagged('x');

Const.of = (x) => Const(x.empty());

Const.prototype.ap = function(fa) {
    return this.concat(fa);
};

Const.prototype.concat = function(y) {
    return Const(this.x.concat(y.x));
};

Const.prototype.map = function(f) {
    return Const(this.x);
};

// Export
if (typeof module != 'undefined')
    module.exports = Const;