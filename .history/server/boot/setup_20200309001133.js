'use strict';

module.exports = function(app) {
  let mysql = app.dataSources.iustitia;

  let modelos = [
    'provincia',
  ];

  mysql.autoupdate(modelos);
};

