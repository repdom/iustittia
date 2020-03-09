'use strict';

module.exports = function(app) {
  let mysql = app.dataSources.iustitia;

  let modelos = [
    'AccessToken',
  ];

  mysql.autoupdate(modelos);
};

