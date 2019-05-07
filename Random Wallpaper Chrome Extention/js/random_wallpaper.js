$(function(){

    //only needed for for logging
    //const log = chrome.extension.getBackgroundPage().console.log;

    //button remains locked until dimension is selected 
    validateDropDown();

    //submit actions
    $('#submitButton').on('click', function() {
        var urlWithUserParams;
        var url = "https://unsplash.it/";

        // Get the dimensions from button click, then split between width and height
        var selectedDimension = $('#dropdownSelection').find(":selected").val();

        // var dimensions = $('input[name=size-stacked]:checked').val();
        var index = selectedDimension.indexOf(" ");  // Gets the first index where a space occours
        var width = selectedDimension.substr(0, index); // Gets the first part
        var height = selectedDimension.substr(index + 1);  // Gets the text part

        // Get the specified color
        var color = $('input[name= color-stacked]:checked').val();

        // Create new URL with the user parameters
        if(color === 'g') {
            urlWithUserParams = url +color+'/'+ width+"/"+height+"/?random";
            //urlWithUserParams = url +color+'/'+ width+"/"+dimensions;
        } else {
            urlWithUserParams = url + width+"/"+height+"/?random";
            //urlWithUserParams = url +dimensions
        }

        // open a new tab to display the photo
        window.open(urlWithUserParams);
    });

});

  function validateDropDown(){
    $("#dropdownSelection").change(function(){
        $("#submitButton").removeAttr("disabled");
    });
 }
 
//TODO Add themes criteria 