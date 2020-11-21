app.directive("categoriaApp", function(){
    return { 
        restrict: 'E', 
        scope: { 
          
        }, 
        templateUrl: 'js/temple/categoria.html',
        link: function(scope, element, attrs) {       
      
      scope.vuelos=[
        {
          destino:'New York',
          costo:'12,381',
        },
        {
          destino:'Moscow',
          costo:'47,186',
        },
        {
          destino:'Berlin',
          costo:'33,293',
        },
        {
          destino:'Miami',
          costo:'15,254',
        },
        {
          destino:'Los Angeles',
          costo:'12,819',
        },
        {
          destino:'London',
          costo:'15,926',
        },
        {
          destino:'Paris',
          costo:'14,268',
        },
        {
          destino:'Orlando',
          costo:'14,774',
        },
        {
          destino:'Cancun',
          costo:'19,141',
        },
        {
          destino:'Madrid',
          costo:'31,742',
        },
        {
          destino:'Medellín',
          costo:'15,574',
        },
        {
          destino:'Houston',
          costo:'13,907',
        },
        {
          destino:'Marruecos',
          costo:'77,284',
        },
        {
          destino:'Barcelona',
          costo:'30,176',
        },        
        {
          destino:'Taipei',
          costo:'42,840',
        },
        {
          destino:'Dubai',
          costo:'43,751',
        },
        {
          destino:'Seattle',
          costo:'20,710',
        },
        {
          destino:'Munich',
          costo:'32,323',
        },
      ]
    }
      };
})