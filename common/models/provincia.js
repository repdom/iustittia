'use strict';

module.exports = function(Provincia) {
    Provincia.getProvinciasporPost = function(formularioEvaluacion,cb) {
        console.log(formularioEvaluacion);
            Provincia.find({}, function(err, result) {
                if (err) {
                    // console.log(Provincia.find({}));
                    console.log(err);
                } else {
                    cb(err, result);
                }
                // console.log(result);
            });
        }

    Provincia.remoteMethod(
        'getProvinciasporPost', {
            http: { path: '/getProvinciasporPost', verb: 'post' },
            accepts:{ arg: 'formularioBloqueado', type: 'object', required: false, http: { source: 'body' }},
            returns: { arg: 'data', type: 'object', root: true },
            description: 'Get Provincias'
        }
    );
};
