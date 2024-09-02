CREATE DATABASE clinica
use clinica

CREATE TABLE medico (
matricula INT PRIMARY KEY,
nombre VARCHAR(30),
apellido VARCHAR(30),
especialidad VARCHAR(30),
observaciones TEXT
);

CREATE TABLE paciente (
nss INT,
nombre VARCHAR(30),
apellido VARCHAR(30),
domicilio VARCHAR(50),
codigo_postal INT,
telefono VARCHAR(16),
nro_historial_clinico INT PRIMARY KEY,
observaciones TEXT
);


CREATE TABLE ingreso (
id_ingreso INT PRIMARY KEY,
fecha_ingreso DATE,
numero_habitacion INT,
numero_cama INT,
observaciones TEXT,
nro_historial_paciente INT,
matricula_medico INT,
FOREIGN KEY (nro_historial_paciente) REFERENCES paciente(nro_historial_clinico),
FOREIGN KEY (matricula_medico) REFERENCES medico(matricula)
);
 
 INSERT INTO medico(matricula,nombre,apellido,especialidad,observaciones) 
 VALUES (155,"Alfredo","Gutierrez","Medicina Familiar","No atiende pami"),
 (221,"Luisa","Fonseca","Cardiologia",null),
 (226,"Frodo","Bolson","Pediatria","Solamente_turno_tarde"),
 (332,"Jesus_maria","Prates","Cirugia",null),
 (334,"Gandalf","Meriadoc","Infectologia",null),
 (449,"Ricardo","Puchini","Medicina Familiar","Medico clinicobgeneral"),
 (645,"Cacho","Villa","Oftalmologia",null),
 (733,"Tatiana","Brandigamo","Pedriatria",null),
 (774,"Alfonso","Chamorro","Cardiologia",null),
 (888,"Pedro_pablo","Cichanowski","Urologia","Actualmente licencia por covid");
 
INSERT INTO paciente(nss,nombre,apellido,domicilio,codigo_postal,telefono,nro_historial_clinico,observaciones) 
VALUES (32197,"Aewin","Rohan","Valinor_1001",2366,"3274-232336",675,null),
(971649,"Glorfindel","Arda","Terminal esquina Avenida" ,3360,"3755-447031",778,"realizar PCR"),
(336619,"Karen Sofia","Burgin","Primeros Colonos y Junin",3640,"3745-998877",1236,null),
(3648,"Gimili","Moria","Juan de Orquideas 335",3363,"3755-866545",1488,null),
(87164,"Legolas","Bosque Negro","Krause y VIllavieja",3514,"3971-544444",1498,"historial de cardiopaias"),
(254651,"Elrond","Rivendel","Balneario Campo Grande",3350,"3764-421479",1884,null), 
(369844,"Galadriel","Lorein","Bareiro 170",2207,"3943-425561",3212,null),
(44946,"Josefina","Pereira Diaz","Calle Primera 201",3363,"3755-587912",4112,null),
(654165,"Jose","Villagran","Arrayanes 1205",3360,"3755-589478",4551,null);
 
INSERT INTO ingreso(id_ingreso,fecha_ingreso,numero_habitacion,numero_cama,observaciones,nro_historial_paciente,matricula_medico)
VALUES (1, '2021-11-1', 1, 2, null, 1884, 449),
(2, '2021-11-2', 1, 1, null, 1488, 226),
(3, '2021-11-2', 2, 4, "Falta completar carnet de vacunacion", 1488, 733),
(4, '2021-11-3', 1, 2, null, 4551, 774),
(5, '2021-11-5', 4, 7, null, 4112, 645),
(6, '2021-11-15', 5, 9, null, 1236, 226),
(7, '2021-11-17', 5, 10, null, 675, 774),
(8, '2021-12-9', 3, 6, null, 778, 888),
(9, '2021-12-11', 4, 8, 'Solicitar electrocardiograma', 4112, 332),
(10, '2021-12-11', 2, 3, null, 3212, 774),
(11, '2021-12-18', 2, 4, null, 778, 334),
(12, '2021-12-22', 1, 1, null, 1488, 155),
(13, '2022-01-4', 9, 17, null, 1236, 645),
(14, '2022-01-11', 5, 9, null, 675, 226),
(15, '2022-01-12', 4, 8, null, 3212, 155),
(16, '2022-01-16', 8, 16, null, 1236, 226),
(17, '2022-01-24', 2, 3, null, 1488, 888),
(18, '2022-02-1', 8, 15, null, 3212, 334),
(19, '2022-02-14', 1, 2, null, 1884, 449),
(21, '2022-03-2', 3, 5, null, 675, 155),
(22, '2022-03-7', 8, 12, null, 4551, 334),
(23, '2022-03-13', 3, 6, null, 1498, 645),
(24, '2022-03-16', 9, 18, null, 675, 155),
(25, '2022-03-19', 5, 9, null, 4112, 774),
(26, '2022-03-22', 6, 11,"Cuenta con servicio integral de reabilitacion", 1488, 332),
(27, '2022-03-22', 3, 6, null, 1884, 332),
(28, '2022-03-22', 5, 10, null, 778, 449),
(29, '2022-03-23', 1, 1, null, 4112, 155),
(30, '2022-03-25', 3, 6, null, 1236, 226),
(31, '2022-03-29', 2, 4, null, 3212, 645),
(32, '2022-03-30', 9, 17, null, 4112, 155),
(33, '2022-04-5', 6, 11, "Internacion por deshidratacion", 1488, 733),
(34, '2022-04-7', 7, 13, null, 4551, 774);

