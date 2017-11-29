$(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var desc = $("#desc").val();
    var date = $("#date").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    // var confirmation = ("Thank you for booking your apt!" + name + ". Here is your appointment info: " + " " + desc + ' ');
    // $("#test").text(confirmation);

    if (($("#name").val() != "" ) && ($("#desc").val() != "" ) && ($("#date").val() != "" ) && ($("#startTime").val() != "" ) && ($("#endTime").val() != "" )) {
      window.location = "confirmation.html";
    }
  });

  $(".name").text($("form").find('input#name').val());

});
