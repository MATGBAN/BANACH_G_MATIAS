//codigo encargado de gestionar los datos con la base de datos de los medicos
require('rootpath')();

const mysql = require("mysql");
const configuracion = require("config.json");
const { query } = require('express');
// Agregue las credenciales para acceder a su base de datos
const connection = mysql.createConnection(configuracion.database);

connection.connect((err) => {
    if (err) {
        console.log(err.code);
    } else {
        console.log("BD conectada");
    }
});

var metodos = {}

// --> app.get('/:iding', obtenerIngreso);  -->  IngresoBD.getIngreso(iding, () => {})
metodos.getIngreso = function (id_ingreso, callback) {
    consulta = "select * from ingreso where id_ingreso = ?";

    connection.query(consulta, id_ingreso, function (err, resultados, fields) {
        if (err) {
            callback(err);
        } else {
            if (resultados.length == 0) {
                callback(undefined, "no se encontro un ingreso con el ID de ingreso:" + id_ingreso)
            } else {
                callback(undefined, {
                    messaje: "Resultados de la consulta",
                    detail: resultados,
                });
            }
        }

    });

}

//--> ingresoBD.metodos.crearIngreso(req.body, (err, exito) => {});
metodos.crearIngreso = function (datosIngreso, callback) {
    ingreso = [
        datosIngreso.id_ingreso,
        datosIngreso.fecha_ingreso,
        datosIngreso.numero_habitacion,
        datosIngreso.numero_cama,
        datosIngreso.observaciones,
        datosIngreso.nro_historial_paciente,
        datosIngreso.matricula_medico
    ];
    consulta =
        "INSERT INTO ingreso (id_ingreso, fecha_ingreso, numero_habitacion, numero_cama, observaciones, nro_historial_paciente, matricula_medico) VALUES (?, ?, ?, ?, ?, ?, ?)";

    connection.query(consulta, ingreso, (err, rows) => {
        if (err) {
            if (err.code = "ER_DUP_ENTRY") {
                callback({
                    message: "ya existe un ingreso con ID N° " + datosIngreso.id_ingreso,
                    detail: err.sqlMessage
                })
            } else {
                callback({
                    message: "otro error que no conocemos",
                    detail: err.sqlMessage
                })
            }


        } else {
            callback(undefined, {
                message: "el ingreso ID N° " + datosIngreso.id_ingreso + "se registro correctamente",
                detail: rows,
            })
        }
    });
}


module.exports = { metodos }

