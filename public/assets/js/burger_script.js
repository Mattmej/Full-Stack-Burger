// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // When pressing the "eat" burger
  $(".eatBurger").on("click", function(event) {
    var id = $(this).data("id");
    var update = {
      eaten: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: update
    }).then(function() {

      // reloads the page to get the updated list
      location.assign("/");
    });

  });

  // When pressing the "submit" button after filling out the text form
  $("#new-burger").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
          burger_type: $("#burger-box").val().trim()
      };

      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      })
      .then(function() {
          console.log("New Burger Added!");
          location.reload();
      });
  });
});
  