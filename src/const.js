'use strict';

const {tagged} = require('daggy');
const {empty, of, ap, concat, map} = require('fantasy-land');

const Const = M => {

    const Const = tagged('x');
    
    Const[empty] = () => Const(M[empty]());
    Const[of] = Const[empty];

    Const.prototype[ap] = function(fa) {
        return this[concat](fa);
    };

    Const.prototype[concat] = function(y) {
        return Const(this.x[concat](y.x));
    };

    Const.prototype[map] = function(f) {
        return Const(this.x);
    };

    return Const;
};

module.exports = Const;