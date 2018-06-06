$(function() {
    $(".eatBurger").on("click", function(event) {
        var id = $(this).data("id");

        // DELETE request
        $.ajax("api/burgers")
    })
})