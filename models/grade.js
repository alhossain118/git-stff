'use strict';

var db = require('../config/db');
//var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS grades (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          assignment TEXT,
          score INTEGER,
          total INTEGER,
          totalPoints INTEGER,
          letterGrade TEXT

        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM grades', cb);
};

exports.create = function(grade, cb) {
  if(!grade.assignment || !grade.score || !grade.total) {
    return cb('Missing required field.')
  }

  // var createdAt = moment().unix();
  // var dueDate = moment(todo.dueDate).unix();

  db.run('INSERT INTO grades (assignment, score, total,totalPoints,letterGrade) VALUES (?, ?, ?, ?, ?)',
    assignment,
    score,
    total,
    totalPoints,
    letterGrade,
    cb);
};
