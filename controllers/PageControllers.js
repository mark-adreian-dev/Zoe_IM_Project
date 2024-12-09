const { db_mysql_con } = require("../db_connection")


/*

  Employee page routing section 
  which includes but not limited to:

  1. Main page for dispalying employees ==> employees()
  2. Edit employee page ==> editEmployee()
  3. Adding employees page ==> addEmployee()
 
 */


//Employees main page
const employees = async (req, res) => {

    const query = `SELECT * FROM  CCS110FINALPROJECT.employee;`

    db_mysql_con.query(query, (err, result) => {

        if(err) console.log(err)
        else res.render('employee/employees', { data: result})

    })

}

//Editing employees page
const editEmployee = async (req, res) => {

    const employeeId = req.params.id
    const query = `SELECT * FROM CCS110FINALPROJECT.employee WHERE emp_id = ${employeeId};`

    db_mysql_con.query(query, (err, result) => {

        if(err) console.log(err)
        else res.render('employee/editEmployee', { employee: result[0] })

    })

}

//Adding new employees page
const addEmployee = async (req, res) => {
    
    res.render('employee/addEmployee')

}


/*

  Department page routing section 
  which includes but not limited to:

  1. Main page for dispalying departments ==> deparment()
  2. Edit department page ==> editDeparment() 
  3. Adding department page ==> addDeparment()
 
 */


//Department main page
const department = async (req, res) => {

    const query = `SELECT * FROM  CCS110FINALPROJECT.department;`

    db_mysql_con.query(query, (err, result) => {
    
        if(err) console.log(err)
        else res.render('department/department', { data: result })

    })

}


//Edit department page
const editDepartment = async (req, res) => {
    const deptId = req.params.id
    const query = `SELECT * FROM CCS110FINALPROJECT.department WHERE dept_id = ${deptId};`
    db_mysql_con.query(query, (err, deptData) => {

        if(err) console.log(err)
        else {

            const query = `SELECT * FROM CCS110FINALPROJECT.employee`
            db_mysql_con.query(query, (err, employees) => {

                if(err) console.log(err)
                else {
                  
                    res.render('department/editDepartment', { 
                        data: {
                            department: deptData,
                            employees: employees
                        }
                    })
                }
            })   
        }
    })

}


//Adding department page
const addDepartment = async (req, res) => {
    const query = `SELECT * FROM CCS110FINALPROJECT.employee`

    db_mysql_con.query(query, (err, result) => {
        if(err) console.log(err)
        res.render('department/addDepartment', {data: result})
    })

}





/*

  Project page routing section 
  which includes but not limited to:

  1. Main page for dispalying tasks per project ==> project()
  2. Edit project page ==> editProject() 
  3. Adding project page ==> addProject()
 
 */


//Project main page
const project = async (req, res) => {

    const query = `SELECT * FROM  CCS110FINALPROJECT.project;`
    db_mysql_con.query(query, (err, result) => {

        if(err) console.log(err)
        else  res.render('projects/project', { data: result })
        
    })

}

//Adding project page
const addProject = async (req, res) => {

    res.render("projects/addProject")

    
}

//Edit project page
const editProject = async (req, res) => {
    const projId = req.params.projid

    const query = `SELECT * FROM CCS110FINALPROJECT.project WHERE proj_id = ${projId}`

    db_mysql_con.query(query, (err, result) => {
        if(err) console.log(err)
        else  {
            console.log(result[0])
            res.render("projects/editProject", { data: result[0] }) 
        }
    })
}



/*

  Task per project page routing section 
  which includes but not limited to:

  1. Main page for dispalying tasks per project ==> task()
  2. Edit task page ==> editTask() 
  3. Adding task page ==> addTask()
 
 */

//Main page for task per project
const task = async (req, res) => {
    const project_id = req.params.proj_id
    const taskQuery = `SELECT * FROM  CCS110FINALPROJECT.task WHERE proj_id = ${project_id};`
    db_mysql_con.query(taskQuery, (taskErr, taskResult) => {

        if(taskErr) console.log(taskErr)
        else {

            const projectQuery = `SELECT * FROM  CCS110FINALPROJECT.project WHERE proj_id = ${project_id};`
            db_mysql_con.query(projectQuery, (err, projectResult) => {
                if(err) console.log(err)

                else res.render('tasks/task', { 
                    tasks: taskResult,
                    project:  projectResult[0]
                })
                res.end()
            })
        } 
    })
}

const editTask = async (req, res) => {
    const taskId = req.params.task_id
    const query = `SELECT * FROM  CCS110FINALPROJECT.task WHERE task_id = ${taskId}`


    db_mysql_con.query(query, (err, result) => {
        if(err) console.log(err)
        else res.render("tasks/editTask", {data: result[0]})
    })
}

const addTask = async (req, res) => {
    const proj_id = req.params.proj_id
    const query = `SELECT * FROM CCS110FINALPROJECT.project WHERE proj_id = ${proj_id}`

    db_mysql_con.query(query, (err, result) => {
        if(err) console.log(err)
        else  res.render("tasks/addTask", {data: result[0]})
    })
    
}






module.exports = {
    employees,
    editEmployee,
    addEmployee,

    department,
    editDepartment,
    addDepartment,
    
    project,
    addProject,
    editProject,

    task,
    addTask,
    editTask
}