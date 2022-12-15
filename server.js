const express = require('express') 
const empleadoRouter = require('./routes/empleado')
const clienteRouter = require('./routes/clientes')
const cors =require("cors")
class Server{
    constructor(){
      this.app = express()
      this.paths = {
         empleado:"/api/v1/empleado",
         cliente:"/api/v1/cliente"
        }
       this.middlewares() 
      this.routes()
    }
routes(){
    this.app.use(this.paths.empleado, empleadoRouter)
    this.app.use(this.paths.cliente, clienteRouter)
}
middlewares(){
  this.app.use(cors()) 
  this.app.use(express.json()) 
}
listen(){
    this.app.listen(process.env.PORT,() => { 
    console.log("Backend en ejecución en el puerto", process.env.PORT)})
}
}
module.exports = Server