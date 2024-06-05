
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = express.Router();
const Project = require('./models/project');
require('dotenv').config();

const port = process.env.PORT || 5000;
// const status = process.env.NODE_ENV === 'projects'
// Connect to the database
mongoose
  .connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use(bodyParser.json());
routes.get('/projects', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  // res.send("<h1>Hello world</h1>");
  console.log("router working");
  // console.log(Project,'project')
  
  console.log(res, "in projects");
  // Project.find({}, 'action')
  //   .then((data) => res.json(data))
  //   .catch(next);
  res.end;
});

routes.post('/projects',(req,res,next)=>{
  res.send(Project);
})
app.use(routes);    
// app.get('/', (req,res)=>{
//   res.send("<h1>hello world</h1>")
// });  
// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});