// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatBurger").on("click", function(event) {
      var id = $(this).data("id");
      var eatenBurger = $(this).data("burger_type");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted id ", id);
          // Reload the page to get the updated list
          // location.reload();
          finishEat(eatenBurger);
        }
      );
    });

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
    
    function finishEat(eatenBurger) {



      $.ajax("/api/eaten_burgers", {
        type: "POST",
        data: eatenBurger
      })
      .then(function() {
        console.log("Burger Eaten!");
        location.reload();
      })
    }
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newQuote = {
    //     author: $("#auth").val().trim(),
    //     quote: $("#quo").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/quotes", {
    //     type: "POST",
    //     data: newQuote
    //   }).then(
    //     function() {
    //       console.log("created new quote");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    // $(".update-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var updatedQuote = {
    //     author: $("#auth").val().trim(),
    //     quote: $("#quo").val().trim()
    //   };
  
    //   var id = $(this).data("id");
  
    //   // Send the POST request.
    //   $.ajax("/api/quotes/" + id, {
    //     type: "PUT",
    //     data: updatedQuote
    //   }).then(
    //     function() {
    //       console.log("updated quote");
    //       // Reload the page to get the updated list
    //       location.assign("/");
    //     }
    //   );
    // });
  });
  