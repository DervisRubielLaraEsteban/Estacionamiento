const {Router} = require("express")
const {getcliente, getclienteporID, updatecliente, addcliente} = require("../controllers/cliente")
const router = Router()

//http://localhost:4000/api/v1/cliente

//GET
router.get("/", getcliente)

router.get("/id/:id", getclienteporID)

//POST
router.post("/",addcliente)

//PUT
router.put("/",updatecliente)

module.exports = router