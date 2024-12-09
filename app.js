//Dependencies
const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const cookieParser = require('cookie-parser')

//Routes
const PageRoutes = require('./route/PageRoutes')
const EmployeeRouter = require('./route/EmployeeRoutes')
const DepartmentRouter = require('./route/DepartmentRoutes')
const TaskRouter = require('./route/TaskRoutes')
const ProjectRouter = require('./route/ProjectRoutes')
const LoginRouter = require('./route/LoginRoute')

//Express Setup
const app = express()
app.use(cookieParser())
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Configuring ports
const PORT = process.env.PORT || 3000


//Top level routing system

app.use("/", PageRoutes)
app.use("/manage/employee", EmployeeRouter)
app.use("/manage/department", DepartmentRouter)
app.use("/manage/projects", ProjectRouter)
app.use("/manage/task", TaskRouter)
app.use("/manage/account", LoginRouter)

//Running Server
app.listen(PORT, (err) => {
    if(err) console.log(err)
    else console.log(`The server is running on PORT:${PORT}`)
})

