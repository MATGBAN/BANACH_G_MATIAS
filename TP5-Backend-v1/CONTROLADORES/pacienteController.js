//--- requires ------------------------------------------
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const pacienteBD = require("../modelos/pacienteModel.js");

// -------------------------------------------------------- 
// --rutas de escucha (endpoint) dispoibles para MEDICO --- 
// --------------------------------------------------------

app.post('/create', crearPaciente);
app.get('/:nss', obtenerPaciente);
app.get('/', obtenerTodoPaciente);
app.delete("/:nss", eliminarPaciente);
app.put("/:nss", modificarPaciente);







// --------------------------------------------------------
// ---------FUNCIONES UTILIZADAS EN ENDPOINTS -------------
// --------------------------------------------------------

function obtenerTodoPaciente(req, res) {
    paciente = pacienteBD.metodos.getAll((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    }
    );
}

function obtenerPaciente(req, res) {
    let nss = req.params.nss;
    pacienteBD.metodos.getPacienteNss(nss, () => {
        (err, exito) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(exito)
            }
        }
    });
}


function crearPaciente(req, res) {
    pacienteBD.metodos.crearPaciente(req.body, (err, exito) => {
        if (err) {
            res.send(err);
        } else {
            res.json(exito);
        }
    });
}


function modificarPaciente(req, res) {
    datosPaciente = req.body;
    delPaciente = req.params.nss;
    pacienteBD.metodos.update(datosPaciente, delPaciente, (err, exito) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(exito) //medico modificado
        }
    });
}


function eliminarPaciente(req, res) {
    pacienteBD.metodos.deletePaciente(req.params.nss, (err, exito) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.send(exito)
        }
    })
}

//exportamos app que es nuestro servidor express a la cual se le agregaron endpoinds de escucha
module.exports = app;