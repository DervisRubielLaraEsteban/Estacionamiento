const { request, response } = require("express");
const pool=require("../db/conexion");
const tablaclientes = require("../modelos/cliente");
const getcliente = async(req=request,res=response)=>{
    let conn;

    try{
        conn = await pool.getConnection()
        const users = await conn.query(tablaclientes.queryGetclientes ,(error)=>{throw new error})
        if(!users){
            res.status(404).json({msg:"No se encontró el cliente"})
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

const getclienteporID = async (req=request,res=response)=>{
    const {ID}=req.params
    let conn;
    try{
        conn = await pool.getConnection()
        const [user] = await conn.query(tablaclientes. queryGetclientesporID [ID],(error)=>{throw new error})
        if(!user){
            res.status(404).json({msg:`No se encontró el cliente con el ID=${ID}`})
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

//AÑADIR CLIENTE//

const addcliente = async (req=request,res=response)=>{
    const {
        ID,
        Marca_Auto,
        Lugar_Area,
        Costo_hora,
        Tiempo_Actual,
        Estado
    }=req.body

    if(
        !ID||
        !Marca_Auto||
        !Lugar_Area||
        !Costo_hora||
        !Tiempo_Actual||
        !Estado
    ){
        res.status(400).json({msg:"Falta información del cliente."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(tablaclientes.queryAddclientes, [Nombre])
        if(user){
            res.status(403).json({msg:`El cliente'${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(tablaclientes.queryAddclientes,[
        Marca_Auto,
        Lugar_Area,
        Costo_hora,
        Tiempo_Actual,
        Estado
        ]
            ,(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del cliente${Marca_Auto}`})
            return
        }
        res.json({msg:`El cliente ${Marca_Auto} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

//ACTUALIZAR CLIENTE//
const updatecliente = async (req=request,res=response)=>{
    const {
        Marca_Auto,
        Lugar_Area,
        Costo_hora,
        Tiempo_Actual='1900-01-01',
        Estado
    }=req.body

    if(
        !Marca_Auto ||
        !Lugar_Area ||
        !Costo_hora ||
        !Tiempo_Actual ||
        !Estado
    ){
        res.status(400).json({msg:"Falta información del cliente."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(tablaclientes.queryGetclientesdato,[Usuario])

        if(!user){
            res.status(403).json({msg:`El cliente '${Marca_Auto}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(tablaclientes.queryGetclientesdato, [
                Marca_Auto || user.Marca_Auto,
                Lugar_Area|| user.Lugar_Area,
                Estado || user.Estado,
                Tiempo_Actual
            
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro del cliente ${Marca_Auto}`})
            return
        }
        res.json({msg:`El cliente ${Marca_Auto} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}
module.exports={getcliente, getclienteporID, addcliente, updatecliente}