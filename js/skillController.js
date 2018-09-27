(function () {
    if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
            localStorage['firstLoad'] = true;
            window.location.reload();
        }

        else
            localStorage.removeItem('firstLoad');
    }
})();

$(document).ready(function () {
    var zindex = 10;


    $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("d-card-show")) {
            isShowing = true
        }

        if ($("div.dashboard-cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.d-card-show")
                .removeClass("d-card-show");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.dashboard-cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({zIndex: zindex})
                    .addClass("d-card-show");

            }

            zindex++;

        } else {
            // no dashboard-cards in view
            $("div.dashboard-cards")
                .addClass("showing");
            $(this)
                .css({zIndex: zindex})
                .addClass("d-card-show");

            zindex++;
        }

    });

});

$('#exampleModal').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(recipient)
    if (recipient == "Data Analysis Work") {
        modal.find('.pdf').attr("data", 'extras/Data_Analytics.pdf')
    } else if (recipient == "Bayesian Modelling Work") {
        modal.find('.pdf').attr("data", 'extras/Bayesian_ Modelling.pdf')
    } else if (recipient == "Data visulaization Work") {
        modal.find('.pdf').attr("data", 'extras/visualization.pdf')

    } else if (recipient == "Sentiment Analysis Work") {
        modal.find('.pdf').attr("data", 'extras/sentiment.pdf')
    } else if (recipient == "Information Retrieval Work") {
        modal.find('.pdf').attr("data", 'extras/Information_Retrieval.pdf')
    }


});
