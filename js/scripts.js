$(function() {
  $("#hello").click(function() {
    $("ul#user").append("<li>Hello</li>");
    $("ul#webpage").append("<li>Hello Muggle!!</li>");
    $("ul#user").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function() {
      $(this).remove();
    });
  });
  $("#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye</li>");
    $("ul#webpage").append("<li>See ya later you muggle!!</li>");
    $("ul#user").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function() {
      $(this).remove();
    });
  });
  $("#stop").click(function() {
    $("ul#user").append("<li>STOP COPYING ME!!!!</li>");
    $("ul#webpage").append("<li>Expeleomus!!!!!</li>");
    $("ul#user").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function() {
      $(this).remove();
    });
  });
  $("#bgColor").click(function() {
    $("body").toggleClass("backgroundColor");
  });
});
