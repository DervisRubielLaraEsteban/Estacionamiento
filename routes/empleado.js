const {Router} = require("express")
const {getempleado, getempleadoporID, deleteempleadoporID, addempleado, updateempleado} = require("../controllers/empleado")
const router = Router()

//http://localhost:4000/api/v1/empleado

//GET
router.get("/", getempleado)
router.get("/ID/:ID", getempleadoporID)

//DELETE
router.delete("/",deleteempleadoporID)

//POST
router.post("/",addempleado)

//PUT
router.put("/",updateempleado)

module.exports = router