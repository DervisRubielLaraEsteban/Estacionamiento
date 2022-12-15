const { request, response } = require("express");
const pool=require("../db/conexion");
const tablaempleado = require("../modelos/empleado");

const getempleado = async(req=request,res=response)=>{
    let conn;

    try{
        conn = await pool.getConnection()
        const users = await conn.query(tablaempleado.queryGetempleado ,(error)=>{throw new error})
        if(!users){
            res.status(404).json({msg:"No se encontraron empleados"})
            return
        }
        res.json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

//BUSCAR POR ID//

const getempleadoporID = async (req=request,res=response)=>{
    const {ID}=req.params
    let conn;
    try{
        conn = await pool.getConnection()
        const [user] = await conn.query(tablaempleado.queryGeempleadoporID [Nombre],(error)=>{throw new error})
        if(!user){
            res.status(404).json({msg:`No se encontró el empleado con el ID=${ID}`})
            return
        }
        res.json({user})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

//BORRAR//

const deleteempleadoporID = async (req=request,res=response)=>{
    const {ID}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(tablaempleado.queryborrarempleadoporID,[ID],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar al empleado con el ID=${ID}`})
            return
        }
        res.json({msg:`El empleado con el ID=${ID} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

//AÑADIR EMPLEADO//

const addempleado = async (req=request,res=response)=>{
    const {
        Nombre,
        Placa,
        Hora_aparcada,
        Hora_salida 
    }=req.body

    if(
        !Nombre ||
        !Placa||
        !Hora_aparcada||
        !Hora_salida
    ){
        res.status(400).json({msg:"Falta información del empleado."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(tablaempleado.queryAddempleado, [Nombre])
        if(user){
            res.status(403).json({msg:`El empleado'${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(tablaempleado.queryAddempleado,[
            Nombre,
            Placa,
            Hora_aparcada,
            Hora_salida 
        ]
            ,(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del empleado${Nombre}`})
            return
        }
        res.json({msg:`El empleado ${Nombre} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

//ACTUALIZAR EMPLEADO//
const updateempleado = async (req=request,res=response)=>{
    const {
        Nombre,
        Placa,
        Hora_aparcada ='1900-01-01',
        Hora_salida ='1900-01-01',
    }=req.body

    if(
        !Nombre||
        !Placa||
        !Hora_aparcada||
        !Hora_salida
    ){
        res.status(400).json({msg:"Falta información del empleado."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(tablaempleado.queryGetempleadodato,[Usuario])

        if(!user){
            res.status(403).json({msg:`El empleado '${Nombre}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(tablaempleado.queryGetempleadodato, [
                Nombre || user.Nombre,
                Placa|| user.Placa,
                Hora_aparcada,
                Hora_salida
            
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro del empleado ${Usuario}`})
            return
        }
        res.json({msg:`El empleado ${Nombre} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports={getempleado,getempleadoporID,deleteempleadoporID,addempleado,updateempleado}