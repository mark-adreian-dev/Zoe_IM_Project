const { db_mysql_con } = require("../db_connection")

const addTask =  async (req, res) => {
    const taskDesc = req.body.taskDesc
    const endDate = req.body.endDate
    const projId = req.body.projId

    const query = `INSERT INTO CCS110FINALPROJECT.task (proj_id, task_desc, end_date) VALUES (${projId}, "${taskDesc}", "${endDate}")`

    db_mysql_con.query(query, (err, result) => {
        if(err) console.log( err)
        else res.end()
    })
}

const editTask = async (req, res) => {

    const taskDesc = req.body.taskDesc
    const endDate = req.body.endDate
    const id = req.body.taskId

    const query = `UPDATE CCS110FINALPROJECT.task SET task_desc = "${taskDesc}", end_date = "${endDate}" WHERE task_id = ${id};`
    db_mysql_con.query(query, (err, results) => {
        if (err) console.log(err)
        else res.end()
    })
}

const deleteTask = async (req, res) => {
    const taskId = req.params.id
    const query = `DELETE FROM CCS110FINALPROJECT.task WHERE task_id = ${taskId} `

    db_mysql_con.query(query, (err, result) => {

        if(err) console.log(err)
        else res.end()
    
    })
}

module.exports = {
    editTask,
    deleteTask,
    addTask
    
}