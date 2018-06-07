$(document).ready(function() {

    // $(document).on("click", "button.eatBurger", eatBurger(event));
    $(".eatBurger").on("click", eatBurger(event));


    function eatBurger(event) {
        // event.stopPropagation();
        var id = $(this).data("id");

        // // Takes the info from the text box and places it 
        // // in the burger list.
        // var eatenBurger = {
        //     burger_type: $("#burger-box").val().trim()
        // };

        // var eatenBurger = {
        //     burger_type: $(this).data("burger_type")
        // };

        // Deletes the burger from the "burgers" table
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
            // url: "/api/burgers/" + id
        })
        .then(function() {

            // Adds the burger to the "eaten_burgers" table
            // $.ajax({
            //     method: "POST",
            //     // data: eatenBurger,
            //     // data: "/api/burgers" + id,
            //     data: eatenBurger;
            //     url: "/api/burgers"
            // })
            // .then(function() {
            //     console.log("Ate the burger!");
            //     location.reload();
            // })


            console.log("Deleted ID: " + id);
            location.reload();
        });
    };








});









// $(function() {
//     $(".eatBurger").on("click", function(event) {
//         var id = $(this).data("id");

//         // DELETE request
//         $.ajax({
//             method: "DELETE",
//             url: "/api/burgers" + id
//         }
//     })
// })