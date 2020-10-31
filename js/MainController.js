app.controller('MainController', ['$scope', function($scope) { 
  
    $scope.brig = [
        { 
          name: 'Golden Gate Bridge', 
          descrption: 'El Golden Gate (en español, Puerta Dorada) es un puente colgante situado en Estados Unidos, California, que une la península de San Francisco por el norte con el sur del condado de Marin, cerca de Sausalito. Golden Gate es también el nombre del estrecho en el cual el puente está construido, y recibe su nombre del estrecho en Constantinopla, llamado también la Puerta Dorada, ya que comunicaba Europa con Asia.',
          pubdate: new Date('1993', '0', '05'), 
          foto: './img/bridge.jpg',
          foto2: './img/bridge.jpg',
          foto3: './img/bridge.jpg',
          location:'Golden Gate Bridge, San Francisco, CA, Estados Unidos.',
          location2:'',
          longest:'900mt',
          highest:'500mt',
          oldest:'1956',
          capacity:'35tn',
          readmore:'Leer Más ->',
        }, 
        { 
          name: 'Golden Gate Bridge', 
          descrption: 'El Golden Gate (en español, Puerta Dorada) es un puente colgante situado en Estados Unidos, California, que une la península de San Francisco por el norte con el sur del condado de Marin, cerca de Sausalito. Golden Gate es también el nombre del estrecho en el cual el puente está construido, y recibe su nombre del estrecho en Constantinopla, llamado también la Puerta Dorada, ya que comunicaba Europa con Asia.',
          location:'Golden Gate Bridge, San Francisco, CA, Estados Unidos.',
          pubdate: new Date('1993', '0', '05'), 
          foto: './img/bridge.jpg',
          readmore:'Leer Más ->',
          
      },
      { 
        name: 'Golden Gate Bridge', 
        descrption: 'El Golden Gate (en español, Puerta Dorada) es un puente colgante situado en Estados Unidos, California, que une la península de San Francisco por el norte con el sur del condado de Marin, cerca de Sausalito. Golden Gate es también el nombre del estrecho en el cual el puente está construido, y recibe su nombre del estrecho en Constantinopla, llamado también la Puerta Dorada, ya que comunicaba Europa con Asia.',
        location:'Golden Gate Bridge, San Francisco, CA, Estados Unidos.',
        pubdate: new Date('1993', '0', '05'), 
        foto: './img/bridge.jpg',
        readmore:'Leer Más ->',
          
      },
      { 
        name: 'Golden Gate Bridge', 
        descrption: 'El Golden Gate (en español, Puerta Dorada) es un puente colgante situado en Estados Unidos, California, que une la península de San Francisco por el norte con el sur del condado de Marin, cerca de Sausalito. Golden Gate es también el nombre del estrecho en el cual el puente está construido, y recibe su nombre del estrecho en Constantinopla, llamado también la Puerta Dorada, ya que comunicaba Europa con Asia.',
        location:'Golden Gate Bridge, San Francisco, CA, Estados Unidos.',
        pubdate: new Date('1993', '0', '05'), 
        foto: './img/bridge.jpg',
        readmore:'Leer Más ->',
          
        }
    ];

    $scope.info= function(index){

    };
    // description
    $scope.name = $scope.brig[0].name;
    $scope.description = $scope.brig[0].descrption;

    // picture
    $scope.foto = $scope.brig[0].foto;
    $scope.foto2 = $scope.brig[0].foto2;
    $scope.foto3 = $scope.brig[0].foto3;

    // categories
    $scope.location = $scope.brig[0].location;
    $scope.longest = $scope.brig[0].longest;
    $scope.highest= $scope.brig[0].highest;
    $scope.oldest= $scope.brig[0].oldest;
    $scope.capacity= $scope.brig[0].capacity;
    $scope.place = $scope.brig[0].place;
    
    $scope.categ=[
      {
        nombrecatego:'Mas Alto'
      },
      {
        nombrecatego:'Mas Bajo'
      },
      {
        nombrecatego:'Mas Antiguo'
      },
      {
        nombrecatego:'Mas Nuevo'
      }
    ];
  }]); 