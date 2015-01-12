angular
  .module('blend-web')
  .controller('RepoCtrl', function ($scope, $http) {

    var httpParams = {
      method: 'GET',
      url: '/api/repos'
    };

    $http(httpParams)
      .success(function (data) {
        $scope.repos = data;
        console.log(data);
      })
      .error(function (data) {

      });

  });