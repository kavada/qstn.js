requirejs.config({
    baseUrl: 'src/js',
    paths: {
        // libraries
        jQuery: 'libs/jquery.min',
        mask: 'libs/jquery.mask.min',
        ace: 'libs/ace/ace',
        bootstrap: 'libs/bootstrap.min',
        charts: 'libs/charts.min',
        cropper: 'libs/cropper.min',
        geocomplete: 'libs/geocomplete',
        moment: 'libs/moment.min',
        datetimepicker: 'libs/datetimepicker',
        nouislider: 'libs/nouislider',
        messenger: 'libs/messenger',
        qstn: 'libs/qstn',
        progress: 'libs/progressbar.min',
        jSignature: 'libs/jsignature.min',
        sign: 'controller/core/signature',
        searcher: 'libs/searcher',
        calendar: 'libs/fullcalendar.min',
        // controller
        app: 'controller/app',
        // core
        api: 'controller/core/api',
        buildr: 'controller/core/buildr',
        config: 'controller/core/config',
        editor: 'controller/core/editor',
        error: 'controller/core/error',
        page: 'controller/core/page',
        user: 'controller/core/user',
        // default
        main: 'main',
        // pages
        home: 'controller/pages/home',
    },
    shim: {
        'bootstrap': ['jQuery'],
        'sortable': ['jQuery'],
        'mask': ['jQuery'],
        'geocomplete': ['jQuery'],
        'jSignature': ['jQuery'],
        'calendar': ['jQuery','moment']
    }
});