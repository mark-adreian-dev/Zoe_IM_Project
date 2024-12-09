const express = require("express")
const router = express.Router()
const { editTask, deleteTask, addTask } = require("../controllers/TaskControllers")

router.put("/update", editTask)
router.delete("/delete/:id", deleteTask)
router.post ("/add", addTask)


module.exports = router