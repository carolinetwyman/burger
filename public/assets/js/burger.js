// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#inputBurger").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("made new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devouredState = $(this).data("devoured");
  
    var truthy = 0 
    if (devouredState === 1){
        truthy = 0;
    }
    if (devouredState === 0){
        truthy = 1;
    }
      var newDevouredState = {
        devoured: truthy
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  })
  