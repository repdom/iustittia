'use strict';

module.exports = function(app) {
  let mysql = app.dataSources.iustitia;

  let modelos = [
    'provincia',
  ];

  mysql.autoupdate(modelos, function(err) {
        if (err) {
            throw err;
        }
        console.log(`===== ACTULIZANDO: modelo ${modelos} =====`);
    });
};

