'use strict';

var express = require('express');
var router = express.Router();

var moment = require('moment');
var Grade = require('../models/grade');

//  GET /
router.get('/', (req, res) => {
  Grade.get((err, todos) => {
    if(err) {
      res.render('error', {error: err})
    } else {

      todos = todos.map(todo => {
        todo.dueDate = moment(todo.dueDate, 'X').format('l');
        todo.createdAt = moment(todo.createdAt, 'X').format('l');
        return todo;
      })

      res.render('home', {todos: todos});
    }
  })
})

module.exports = router;
