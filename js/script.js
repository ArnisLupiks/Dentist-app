<link href="http://code.jquery.com/mobile/latest/jquery.mobile.min.css" rel="stylesheet" type="text/css"/>
<script src="http://code.jquery.com/.jquery-1.6.4.min.js</script>
<script src="http://code.jquery.com/mobile/latest/jquery.mobile.min.js"></script>

function initialize() {

  var markers = [];
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

    </script>
    <style>
      #target {
        width: 345px;
      }

var dentistLocations =[];
var markersArray = [];
var markers=[];
var map;


 	var dragging = false;
	var rect;
	var pos1, pos2;
	var latlng1, latlng2;
	var minLat, maxLat, minLng, maxLng;
var listener1;
    var listener2;
    var listener3; 
    var listener4;

function initialize() {

dentistLocations = [
(52.9400826,-9.2934389,"Dr Sheehan John","Main Street, Ennistymon, Clare","657071207","open now (until 15.30)",);
(43.9878807,-84.8477936,"Dr. Oonagh O'Regan","Roslevan Dental","Tulla Road, Ennis, Clare","065 6828486");
(53.7168999,-8.9983301,"Paul Murphy","Dalton Street,Claremorris, Mayo","094 9371207",);

[53.3159506, -6.2309894,"Seafield Lodge Dental Clinic", "Stillorgan Road Dublin 4", "083 1543501","open now until 18.00"];
[53.3958011, -6.213546, "Dental Surgery"," Northside Shopping Centre - Coolock Dublin 5", "01 8476754", "open now (until 18.00)"];
[53.3891673, -6.2977332, "Bryan Duggan Dental Clinic", "10 Main Street-Finglas Dublin 11",	"083 15443434", "open now (until 18.00)"];
[53.610679, -6.1859676, "Balbriggan Dental Clinic", "6 Chapel ST Balbriggan Co. Dublin", "01 6903464", "open now (until 18.00)"	];
[53.4572573, -6.220791, "Vivian Mongey and Associates",	 "43 Main Street Swords Co. Dublin",	"18405892", "open from 08.00"];
[53.4016843, -6.3998165,"Touchstone Dentistry Ltd", "Main Street Mulhuddart Dublin 15",	"35316467830", "open now (until 17.30)"];
[53.3869236, -6.3774703,"Touchstone Dentistry Ltd", "Main Street Mulhuddart Dublin 15",	"35316467830","open now (until 17.30)"];
[53.3348163, -6.2367261,"The Northumberland Institute of Dental Medicine", "58 Northumberland Road Ballsbridge Dublin 4", "6688441","open now (until 18.00)"];
[53.3021173, -6.3049449,"Fortfield Dental", "48 Fortfield Park Terenure Dublin 6W", "01 4927288",	 "open next Friday from 08.00"],
[53.286296, -6.1194238, "Sandycove Dental Care",	"2 Mt Pleasant Sandycove Rd Sandycove Co. Dublin","01 2801684","open now (until 17.30)"];
[53.3011386, -6.2842532,"Rathfarnham Dental Practice"	, "151 Rathfarnham Road Rathfarnham Dublin 14", "01-4907911", "open next Friday from 08.00"];
[53.3230118, -6.2489537,"Ranelagh Dental Ranelagh Clinic", "22-26 Sandford Road Ranelagh Dublin 6",	"4986940"	, "open now (until 17.30)"];
[53.3860923, -6.3760116,"Touchstone Dentistry Ltd", "Main Street Mulhuddart Dublin 15", "35316467830", "open now (until 17.30)"]);
[53.3424242, -6.3509835,"Ballyfermot Dental Practice", "276 Ballyfermot road Dublin 10",	"01-6265776",	"open now (until 17.00)"],
[53.286296, -6.1194238, "Sandycove Dental Care", "2 Mt Pleasant Sandycove Rd Sandycove Co. Dublin",	"01 2801684", "open now (until 17.30)"],
[53.3327372, -6.2647571,"Harcourt Health"	, "35 Upper Camden St Dublin 2",	"01 4759551", "open now (until 16.00)"],
[53.3021173, -6.3049449,"Fortfield Dental", "48 Fortfield Park Terenure Dublin 6W",	"01 4927288", "open next Friday from 08.00"],
[53.5810884, -6.1075401, "Skerries Dental Care", "College Court Strand Street Skerries Co. Dublin",	"01 8029011","open now (until 17.00)"],
[53.4516615, -6.1550781, "Ivory Dental Care",	 "2 Old Street Malahide Co. Dublin",	"015522390","open today from 16.00"];


(51.7466011,-8.7362099,"Barry O'Driscoll","Bandon Dental Practice","5 North Main Street, Bandon, Cork","023 8;841752","open now (until 12.30)");
(51.9149704,-8.1736097,"Dr Elaine Kiely","91; Main Street, Midleton, Cork","021 4631836","021 4631836",);
(51.8686714,-8.3591604,"Dr. Zita Geaney,Mount Oval Dental Practice,"Rochestown, Cork, Cork","(021)4898784");
(51.9004745,-8.4726114,"Grania O'Connell","Cork Dental Care","1 Georges Quay, Cork, Cork","021 432 0069","open now (until 16.00)");
(51.8686714,-8.3591604,"Dr. Zita Geaney,Mount Oval Dental Practice,"Rochestown, Cork, Cork","(021)4898784");
(51.9004745,-8.4726114,"Jason Long","Lavitts Quay Dental","4 Lavitts Quay, Cork City Centre, Cork","214270141");																			
(51.8138428,-8.3922663,"Kevin O Brien","Owenabue Mall; Main St, Carrigaline, Cork","021 4371944");
(51.9235268,-8.4084301,"Kevin O Brien","Barnavara Hill, Glanmire, Cork","021 4823724");
(51.8084183,-8.3990088,"Liam Tuohy","DENTAL CARE","KILMONEY ROAD, CARRIGALINE, Cork","021 4372203");
(51.8686714,-8.3591604,"Mary O'Dea","Mount Oval Dental Practice","Rochestown, Cork, Cork","021)4898784",);
(51.8811607,-8.5055447,"-Stuart Aherne","Consultants Private Clinic","Cork University Hospital, Wilton;, Cork","021 - 4941810");

(53.2329941,-8.9583254,"Alastair Woods","Eyre Square Dental Clinic","1st Floor; 1 Prospect Hill;, Eyre Square, Galway","091 562932");
(53.2571182,-8.9242296,"Conal Kavanagh","5 The Crescent, Galway, Galway","91582722");
(53.5125618,-8.853075,"Dr Lisa Creaven","Tuam Dental","Vicar St, Tuam, Galway","9324452");
(53.5125618,-8.853075"Dr McAlinden","Tuam Dental","Vicar St, Tuam, Galway","9324452");
(53.2740784,-8.9726582,"Dr. Neysan Chah","Roscam Family Dental Practice","Unit 5 Roscam House, Roscam, Galway","091- 763885","open now (until 18.00)");
(53.2329941,-8.9583254,"Eoin Fleetwood","Eyre Square Dental Clinic","1st Floor; 1 Prospect Hill;, Eyre Square, Galway","091 562932");								
(53.2329941,-8.958325"Eyre Square Dental","Eyre Square Dental Clinic","1st Floor; 1 Prospect Hill;, Eyre Square, Galway","091 562932");
(53.2752304,-9.0465603,"F.X. O'Brien","F.X. O'Brien","35; Forster Street;, Galway;, Galway","35391562709");
(53.2518196,-9.142745,"Peter Gannon","Knocknacarra Dental","Cappagh Road, Knocknacarra, Galway","091 596768");

(53.141552,-7.065186,"Aoife Egan","MONASTEREVIN DENTAL SURGERY","WHELAN STREET, MONASTEREVIN, Kildare","45532960");											
("Dr Dermot Murnane","Unit 7, Manor Mills Shopping Centre, Maynooth, Kildare","01 5054276");
(53.3422508,-6.5173311,"Johnny Fearon","Ashgrove Dental Clinic","Dublin Road, Naas, Kildare","045888218/9");
(53.2972794,-6.69697,"Kevin Murphy","Clane Dental Surgery","The Woods Centre, Clane, Kildare","45868736");
(53.212883,-6.6491566,"Matthew Buckley","Advanced Dentistry Ireland 	Tredagh","Blessington Rd, Naas, Kildare","45873199");	
(53.141552,-7.065186,"Niall Collins","MONASTEREVIN DENTAL SURGERY","WHELAN STREET, MONASTEREVIN, Kildare","45532960");
(53.3399048,-6.5384355,"Paul O'Boyle","Riverside Dental Practice","Main street, Celbridge, Kildare","01 6102222");		

(53.0497398,-7.3192153,"Gordon Booth","The Cedar Clinic","Mountmellick Road, Portlaoise, Laois","057 8621110");

(52.6647682,-8.6247778,"Dr. Eamonn Noonan","17 Ellen Street, Limerick, Limerick","061468765","open now (until 12.30)2");
(52.3848038,-9.2951059,"John O'Flynn","Cedarville Dental Surgery","Cedarville, Abbeyfeale, Limerick","068 32077");

(53.7133369,-6.3465791,"Clem Sullivan","Waterfront Dental","13 Fee Court, Abbeycartron, Longford","043 3341979");

("Arune Varinauskiene","Dental clinic on South quay","2B South quay, Drogheda, Louth","0860306539","open now (until 18.00)");
("Vaidas Varinauskas","2B South Quay, Drogheda, Louth2","0860306539","open now (until 18.00)"); 

(53.8504982,-9.27425,"Dr McAlinden","Breaffy Dental","Breaffy GAA club, Castlebar, Mayo","949023163"");
(53.6249352,-9.2184267,"Patrick O' Beirne","Ballinrobe Dental Surgery2,"Mason's Close, Ballinrobe, Mayo","094 9521000","open now (until 15.00");	
(53.6249352,-9.2184267,"Paul Murphy","Dalton Street, Claremorris, Mayo","2094 9371207");

(53.4219894,-7.9285898,"Jarlath Durkan","Shannon Orthodontics","15 Castlemaine St, Athlone, Westmeath","090 6450615","open now (until 17.00)");	

(53.2769012,-7.4960999,"Chtistopher Scott","Scott Bannon & Ryan","Kilbride street, Tullamore, Offaly","057 9321432","open tomorrow from 00.00");
(53.274559,-7.4903102,"John L O'Mahony","JOHN O' MAHONY DENTAL PRACTICE","8; CHURCH ST, TULLAMORE, Offaly","057 93 21955");	

("Noel Henderson","The Oak Dental Practice","St Johns Terrace, Ballaghaderreen, Roscommon","949860000","open now (until 15.00)");

(54.272171,-8.4781904,"Brian Byrne","Brian Byrne","1 Wine Street, Sligo, Sligo");
("David McConville","David McConville Orthodontics","Office suite 5; Quayside Shopping Centre, Wine Street, Sligo","719150820");
(41.1082687,-79.48983,"DR.KLOCKER","DR.KLOCKER;Dental Surgery","The Rectory;Lissadell, Ballinfull, Sligo,"071 91 63888");
(54.2722855,-8.4784698,"Maurice FitzGerald","Cleary FitzGerald Dental Practice","Wine Street, Sligo, Sligo2","071 9143927/9144492");
(54.2722855,-8.4784698,"Patrick O'Connor","O'Connor Moore Dental","Wine Street, Sligo, Sligo","719162622")
(54.2722855,-8.4784698,"Siobhán Cleary","Cleary FitzGerald Dental Practice","Wine Street, Sligo, Sligo","071 9143927/9144492")


(52.7939453,-7.8376307,"Corinne Dwyer","THE MALL DENTAL PRACTICE","THE MALL, THURLES, Tipperary","0504 21418")							
(52.6780548,-7.818573,"Corinne Dwyer","FRIARY DENTAL CENTRE","FRIAR STREET, THURLES, Tipperary","0504 21523");
(52.4742546,-8.1567497,"Dr John Pierse","Dental & Orthodontic Centre","23 Bank Place, Tipperary Town, Tipperary","062 52566","open now (until 17.30)");	
(52.3872719,-7.9117198,"Dr Ryan Hennessy","ConfiDental","28 Cahir St, Cashil, Tipperary","052 7441111","open now (until 16.00)")
(52.3547592,-7.6996012,"Dr. John Heaney","Borstal gate","Emmet Street, Clonmel, Tipperary","052-6124371");			
(52.3547592,-7.6996012,"Dr. John Timoney",,"Borstal Gate Dental Surgery","Emmet Street, Clonmel, Tipperary","052-6124371");
(52.3547592,-7.6996012,"Dr. Pauraic Keogh","Borstal Gate Dental Surgery","Emmet Street, Clonmel, Tipperary","052-6124371");
(52.9930725,-8.1233616,"Elzbieta Timmons","The Doves Dental Surgery","Church Road, Nenagh, Tipperary","067 33350");	
(52.6780548,-7.818573,"Francis Rafter","FRIARY DENTAL CENTRE","FRIAR STREET, THURLES, Tipperary","0504 21523");
(52.9930725,-8.1233616"Jacques Lumbroso","Church Road, Nenagh, Tipperary","067 33350");
(52.7939453,-7.8376307,"Liam Tuohy","The Mall Dental Practice","The Mall, Thurles, Tipperary","0504 21418");
(52.7939453,-7.8376307,"Ronan Doyle","THE MALL PRACTICE","THE MALL, THURLES, Tipperary","0504 21415");
(52.7939453,-7.8376307,"Rory Linehan","THE MALL DENTAL PRACTICE","THE MALL, THURLES, Tipperary","0504 21418");
(52.5178909,-7.8863826"Rory Linehan","DOMINIC COURT DENTAL PRACTICE","BANK PLACE, CASHEL, Tipperary","062 63349");
(52.9930725,-8.1233616,"Sarah Rymer","Church Road, Nenagh, Tipperary","067 33350");

(52.7939453,-7.8376307,"Corinne Dwyer","THE MALL DENTAL PRACTICE","THE MALL, THURLES, Tipperary","0504 21418");	

(53.4219894,-7.9285898,"Jarlath Durkan","Shannon Orthodontics","15 Castlemaine St, Athlone, Westmeath","090 6450615","open now (until 17.00)");

(52.3968582,-6.94379,"Dr Fiona Counihan","Quirke Dental Surgeons","19 John St, New Ross, Wexford","051 421453","open now (until 17.00)");
(52.3968582,-6.94379,"Dr Ursula Quirke","Quirke Dental Surgeons","19 John St, New Ross, Wexford","051 421453","open now (until 17.00)");
(52.5012283,-6.5699897,"DR. BRIAN O LEARY","ENNISCORTHY DENTAL SURGERY","LYMINGTON ROAD, ENNISCORTHY, Wexford","0539236644","open now (until 17.00)");
(52.3968582,-6.9447498,"Ken Rogers","K. Rogers Dental Practice","2 Bridge Street, New Ross, Wexford","051 421286","open now (until 17.00)");
(52.3968582,-6.94379,"Maurice Quirke","Quirke Dental Surgeons",19 John St, New Ross, Wexford,"051 421453","open now (until 17.00)");
(52.3968582,-6.94379,"Niamh Mossis","Quirke Dental Surgeons","19 John St, New Ross, Wexford","051 421453","open now (until 17.00)");

(53.1937981,-6.1066527,"Aoife Egan","BLESSINGTON DENTAL SURGERY","KILBRIDE ROAD, BLESSINGTON, Wicklow","45865045");
(53.1937981,-6.1066527,"Caitriona Begley","Avondale Dental Clinic","Vevay Road, Bray, Wicklow","01-2014180");
(53.1915398,-6.10499,"Dr John Murphy","Vevay Medical & Dental Centre","35 Vevay rd, Bray, Wicklow","12866394");
(53.1718941,-6.5259914,"Niall CollinsW","BLESSINGTON DENTAL SURGERY","KILBRIDE ROAD, BLESSINGTON, Wicklow","45865045");



  ];


var infowindow = new google.maps.InfoWindow();

for(var i=0; i<dentistLocations.length;i++){
  markersArray[i] = new google.maps.LatLng(dentistLocations[i][0],dentistLocations[i][1]);   
}

        var mapOptions = {
          center: new google.maps.LatLng(53.344103, -6.267493),
          zoom: 9,
		  minZoom: 9,
		  mapTypeControl: false,
          streetViewControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
			
	    for(var i=0; i<dentistLocations.length;i++){
		var marker = new google.maps.Marker({
			  position: markersArray[i],
			  map: map,
			  animation: google.maps.Animation.DROP,
			  title: ''
		  });
		  
		  markers[i] = marker;
		  
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                               return function() {                                                         
                                                 
                                                  infowindow.setContent('<html><body> \
                                                                         <table class=gridtable border=4 width=350 BORDERCOLOR=BLACK>  \
                                                                         <tr><td align=center colspan=2><b>Dublin Dentists </b></td></tr> \
                                                                         <tr><td width=110> Name:</td><td>' + dentistLocations[i][2] + '</td></tr> \
                                                                         <tr><td>Address:</td><td>' + dentistLocations[i][3]+ '</td></tr>   \
                                                                         <tr><td>Phone no:</td><td>' + dentistLocations[i][4]+ '</td></tr>  \
                                                                         <tr><td>Opening Hours:</td><td>' + dentistLocations[i][5]+' </td></tr></table>   \
                                                                         </html>');  
                                                  infowindow.open(map, marker);
                                            }
                                          })(marker, i));  
		  
        }

 
      }
	  
	  
	  
	  // Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}
	  

google.maps.event.addDomListener(window, 'load', initialize);
