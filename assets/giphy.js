

//array to populate with gifs that are produced by buttons
var gifArr = ["", "", "", ""]

//GIPHY API key
oGlvXRxAhTzT5AEI9iTj5u01ym4pJucY


//AJAX call
$.ajax{
    url: queryURL,
    method: "GET"
}).then(function(response){

});
//on-click function to animate and freeze gifs
$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
         if (state === "still") {
         $(this).attr("src", $(this).attr("data-animate"));
         $(this).attr("data-state", "animate");
         } else {
         $(this).attr("src", $(this).attr("data-still"));
         $(this).attr("data-state", "still");
         });

