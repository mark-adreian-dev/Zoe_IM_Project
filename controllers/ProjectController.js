const { db_mysql_con } = require("../db_connection")


const addProject = async (req, res) => {
    const projectName = req.body.projectName
    const startDate = req.body.startDate
    const endDate = req.body.endDate

    const query = `INSERT INTO CCS110FINALPROJECT.project (proj_name, start_date, end_date) VALUES ("${projectName}", "${startDate}", "${endDate}")`

    db_mysql_con.query(query, (err, result) => {
        if(err) console.log(err)
        else res.end()
    })
}

const removeProject = async (req, res) => {
    const projId = req.body.projId

    const queryProject = `DELETE FROM CCS110FINALPROJECT.project WHERE proj_id = ${projId}`
    const queryTask = `DELETE FROM CCS110FINALPROJECT.task WHERE proj_id = ${projId}`


    db_mysql_con.query(queryTask, (err, taskResult) => {
        
        if(err) console.log(err)
        else db_mysql_con.query(queryProject, (err, projResult) => {
            if(err) console.log(err)
            else res.end()
        }) 
    })
}

const editProject = async (req, res) => {
    const projName = req.body.projectName
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const projId = req.body.projId

    const query = `UPDATE CCS110FINALPROJECT.project SET proj_name="${projName}", start_date="${startDate}", end_date = "${endDate}" WHERE proj_id = ${projId}`

    db_mysql_con.query(query, (err, result) => {
        if (err) console.log(err)
        else res.end()
    })
}



module.exports = {
    addProject,
    removeProject,
    editProject
  
}