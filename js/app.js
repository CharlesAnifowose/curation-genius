'use strict';

var module;


// App


// Declare app level module which depends on views, and components
module = angular.module('app', [
    'cfp.hotkeys'
  , 'app.main'
]);



  module = angular.module('app.main', [])
  
  module.config(function(hotkeysProvider) {
  })

  module.controller('MainCtrl', ['$scope', 'hotkeys', function($scope, hotkeys) {
  	
    var scope = $scope;

    scope.breadcrumbs = [];

    var init = function(){
      
      scope.selectQuestionById('start');

    }

    // hotkeys 

    var initHotkey = function(){


      hotkeys.add({
        combo: 'esc',
        allowIn: hotkeyElementWhitelist,
        callback: function() {
          document.activeElement.blur()
        }
      });

      hotkeys.add({
        combo: 'ctrl+enter',
        allowIn: hotkeyElementWhitelist,
        callback: function() {
          renderNewDOM();
        }
      });

      hotkeys.add({
        combo: 'alt+n',
        allowIn: hotkeyElementWhitelist,
        callback: function() {
          scope.addNewBlock()
        }
      });

    }


    var block;

    scope.selectQuestionById = function(questionId){
      scope.activeQuestion = questions[questionId];
      scope.activeQuestion.id = questionId; // 02083490 dangerous, what about alternate paths?
      scope.activeBook = null;
    }

    scope.openBreadcrumb = function(question, i){
      scope.breadcrumbs.splice(i)
      scope.selectQuestionById(question.id) // 02083490
    }

    scope.openDestination = function(currentQuestion, answer){
      
      scope.breadcrumbs.push(currentQuestion);
      currentQuestion.lastSelection = answer.main
      
      if (answer.destination.type == 'question'){
        scope.selectQuestionById(answer.destination.id);
      }
      else if (answer.destination.type == 'book'){
        scope.activeBook = books[answer.destination.id]
      }
      else{
        console.error('unrecognized type:', answer.destination)
      }
    }

    init();

  }]);


  module.directive('testDirective', ['$log', function($log) {
    return {
      restrict: 'A',
      link: function (scope, elm, attrs) {
        
      }
    }
  }]);

