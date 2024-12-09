const express = require("express")
const router = express.Router()
const {addDepartment, removeDepartment, updateDepartment } = require("../controllers/DepartmentControllers")

router.post("/add", addDepartment)
router.delete("/delete/:id", removeDepartment)
router.put("/update", updateDepartment)

module.exports = router