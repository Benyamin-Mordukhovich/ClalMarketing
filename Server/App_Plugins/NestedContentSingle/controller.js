angular.module("umbraco").controller("My.NestedContentSingle", [
  "$scope",
  "contentResource",
  function(
    $scope,
    contentResource
  ) {
    var contentType = $scope.model.config.contentType;

    contentResource
      .getScaffold(-20, contentType.dockType)
      .then(function(scaffold) {
        $scope.tab = scaffold.tabs.find(t => t.alias === contentType.tab);
        $scope.tab.properties.forEach(function(prop) {
          if ($scope.model && $scope.model.value[prop.alias]) {
            prop.value = $scope.model.value[prop.alias];
          }
        });
      });

    var updateModel = function() {
      var value = $scope.tab.properties
        .map(function(prop) {
          return { key: prop.alias, value: prop.value };
        })
        .reduce(function(acc, item) {
          acc[item.key] = item.value;
          return acc;
        }, {});

      console.log(value);
      $scope.model.value = value;
    };
    var unsubscribe = $scope.$on("formSubmitting", function(ev, args) {
      updateModel();
    });
    $scope.$on("$destroy", function() {
      unsubscribe();
    });
  }
]);

angular.module("umbraco").controller("My.NestedContentSingle.DocTypePickerController", [
    "$scope",
    "Umbraco.PropertyEditors.NestedContent.Resources",
    function($scope, ncResources) {
      $scope.docTypeTabs = {};
      ncResources.getContentTypes().then(function(docTypes) {
        $scope.model.docTypes = docTypes;
        // Populate document type tab dictionary
        docTypes.forEach(function(value) {
          $scope.docTypeTabs[value.alias] = value.tabs;
        });
      });
      if (!$scope.model.value) {
        $scope.model.value = { dockType: "" };
      }
    }
  ]);
