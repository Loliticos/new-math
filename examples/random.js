const Math = require('../index.js');

function random(min, max) {
    return Math.ceil(Math.random(min, max));
}

console.log(random(1, 10));
