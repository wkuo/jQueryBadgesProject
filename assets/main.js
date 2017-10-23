$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/wuichia.json',
    dataType: 'jsonp',
    success: function(response) {
      for (i = 0; i < response.courses.completed.length; i++) {
        $("#badges").append("<div class='course'>"+ response.courses.completed[i] +"</div>");
    }
  });

});
