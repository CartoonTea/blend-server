angular
  .module('blend-web')
  .controller('AuthCtrl', function ($scope, client_id) {

    $scope.params = {
      public: '?scope=public_repo&client_id=' + client_id,
      all: '?scope=repo&client_id=' + client_id
    };

  });