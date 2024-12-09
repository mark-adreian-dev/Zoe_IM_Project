const express = require("express")
const router = express.Router()
const { addEmployee, removeEmployee, updateEmployee} = require("../controllers/EmployeeControllers")

router.delete("/delete/:id", removeEmployee)
router.put("/update", updateEmployee)
router.post("/add", addEmployee)

module.exports = router