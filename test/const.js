'use strict';

const λ = require('fantasy-check/src/adapters/nodeunit');
const applicative = require('fantasy-check/src/laws/applicative');
const functor = require('fantasy-check/src/laws/functor');
const {identity} = require('fantasy-combinators');
const {tagged} = require('daggy');

const Sum = tagged('x');
Sum.empty = () => Sum(0);
Sum.prototype.empty = Sum.empty;
Sum.prototype.concat = function(a) {
    return Sum(this.x + a.x);
};

const Const = require('../fantasy-consts');

function of(x) {
    return Const(Sum).of(Sum(x));
}

function run(x) {
    return x.x;
}

exports.consts = {

    // Functor tests
    'All (Functor)': functor.laws(λ)(of, run),
    'Identity (Functor)': functor.identity(λ)(of, run),
    'Composition (Functor)': functor.composition(λ)(of, run)
};
