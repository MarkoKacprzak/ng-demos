app.directive('ngDatePicker', function() {
    //  console.log('directive: ngDatePicker');
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            $(function() {
                element.datepicker({
                    changeYear: false,
                    changeMonth: false,
                    showWeek: true,
                    firstDay: 1,
                    // dayNames: "pl",
                    dateFormat: 'dd/m/yy',
                    onSelect: function(date) {
                        scope.$apply(function() {
                            ngModelCtrl.$setViewValue(date);
                            //ngModelCtrl.$render();
                        });
                    }
                });
            });
        }
    };
});