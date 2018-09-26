app.controller('mainController', function ($scope) {

    console.log("sethuram")
    $( ".arrow-icon" ).click(function() {
        $(this).toggleClass("open");
    });

    $(function() {
        FastClick.attach(document.body);
    });


});