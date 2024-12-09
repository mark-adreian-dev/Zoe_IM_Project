const express = require('express')
const router = express.Router();

const { 

    department, addDepartment, editDepartment, 
    employees,  editEmployee, addEmployee,  
    project, addProject, editProject,
    task, editTask, addTask,


} = require('../controllers/PageControllers');



//Onboardding users to department page
router.get("/", (req, res) => {
    res.render('login')
})

//Routes for department
router.get("/department", department)
router.get("/department/add", addDepartment)
router.get("/edit/department/:id", editDepartment)

//Routes for employee
router.get("/employee", employees)
router.get("/employee/add", addEmployee)
router.get("/edit/employee/:id", editEmployee)

//Routes for project
router.get("/project", project)
router.get("/project/add", addProject)
router.get("/edit/project/:projid", editProject)

//Routes for task per project
router.get("/task/:proj_id", task)
router.get("/edit/task/:task_id", editTask)
router.get("/add/task/:proj_id", addTask)


module.exports = router