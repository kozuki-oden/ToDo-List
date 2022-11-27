//dependencies required for the app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//render css files
app.use('/public', express.static('public'));
 
//placeholders for added task
var task = [];
 
//post route for adding new task
app.post('/add_task', (req, res)=> {
    var newTask = req.body.new_task;
    //add the new task from the post route
    task.push(newTask);
    res.redirect('/');
});


//render the ejs and display added task, completed task
app.get('/', (req, res)=> {
    res.render("index", { task: task })
});
 
//set app to listen on port
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    console.log(`Check it out at http://localhost:${port}`)
});