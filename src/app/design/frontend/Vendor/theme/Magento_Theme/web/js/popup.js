require(["jquery"], function($) {
    $(document).ready(function() {

        // Открытие и закрытие попапа
        var modal = $('#myPopup');
        var btn = $('#openPopup');
        var span = $('.close');

        btn.on('click', function() {
            modal.show();
        });

        span.on('click', function() {
            modal.hide();
        });

        $(window).on('click', function(event) {
            if ($(event.target).is(modal)) {
                modal.hide();
            }
        });
    });
});