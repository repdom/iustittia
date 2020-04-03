'use strict';

module.exports = function(Provincia) {
    Provincia.getProvinciasporPost = function(formularioEvaluacion,cb) {
        console.log(formularioEvaluacion);
            Provincia.find({}, function(err, result) {
                if (err) {
                    // console.log(Provincia.find({}));
                    console.log(err);
                } else {
                    let provincias = {};
                    provincias.provincias = result;
                    cb(err, provincias);
                }
                // console.log(result);
            });
        }

        Provincia.getArticulosPorPost = function(provinciaId, cb) {
            console.log(provinciaId);
            Provincia.app.models.articulo.find({where: {provinciaId: provinciaId}}, function(err, result) {
                if (err) {
                    // console.log(Provincia.find({}));
                    console.log(err);
                } else {
                    let articulos = {};
                    articulos.articulos = result;
                    cb(err, articulos);
                }
                // console.log(result);
            });
        }

        // FormularioEvaluacion.app.models.Area

    Provincia.remoteMethod(
        'getProvinciasporPost', {
            http: { path: '/getProvinciasporPost', verb: 'post' },
            accepts:{ arg: 'formularioBloqueado', type: 'object', required: false, http: { source: 'body' }},
            returns: { arg: 'data', type: 'object', root: true },
            description: 'Get Provincias'
        }
    );
    Provincia.remoteMethod(
        'getArticulosPorPost', {
            http: { path: '/getArticulosPorPost', verb: 'post' },
            accepts:{ arg: 'provinciaId', type: 'number', required: true},
            returns: { arg: 'data', type: 'object', root: true },
            description: 'Get  articulos por provincia'
        }
    );
};
