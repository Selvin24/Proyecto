app.directive("installApp", function(){
    return { 
        restrict: 'E', 
        scope: { 
          
        }, 
        templateUrl: 'Js/directive/installApp.html',
        link: function(scope, element, attrs) { 
        scope.buttonText = "Agregar al carrito", 
        scope.agregar = false, 


        scope.download = function() { 
        element.toggleClass('btn-active'); 
        if(scope.installed) { 
            scope.buttonText = "Agregado"; 
            scope.installed = false; 
        } else { 
            scope.buttonText = "Agregar al carrito"; 
            scope.installed = true; 
        } 
        }
    }
      };
})