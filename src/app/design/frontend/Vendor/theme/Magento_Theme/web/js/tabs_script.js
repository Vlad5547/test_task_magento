require(["jquery"], function($) {
    $(document).ready(function() {
        // Переключение вкладок
        $('.tab-button').on('click', function(e) {
            e.preventDefault();
            
            $('.tab-button').removeClass('current');
            $('.tab-content').removeClass('active').hide();
            
            $(this).addClass('current');
            const contentId = $(this).find('a').attr('href');
            $(contentId).addClass('active').show();
        });
    });
});