const express = require("express");
const router = express.Router()
const { addProject, removeProject, editProject } = require("../controllers/ProjectController")

router.post("/add", addProject)
router.delete("/delete", removeProject)
router.put("/update", editProject)

module.exports = router