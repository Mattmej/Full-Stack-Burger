// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // When pressing the "eat" burger
  $(".eatBurger").on("click", function(event) {
    var id = $(this).data("id");
    var update = {
      eaten: true
    };

    // Ajax request to path "/api/burgers/:id"
    // Updates the "eaten" value of a burger to "true"
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

      // Burger to be added to "burgers to eat" list
      var newBurger = {
          burger_type: $("#burger-box").val().trim()
      };

      // Ajax POST request to path "/api/burgers"
      // Adds the new burger to the database.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      })
      .then(function() {
          console.log("New Burger Added!");

          // Reloads the page
          location.reload();
      });
  });
});
  