'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-finite Module {0}'
};

module.exports = require('bitcore-lib-finite').errors.extend(spec);
