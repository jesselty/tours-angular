'use strict';

/**
 * @ngdoc service
 * @name myAppApp.detailsData
 * @description
 * # detailsData
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
    .factory('detailsData', ['CONSTANTS',
        function(CONSTANTS) {
            var details = {
                'packages': [],
                'noOfTravellersSelected': {},
                'selectPackages': {
                    'isOpen': false,
                    'details': {}
                },
                'datePicker': {
                    'format': CONSTANTS.DATE_FORMAT,
                    'regexCheck': CONSTANTS.DATE_REGEX,
                    'isOpen': false,
                    'date': "",
                    'options': {
                        // dateDisabled: disabled,
                        formatYear: 'yy',
                        maxDate: new Date(2016, 4, 2),
                        minDate: new Date(),
                        startingDay: 1,
                        showWeeks: false
                    },
                    'showButtonBar': false
                },
                'checkoutBlock': {
                    'isCollapsed': false
                }
            };

            // Disable weekend selection
            // function disabled(data) {
            //     var date = data.date,
            //         mode = data.mode;
            //     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            // }

            return details;
        }
    ]);
