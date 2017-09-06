const express = require('express');
const router = express.Router();

const model = require('../model/task')();

router.get('/', (req,resp)=>{
  model.find({},(err, tasks)=>{
    if (err) throw err;
    resp.render('index',{
      author: "Jhovany",
      tasks: tasks
    })
  })
});

router.post('/add', (req, resp)=>{
  let body = req.body;
  body.status = false;

  model.create(body,(err,task)=>{
    if (err) throw err;
    resp.redirect('/');
  });
});

router.get('/turn/:id',(req,resp)=>{
  let id = req.params.id;
  model.findById(id,(err, task)=>{
    if (err) throw err;
    task.status = !task.status;
    task.save()
    .then(()=> resp.redirect('/'))
  });
});

router.get('/delete/:id',(req,resp)=>{
  let id = req.params.id;
  model.remove({_id:id}, (err,task)=>{
    if(err) throw err;
    resp.redirect('/');
  });
});

module.exports = router;
