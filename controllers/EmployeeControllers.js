const { db_mysql_con } = require("../db_connection")



const addEmployee = async (req, res) => {

    const firstname = req.body.firstName
    const lastname = req.body.lastName
    const birthdate = req.body.birthdate
    const position = req.body.position
    const salary = req.body.salary
    const dateHired = req.body.dateHired

    const query = `INSERT INTO CCS110FINALPROJECT.employee (first_name, last_name, birth_date, position, salary, date_hired) VALUES("${firstname}", "${lastname}", "${birthdate}", "${position}", ${salary}, "${dateHired}");`
    console.log(query)
   
    db_mysql_con.query(query, (err, result) => {
        
        if(err) console.log(err)
        else res.end()

    })
}

const removeEmployee = async (req, res) => {

    const employeeId = req.params.id
    const query = `DELETE FROM CCS110FINALPROJECT.employee WHERE emp_id = ${employeeId}`
  
    db_mysql_con.query(query, (err, result) => {

        if(err) {
            const deptQuery = `UPDATE CCS110FINALPROJECT.department SET dept_supervisor = NULL WHERE dept_supervisor = ${employeeId}` 
            db_mysql_con.query(deptQuery, (err, result) => {

                if(err) console.log(err)
                else {
                    db_mysql_con.query(query, (err, result) => {

                        if(err) console.log(err)
                        else {
                            res.redirect("/employee")
                        }
                    })
                }
            })
        }
        else {
            res.redirect("/employee")
        }
    })
    
}

const updateEmployee = async (req, res) => {

    const firstname = req.body.firstName
    const lastname = req.body.lastName
    const birthdate = req.body.birthDate
    const position = req.body.position
    const salary = req.body.salary
    const dateHired = req.body.dateHired
    const empId = req.body.empId

    const query = `UPDATE CCS110FINALPROJECT.employee SET first_name = "${firstname}", last_name = "${lastname}", birth_date = "${birthdate}", position = "${position}", salary = ${salary}, date_hired = "${dateHired}" WHERE emp_id = ${empId}`
    db_mysql_con.query(query, (err, result) => {
        if(err) console.log(err)
        else res.end()
        
    })

}

module.exports = {
    addEmployee,
    removeEmployee,
    updateEmployee
}
