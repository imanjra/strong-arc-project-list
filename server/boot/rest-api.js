'use strict';
// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: strong-arc-project-list
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

module.exports = function mountRestApi(server) {
  var restApiRoot = server.get('restApiRoot');
  server.use(restApiRoot, server.loopback.rest());
};
