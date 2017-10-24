$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/wuichia.json',
    dataType: 'jsonp',
    success: function(response) {
      for (i = 0; i < response.courses.completed.length; i++) {
        course = response.courses.completed[i];
        $("#badges").append("<div></div>");
        $("#badges div").addClass("course");
        $(".course").append("<h3>" + course.title + "</h3>");
        $(".course").append("<img src='" + course.badge + "'></img>");
        $(".course").append("<a target='_blank' href='" + course.url + "' class='btn btn-primary'>See Course</a> ");
      }
    }
  });

});
