'use strict';

const {tagged} = require('daggy');
const Const = tagged('x');
const {of, ap, concat, map} = require('fantasy-land');

Const[of] = (x) => Const(x.empty());

Const.prototype[ap] = function(fa) {
    return this[concat](fa);
};

Const.prototype[concat] = function(y) {
    return Const(this.x[concat](y.x));
};

Const.prototype[map] = function(f) {
    return Const(this.x);
};

module.exports = Const;