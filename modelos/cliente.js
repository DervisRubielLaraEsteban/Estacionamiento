const tablaclientes ={

    queryGetclientes: "SELECT * FROM ticket1",
 
    queryGetclientesporID : `SELECT * FROM ticket1 WHERE ID= ?`,
 
    queryDeleteclientesporID: `UPDATE ticket1 SET Estado='Aparcado' WHERE ID= ?`,
 
    queryclientesExists: `SELECT Marca_Auto FROM ticket1 WHERE Marca_Auto = ?`,
 
    queryAddclientes: `
    INSERT INTO ticket1(
        ID,
        Marca_Auto,
        Lugar_Area,
        Costo_hora,
        Tiempo_Actual,
        Estado
     )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
 )`, 

 queryGetclientesdato:`
 SELECT Marca_Auto,Lugar_Area,Costo_hora,Tiempo_Actual,Estado
 FROM ticket1
 WHERE Marca_Auto=?
 `,
 queryactualizarclientes:`
 UPDATE ticket1 SET
    Costo_hora= ?,
    Tiempo_Actual=?,
    WHERE Estado=?
`
}
module.exports = tablaclientes