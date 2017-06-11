(function(){
'use-strict'

angular.module('myLunch', [])

.controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
  $scope.items = '';
  $scope.msg = '';
    $scope.checkLunch = function(){
      var item = $scope.items;
      if (item != ""){
      var items = item.split(',');
      if (items.length > 3){
        $scope.msg = "Too much!";
      } else {
        $scope.msg = "Enjoy!";
      }
    } else {
        $scope.msg = "Please enter data first";
    }
  }
}
})();
