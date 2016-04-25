'use strict';


$(()=>{

  $('.newGrade').click(openNewGradeModal);
  $('form.newTodoForm').submit(createNewGrade);
});

function createNewGrade(e) {
  e.preventDefault();

  var newGrade = {
    assignment: $('#newGradeAssignment').val(),
    score: $('#newGradeScore').val(),
    total: $('#newGradeTotalPoints').val(),

  };

  $('#newGradeAssignment').val('');
  $('#newGradeScore').val('');
  $('#newGradeTotalPoints').val('');

  $.post('/api/grades', newGrade)
    .done(() => {
      // rerender the DOM
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function openNewGradeModal() {
  $('.modal').modal('show');
}
