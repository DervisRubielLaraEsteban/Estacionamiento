const tablaempleado = {

    queryGetempleado: "SELECT * FROM ticket2",
 
    queryGeempleadoporID : `SELECT * FROM ticket2 WHERE ID= ?`,
 
    queryborrarempleadoporID: `UPDATE ticket2 SET Activo='Aparcado' WHERE ID= ?`,
 
    queryempleadoExists: `SELECT Nombre FROM ticket2 WHERE Nombre = ?`,
 
    queryAddempleado: `
             INSERT INTO ticket2(
                ID,
                Nombre,
                Placa,
                Hora_aparcada,
                Hora_salida 
             )VALUES(
                 ?,
                 ?,
                 ?,
                 ?,
                 ?
             )
             `, 
    queryGetempleadodato:`
    SELECT Nombre Placa,Hora_aparcada,Hora_salida
    FROM ticket2
    WHERE Nombre =?
    `,
 
    queryactualizarempleado:`
    UPDATE ticket2 SET
        Placa= ?,
        Hora_aparcada= ?,
        Hora_salida= ?,
    WHERE Nombre = ?
    `
 }
 module.exports = tablaempleado