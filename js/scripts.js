$(document).ready(function() {
  $("form#iceCream").submit(function(event) {
    event.preventDefault();
    const flavor1 = $("input#flavor1").val();
    const flavor2 = $("input#flavor2").val();
    const flavor3 = $("input#flavor3").val();
    const flavorArray = [flavor1, flavor2, flavor3];
    let bestArray = flavorArray.slice(0,1);
    let otherArray = flavorArray.slice(1);

    bestArray.forEach(function(type) {
      $("#flavorArray").append("My favorite is " + type + ". ")
    });

    otherArray.forEach(function(type) {
      $("#flavorArray").append("I like " + type + ". ");
    });
  });
})