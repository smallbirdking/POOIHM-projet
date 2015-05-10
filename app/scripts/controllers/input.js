'use strict';


angular.module('projectIhmApp')
  .controller('InputCtrl', function($scope, $http) {
    $scope.users = [];
    $scope.totalUsers = 0;
    $scope.usersPerPage = 25; // this should match however many results your API puts on one page
    getResultsPage(1);

    $scope.pagination = {
      current: 1
    };

    $scope.pageChanged = function(newPage) {
      getResultsPage(newPage);
    };

    function getResultsPage(pageNumber) {
      // this is just an example, in reality this stuff should be in a service
      $http.get('http://localhost:3000/api/Projects/' + pageNumber)
        .then(function(result) {
          $scope.users = result.data.Items;
          $scope.totalUsers = result.data.Count
        });
    }
  });

/*  .service('notesService', function () {
    var data = [
      {id:1, title:'Note 1' , contents: 'kkkkk'},
      {id:2, title:'Note 2', contents: 'pppp'}
    ];



    return {
      notes:function () {
        return data;
      },
      addNote:function (noteTitle,noteTitleName) {
        var currentIndex = data.length + 1;
        data.push({
          id:currentIndex, title:noteTitle , contents: noteTitleName
        });

      },
      deleteNote:function (id) {
        var oldNotes = data;
        data = [];

        angular.forEach(oldNotes, function (note) {
          if (note.id !== id) data.push(note);
        });
      }
    };
  })
  .directive('myNotebook', function () {
    return {
      restrict:"E",
      scope:{
        notes:'=',
        ondelete:'&'
      },
      templateUrl:"partials/notebook-directive.html",
      controller:function ($scope, $attrs) {
        $scope.deleteNote = function (id) {
          $scope.ondelete({id:id});
        }
      }
    };
  })
  .directive('myNote', function () {
    return {
      restrict:'E',
      scope:{
        delete:'&',
        note:'=',
        titile:'='
      },
      link:function (scope, element, attrs) {
        var $el = $(element);

        $el.hide().fadeIn('slow');

        $('.thumbnails').sortable({
          placeholder:"ui-state-highlight", forcePlaceholderSize:true
        });
      }
    };
  })

  .controller('InputCtrl', ['$scope', 'notesService', function ($scope, notesService) {
    $scope.getNotes = function () {
      return notesService.notes();
    };

    $scope.addNote = function (noteTitle,noteTitleName) {
      if(noteTitle != ''||noteTitleName!= '') {
        notesService.addNote(noteTitle,noteTitleName);
      }
    };



    $scope.deleteNote = function (id) {
      notesService.deleteNote(id);
    };

    $scope.resetForm = function() {
      $scope.noteTitle = '';
      $scope.noteTitleName = '';

    };
  }]);

function AutoGrowTextArea(textField)
{
  if (textField.clientHeight < textField.scrollHeight)
  {
    textField.style.height = textField.scrollHeight + "px";
    if (textField.clientHeight < textField.scrollHeight)
    {
      textField.style.height =
        (textField.scrollHeight * 2 - textField.clientHeight) + "px";
    }
  }
}

*/
