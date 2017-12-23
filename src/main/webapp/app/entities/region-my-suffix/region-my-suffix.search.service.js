(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .factory('RegionSearch', RegionSearch);

    RegionSearch.$inject = ['$resource'];

    function RegionSearch($resource) {
        var resourceUrl =  'api/_search/regions/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
