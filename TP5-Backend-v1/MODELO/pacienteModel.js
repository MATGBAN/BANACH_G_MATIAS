//codigo encargado de gestionar los datos con la base de datos de los pacientes

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

// --> app.get("/", obtenerTodoPaciente());  --> paciente = pacienteBD.getAll((err, result) => {}
metodos.getAll = function (callback) {
    consulta = "select * from paciente";
    connection.query(consulta, function (err, resultados, fields) {
        if (err) {
            callback(err);
            return;
        } else {
            callback(undefined, {
                messaje: "Resultados de la consulta",
                detail: resultados,
            });
        }
    });
}

// --> app.get('/:nss', obtenerPaciente);  -->  pacienteBD.getPaciente(nss, () => {})
metodos.getPacienteNss = function (nss, callback) {
    consulta = "select * from paciente where nss = ?";

    connection.query(consulta, nss, function (err, resultados, fields) {
        if (err) {
            callback(err);
        } else {
            if (resultados.length == 0) {
                callback(undefined, "no se encontro un paciente con el numero de seguridad social:" + nss)
            } else {
                callback(undefined, {
                    messaje: "Resultados de la consulta",
                    detail: resultados,
                });
            }
        }

    });

}

//--> pacienteBD.metodos.crearPaciente(req.body, (err, exito) => {});
metodos.crearPaciente = function (datosPaciente, callback) {
    paciente = [
        datosPaciente.nss,
        datosPaciente.nombre,
        datosPaciente.apellido,
        datosPaciente.domicilio,
        datosPaciente.codigo_postal,
        datosPaciente.telefono,
        datosPaciente.nro_historial_clinico,
        datosPaciente.observaciones,     
    ];

    consulta =
        "INSERT INTO paciente (nss, nombre, apellido, domicilio, codigo_postal, telefono, nro_historial_clinico, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(consulta, paciente, (err, rows) => {
        if (err) {
            if (err.code = "ER_DUP_ENTRY") {
                callback({
                    message: "ya existe un paciente con el numero de seguridad social " + datosPaciente.nss,
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
                message: "el Paciente " + datosPaciente.nombre + " " + datosPaciente.apellido + "se registro correctamente",
                detail: rows,
            })
        }
    });
}



//--> app.put("/:nss", modificarPaciente);  --> function modificarPaciente(req, res) {}
metodos.update = function (datosPaciente, delPaciente, callback) {

    paciente = [
        datosPaciente.nss,
        datosPaciente.nombre,
        datosPaciente.apellido,
        datosPaciente.domicilio,
        datosPaciente.codigo_postal,
        datosPaciente.telefono,
        datosPaciente.nro_historial_clinico,
        datosPaciente.observaciones,  
        parseInt(delPaciente)
    ];
    consulta = "update paciente set nss = ?, nombre = ?, apellido = ?, domicilio = ?, codigo_postal = ? telefono = ? nro_historial_clinico = ? observaciones = ?  WHERE nss = ?";


    connection.query(consulta, paciente, (err, rows) => {
        if (err) {
            callback(err);
        } else {

            if (rows.affectedRows == 0) {
                callback(undefined, {
                    message:
                        `no se enocntro un paciente con el nss ${delPaciente}`,
                    detail: rows,
                })
            } else {
                callback(undefined, {
                    message:
                        `el paciente ${datosPaciente.nombre} se actualizo correctamente`,
                    detail: rows,
                })
            }

        }
    });

}


// -->  app.delete("/:nss", eliminarPaciente);   -->   pacienteBD.metodos.deletePaciente(req.params.nss, (err, exito) => {}); 
metodos.deletePaciente = function (nss, callback) {
    query = "delete from paciente where nss = ?";
    connection.query(query, nss, function (err, rows, fields) {
        if (err) {
            callback({
                message: "ha ocurrido un error",
                detail: err,
            });
        }

        if (rows.affectedRows == 0) {
            callback(undefined, "No se encontro un paciente con el numero de seguridad social " + nss);
        } else {
            callback(undefined, "el paciente " + nss + " fue eliminado de la Base de datos");
        }
    });
}

module.exports = { metodos }

