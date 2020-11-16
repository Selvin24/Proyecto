app.controller('MainController', ['$scope','$routeParams', function($scope, $routeParams) { 
  var url = $routeParams;
  $scope.brig = [
    { 
           /*----Mas Altos---*/
      name: 'Puente Golden Gate Bridge', 
      descrption: 'El Golden Gate (en español, Puerta Dorada) es un puente colgante situado en Estados Unidos, California, que une la península de San Francisco por el norte con el sur del condado de Marin, cerca de Sausalito. Golden Gate es también el nombre del estrecho en el cual el puente está construido, y recibe su nombre del estrecho en Constantinopla, llamado también la Puerta Dorada, ya que comunicaba Europa con Asia.',
      pubdate: new Date('1933', '0', '05'), 
      foto: './img/puentes/Baluarte/1.jpg',
      foto2: './img/puentes/Baluarte/2.jpg',
      foto3: './img/puentes/Baluarte/2.jpg',
      location:'Golden Gate Bridge, San Francisco, CA, Estados Unidos.',
      categoria:'Mas Alto',
      longest:'2737 m',
      highest:'227 m',
      Inauguración: new Date('1937', '4', '27'),  
      oldest:'1933',
      readmore:'Leer Más ->',
   }, 
    { 
      name: 'Puente Baluarte Bicentenario', 
      descrption: 'El puente Baluarte Bicentenario es un puente atirantado localizado en la Sierra Madre Occidental en los límites de los estados de Durango y Sinaloa, sobre la Autopista Durango-Mazatlán, en México. Fue de 2012 a 2016 el puente atirantado más alto del mundo, por lo que recibió el reconocimiento Récord Guinness. Tiene una longitud de 1124 m, ancho de 20 m, un vano de 520 m y una altura sobre el río Baluarte de 402,57 m.',
      pubdate: new Date('2008', '1', '21'), 
      foto: './img/puentes/Baluarte/1.jpg',
      foto2: './img/puentes/Baluarte/2.jpg',
      foto3: './img/puentes/Baluarte/2.jpg',
      location:'Durango Sinaloa, México',
      categoria:'Mas Alto',
      location2:'',
      longest:'	1,124 m',
      highest:'	402.57 m',
      Inauguración: new Date('2012', '0', '05'),  
      oldest:'2008',
      readmore:'Leer Más ->',
        
    },
    { 
      name: 'Puente Viaducto de Millau', 
      descrption: 'El viaducto de Millau, es un puente atirantado que cruza el valle del Tarn, en el departamento de Aveyron, Francia. La estructura soporta un tramo de la autopista A75, permitiendo la unión entre la causse Rouge y la causse du Larzac al cruzar una brecha de 2.460 metros de longitud y alcanza los 343 metros en su punto más alto, donde el viento puede soplar a más de 200 km/h. ',
      pubdate: new Date('2001', '0', '1'), 
      foto: './img/puentes/Viaducto/1.jpg',
      foto2: './img/puentes/Viaducto/2.jpg',
      foto3: './img/puentes/Viaducto/3.jpg',
      location:'	Millau, Francia',
      categoria:'Mas Alto',
      location2:'',
      longest:'	2,460 m',
      highest:'	343 m',
      Inauguración: new Date('2004', '11', '16'),  
      oldest:'2001',
      readmore:'Leer Más ->',
        
    },
    { 
      name: 'Puente Yavuz Sultan Selim', 
      descrption: 'El puente Yavuz Sultan Selim (en turco, Yavuz Sultan Selim Köprüsü), inicialmente llamado el Tercer puente del Bósforo (con el Puente del Bósforo siendo el Primer puente del Bósforo y puente Fatih Sultan Mehmet siendo el Segundo puente del Bósforo), situada a unos 19 km al norte del primer puente del Bósforo, es un puente colgante apto para la circulación de ferrocarriles y el tránsito de vehículos a motor sobre el Bósforo, al norte del puente del Bósforo en Estambul, Turquía.',
      pubdate: new Date('2013', '7', '29'), 
      foto: './img/puentes/Yavuz/1.jpg',
      foto2: './img/puentes/Yavuz/2.jpg',
      foto3: './img/puentes/Yavuz/3.jpg',
      location:'Sarıyer-Estambul, Turquía',
      categoria:'Mas Alto',
      location2:'',
      longest:'	1,408  m',
      highest:'	322 m',
      Inauguración: new Date('2016', '7', '26'),  
      oldest:'2013',
      readmore:'Leer Más ->',
        
    },
    { 
      name: 'Puente de la isla Russki', 
      descrption: 'El puente de la isla Russki (en ruso, Русский мост - most Russky) es un puente atirantado de Rusia que cruza el estrecho del Bósforo Oriental, en la ciudad de Vladivostok, en el krai de Primorie. Fue inaugurado con ocasión de la Reunión del Foro de Cooperación Económica Asia-Pacífico que tuvo lugar en Vladivostok en 2012. El puente conecta el continente, donde se encuentra la mayor parte de la ciudad (península de Nazimov), con la isla Russki, donde se realizaron las principales actividades de la cumbre. Se inauguró en julio de 2012, siendo en ese momento (y en octubre de 2014) el puente atirantado con mayor vano del mundo, superando al puente Sutong.',
      pubdate: new Date('2008', '6', '25'), 
      foto: './img/puentes/Russki/1.jpg',
      foto2: './img/puentes/Russki/2.jpg',
      foto3: './img/puentes/Russki/3.jpg',
      location:'Vladivostok,Rusia',
      categoria:'Mas Alto',
      location2:'',
      longest:'	1885,53 m',
      highest:'	320,9 m',
      Inauguración: new Date('2012', '7', '11'),  
      oldest:'2008',
      readmore:'Leer Más ->',
         
    },
        /*----Mas Antiguos---*/
    { 
      name: 'Ponte Vecchio', 
      descrption: 'El puente de la isla Russki (en ruso, Русский мост - most Russky) es un puente atirantado de Rusia que cruza el estrecho del Bósforo Oriental, en la ciudad de Vladivostok, en el krai de Primorie. Fue inaugurado con ocasión de la Reunión del Foro de Cooperación Económica Asia-Pacífico que tuvo lugar en Vladivostok en 2012. El puente conecta el continente, donde se encuentra la mayor parte de la ciudad (península de Nazimov), con la isla Russki, donde se realizaron las principales actividades de la cumbre. Se inauguró en julio de 2012, siendo en ese momento (y en octubre de 2014) el puente atirantado con mayor vano del mundo, superando al puente Sutong.',
      pubdate: new Date('1335', '0', '1'), 
      foto: './img/puentes/Vecchio/1.jpg',
      foto2: './img/puentes/Vecchio/2.jpg',
      foto3: './img/puentes/Vecchio/3.jpg',
      location:'Florencia, Italia',
      categoria:'Mas Antiguos',
      location2:'',
      longest:'67 m',
      highest:'	 4,4 m',
      Inauguración: new Date('1591', '0', '1'),  
      oldest:'1335',
      readmore:'Leer Más ->',
            
    },
    { 
      name: 'Puente de Rialto', 
      descrption: 'La primera construcción que cruzó el Gran Canal fue un pontón o puente flotante, construido en 1181 por Nicolò Barattieri. Se llamó Ponte della Moneta, presumiblemente por la ceca que acuñaba la moneda veneciana y se alzaba en su entrada oriental. La evolución y la importancia del Mercado de Rialto en la orilla oriental del canal aumentó el tráfico fluvial considerablemente cerca del puente flotante. Por ello, fue reemplazado alrededor de 1250 por un puente de madera. La estructura tenía dos rampas inclinadas que se unían a una sección central móvil, que podía ser elevada para el paso de barcos altos. La relación del puente con el mercado finalmente produjo el cambio de denominación. Durante la primera mitad del siglo XV, dos hileras de tiendas fueron construidas a los lados del puente. Los impuestos de estas tiendas se ingresaban en el Tesoro de la ciudad, que ayudaba al mantenimiento del puente.',
      pubdate: new Date('1181', '0', '1'), 
      foto: './img/puentes/Rialto/1.jpg',
      foto2: './img/puentes/Rialto/2.jpg',
      foto3: './img/puentes/Rialto/3.jpg',
      location:'Venecia, Italia',
      categoria:'Mas Antiguos',
      location2:'',
      longest:'48 m',
      highest:'	 7,32 m',
      Inauguración: new Date('1345', '0', '1'),  
      oldest:'1345',
      readmore:'Leer Más ->',
              
    },
    { 
      name: 'Puente Sant Angelo', 
      descrption: 'El Puente Sant Angelo, originalmente elius (puente Elio), es un puente situado en la ciudad de Roma, construido entre los años 134-139 por el emperador romano Adriano, destinado a extender el centro de la ciudad a su mausoleo de reciente construcción, que hoy en día constituye el Castel Sant Angelo. Se encuentra cubierto de mármol travertino y cruza el río Tíber con cinco arcadas. Hoy, el puente es exclusivamente peatonal y proporciona una vista fotogénica del Castel Sant Angelo. Enlaza el rione (distrito) de Ponte (que recibió su nombre por el propio río) con el rione de Borgo.',
      pubdate: new Date('134', '0', '1'), 
      foto: './img/puentes/SantAngelo/1.jpg',
      foto2: './img/puentes/SantAngelo/2.jpg',
      foto3: './img/puentes/SantAngelo/3.jpg',
      location:'Roma, Italia',
      categoria:'Mas Antiguos',
      location2:'',
      longest:'135  m',
      highest:'	 20 m',
      Inauguración: new Date('136', '0', '1'),  
      oldest:'134',
      readmore:'Leer Más ->',
                
    },
    { 
      name: 'Puente Zhaozhou', 
      descrption: 'El puente Zhaozhou es el puente en arco de piedra de tímpano abierto más antiguo del mundo.​ Se atribuye su construcción al artesano Li Chun y fue construido entre 595 y 605 durante la dinastía Sui. Situado en la provincia de Hebei, es el puente más antiguo que se conserva en toda China. ',
      pubdate: new Date('595', '0', '1'), 
      foto: './img/puentes/Zhaozhou/1.jpg',
      foto2: './img/puentes/Zhaozhou/2.jpg',
      foto3: './img/puentes/Zhaozhou/3.jpg',
      location:'Zhao County, China',
      categoria:'Mas Antiguos',
      location2:'',
      longest:'51 m',
      highest:'7.3 m',
      Inauguración: new Date('605', '0', '1'),  
      oldest:'595',
      readmore:'Leer Más ->',
                 
    },
    { 
      name: 'Puente de Septimio Severo', 
      descrption: 'El puente de Septimio Severo está ubicado cerca de la antigua ciudad de Arsameia a 55 km de Adıyaman en la antigua región de Comagene, al sudeste de la Turquía actual. Cruza el arroyo de Chabinas, un tributario del Kahta en la carretera de Kahta a Sincik.',
      pubdate: 	'Siglo II d. C.', 
      foto: './img/puentes/Septimio/1.jpg',
      foto2: './img/puentes/Septimio/2.jpg',
      foto3: './img/puentes/Septimio/3.jpg',
      location:'Provincia de Adıyaman, Turquía',
      categoria:'Mas Antiguos',
      location2:'',
      longest:'120  m',
      highest:'34 m',
      Inauguración: 'Desconocida',  
      oldest:'134',
      readmore:'Leer Más ->',
                   
    }
  ];
    
    $scope.url=$routeParams.id;

    
    $scope.pruena=2;
    
    // description
    $scope.name = $scope.brig[0].name;
    $scope.description = $scope.brig[1].descrption;
    // picture
    $scope.foto = $scope.brig[$scope.pruena].foto;
    $scope.foto2 = $scope.brig[1].foto2;
    $scope.foto3 = $scope.brig[1].foto3;

    // categories
    $scope.location = $scope.brig[1].location;
    $scope.longest = $scope.brig[1].longest;
    $scope.highest= $scope.brig[1].highest;
    $scope.oldest= $scope.brig[0].oldest;
    $scope.capacity= $scope.brig[1].capacity;
    $scope.place = $scope.brig[1].place;
  }]); 