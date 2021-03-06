(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('AuditsService', AuditsService);

    AuditsService.$inject = ['$resource'];

    function AuditsService ($resource) {
        var service = $resource(SERVER_URL + 'management/jhipster/audits/:id', {}, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'query': {
                method: 'GET',
                isArray: true,
                params: {fromDate: null, toDate: null}
            }
        });

        return service;
    }
})();
