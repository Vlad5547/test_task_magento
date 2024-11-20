var config = {
    paths: {
        'owlcarousel': "Magento_Theme/js/owl.carousel.min",
        'customScript': "Magento_Theme/js/custom",
        'tabsScript': "Magento_Theme/js/tabs_script",
        'popupScript': "Magento_Theme/js/popup"
    },
    shim: {
        'owlcarousel': {
            deps: ['jquery']
        },
        'customScript': {
            deps: ['jquery']
        },
        'tabsScript': {
            deps: ['jquery']
        },
        'popupScript': {
            deps: ['jquery']
        },
    }
};