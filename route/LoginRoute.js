const express = require("express")
const router = express.Router()
const { db_mysql_con } = require("../db_connection")


router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const query = `SELECT * FROM CCS110FINALPROJECT.accounts;`
    db_mysql_con.query(query, (err, result) => {
        let isAccountFound = false
        let id;
        result.forEach(account => {
            if(account.username == username && account.acc_password == password){
                isAccountFound = true 
                id = account.account_id
                return   
            } 
        })

        if(isAccountFound) {
            res.send({
                isAllowed: true,
                message: "login",
                accountId: id
            })


        } else {
            res.send({
                isAllowed: false,
                message: "no account found"

            })
        }

    })
})

module.exports = router;