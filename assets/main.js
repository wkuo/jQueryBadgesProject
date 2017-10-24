$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/wuichia.json',
    dataType: 'jsonp',
    success: function(response) {
      for (i = 0; i < response.courses.completed.length; i++) {
        $("#badges").append("<div></div>");
        $("#badges div").addClass("course");
        $(".course").append("<h3>"+ response.courses.completed[i].title +"</h3>");
      }
    }
  });

});
