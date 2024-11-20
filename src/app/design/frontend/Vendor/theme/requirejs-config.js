var config = {
    paths: {
        'owlcarousel': "Magento_Theme/js/owl.carousel.min",
        'customScript': "Magento_Theme/js/custom"
    },
    shim: {
        'owlcarousel': {
            deps: ['jquery']
        },
        'customScript': {
            deps: ['jquery']
        }
    }
};