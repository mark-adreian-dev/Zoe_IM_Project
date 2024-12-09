const { db_mysql_con } = require("../db_connection")



const addDepartment = async (req, res) => {

    const deptName = req.body.dept_name
    const deptSupervisor = req.body.dept_supervisor
    const dateEst = req.body.date_est
 
    console.log(typeof(deptSupervisor))
    console.log(req.body)
    const query = `INSERT INTO CCS110FINALPROJECT.department (dept_name, dept_supervisor, date_establised) VALUES("${deptName}", ${deptSupervisor == "NULL" ? null : deptSupervisor}, "${dateEst}")`
    db_mysql_con.query(query, (err, result) => {
       
        if(err) console.log(err)
        else res.end()
    
    })
}


const removeDepartment = async (req, res) => {

    const deptId = req.params.id
    const query = `DELETE FROM CCS110FINALPROJECT.department WHERE dept_id = ${deptId}`
  
    db_mysql_con.query(query, (err, result) => {

        if(err) console.log(err)
        else res.end()
        
    })
    
}


const updateDepartment = async (req, res) => {

    const deptName = req.body.deptName
    const supervisor = req.body.supervisor
    const deptId = req.body.deptId
    

    console.log(req.body)
 
    const query = `UPDATE CCS110FINALPROJECT.department SET dept_name = "${deptName}", dept_supervisor = ${supervisor == "Employee" ? null : supervisor} WHERE dept_id = ${deptId}`
    db_mysql_con.query(query, (err, result) => {

        if(err) console.log(err)
        else res.end()
    
    })
}


module.exports = {
    addDepartment,
    removeDepartment,
    updateDepartment
}