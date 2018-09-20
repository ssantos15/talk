$(function() {
  $("#hello").click(function() {
    $("ul#user").append("<li>Hello</li>");
    $("ul#webpage").append("<li>Hi there!!</li>");
    $("ul#user").children("li").last().click(function() {
      alert("hi computer");
    });
    $("ul#webpage").children("li").last().click(function() {
      alert("Hello Muggle");
    });
  });
  $("#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye</li>");
    $("ul#webpage").append("<li>See ya later you muggle!!</li>");
  });
  $("#stop").click(function() {
    $("ul#user").append("<li>STOP COPYING ME!!!!</li>");
    $("ul#webpage").append("<li>Shut up hoe!!</li>");
  });

});
