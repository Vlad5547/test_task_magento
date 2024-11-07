console.log('hello world!');

require(["jquery", "owlcarousel"], function($) {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    });
});
