$(function() {
	moment.lang('nl')
	smoothScroll(300);
	if($('#mapWrapper').length){
		appendBootstrap();
	}    
	validateForm();
	tabContent();
	marktable();
	mainNav();
	datify();

	$(window).scroll(function() {
	    mainNav();
	});

	var flexslider = $('.flexslider').length
	if(flexslider){
		$('.flexslider').flexslider({
		    animation: "fade",
		    controlNav: false,
			directionNav: false
		});
	}
});

// $(window).scroll(function(event) {
//   $("section").each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in"); 
//     } 
//   });
  
// });

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
function tabContent() {
	var elementHeights = $('.tab-content .tab-pane').map(function() {
	                return $(this).height();
	            }).get();
	var maxHeight = Math.max.apply(null, elementHeights)
	$('.tab-pane').css("min-height",maxHeight)
}
function validateForm() {
	$('#contactfrm').validate({
	 	debug: false,
		errorClass: "alert alert-danger",
		errorElement: "p",
		onkeyup: false,
		onclick: false,
		rules: {
			naam: "required",
			_replyto: {
				required: true,
				email: true
			},
			telefoon: {
				required: true,
				maxlength: 10
			}
		},
		messages: {
			naam: "Graag uw naam invullen.",
			_replyto: "Uw e-mailadres voldoet niet.",
			telefoon: "Graag uw telefoonnummer (alleen cijfers gebruken)"
		}
	})	
}
function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 200) $('.appear-on-scroll').stop().animate({
        "opacity": '1',
        "top": '0'
    });
    else $('.appear-on-scroll').stop().animate({
        "top": '-500',
        "opacity": '0'
    });
}
function marktable() {
	if($('body.tabel #content table').length){
		$('body.tabel #content table').addClass('table table-condensed')	
	}
	if($('body.lijst #content ul').length){
		$('body.lijst #content ul').addClass('list-unstyled')
	}
}
function datify(){
	$('.nieuws .post-meta, .page-header .post-meta').each(function(index) {
		var $this = $(this)
		$this.text(moment($this.text()).format('dddd, D MMMM YYYY'))
    });
	$('.media .post-meta').each(function(index) {
		var $this = $(this)
		$this.text(moment($this.text()).format('dddd, D MMMM YYYY'))
    });
}
/*
|--------------------------------------------------------------------------
| GOOGLE MAP
|--------------------------------------------------------------------------
*/

function appendBootstrap() {
	"use strict";
	if($('#mapWrapper').length){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "//maps.google.com/maps/api/js?sensor=false&callback=initialize";
		document.body.appendChild(script);
	}
}    

function initialize(id) {
	"use strict";
	var image = '/aed-duiven/assets/img/icon-map.png';
	var image8 = '/aed-duiven/assets/img/icon-map.png';
	var image247 = '/aed-duiven/assets/img/icon-map-247.png';

	var overlayTitle = 'AED locatie';

	var locations = [
			['Alliander NV', 'Dijkgraaf 4, Duiven', 51.9657025,5.9868188, '49702674', '' ],
			['Autobedrijf Dago', 'Ratio 22, Duiven', 51.9624524,6.0136785, '49939102', '' ],
			['Candea College', 'Eltensestraat 8, Duiven', 51.9449511,6.0070493, '42048517', '' ],
			['Candea College', 'Saturnus 1, Duiven', 51.9486098,5.9992969, '72873668', '' ],
			['CCOG', 'Kastanjelaan 4, Duiven', 51.9469269,6.0241816, '42045317', '' ],
			['Dorpsraad Groessen', 'Achtergraardsestraat 2, Groessen', 51.9316638,6.0309008, '42659920', 'Y' ],
			['Dorpsraad Loo', 'Loostraat 32, Loo', 51.9305335,5.9880357, '46361993', 'Y' ],
			['Elshof Passage', 'Elshofpassage, Duiven', 51.9485813,6.0215868, '42696589', '' ],
			['FRAMO Sport Medische & Fysiotherapie Groothandel', 't Holland 5, Duiven', 51.9426625,6.0248919, '45036934', '' ],
			['Fysiofit de Liemers', 'Eilandplein 476, Duiven', 51.9415087,6.0079322, '72872640', '' ],
			['Fysiopraktijk Snippenburg', 'De Maatjes 40, Duiven', 51.95236,6.0316777, '42046397', '' ],
			['Gemeente Duiven', 'Kastanjelaan 3', 51.9486559,6.0247541, '25991223', 'Y' ],
			['Gemeente Duiven', 'Ploenstraat 3, Duiven', 51.9518681,6.0196404, '42641112', '' ],
			['Hatraco Technische Handelsonderneming B.V.', 't Holland 4, Duiven', 51.9413693,6.0246845, '42048319', '' ],
			['Jumbo Duiven', 'Pastoriestraat 2, Duiven', 51.950091,6.0224955, '72874516', '' ],
			['Jumbo Duiven', 'Eilandplein 508, Duiven', 51.9417029,6.007688, '72874527', '' ],
			['Liemerije', 'Fuutstraat 52, Duiven', 51.9435379,6.0194512, '61178010', '' ],
			['Praktijk voor Gezondheidsbevordering', 'Beerenclaauwstraat 1, Groessen', 51.9351784,6.0341648, '44631221', 'Y' ],
			['Rabobank De Liemers', 'Burgemeester van Dorth tot Medlerstraat 1, Duiven', 51.9504715,6.018588, '42499973', 'Y' ],
			['SITA Recycling Services', 'Roelofshoeveweg 41, Duiven', 51.969682,6.0056954, '42048285', '' ],
			['Sportcentrum Aerofitt Duiven', 'Westsingel 29, Duiven', 51.9565794,6.0125111, '49427585', '' ],
			['Sporthal Triominos', 'Eltensestraat 4, Duiven', 51.945488,6.0075076, '42048051', 'Y' ],
			['tandartspraktijk Mertens', 'Mondriaanstraat 12, Duiven', 51.9500626,6.0093018, '68225967', '' ],
			['Tennis Centre Duiven', 'De Nieuweling 2, Duiven', 51.9435564,6.0356527, '61953464', 'Y' ],
			['Th Jansen Beheer BV', 'Ratio 16, Duiven', 51.9617935,6.0158809, '45682567', '' ],
			['Theepaviljoen Horsterpark', 'Horsterparklaan 4, Duiven', 51.9485589,5.9933467, '42047963', '' ],
			['Zaal Gieling Groessen', 'Dorpstraat 29, Groessen', 51.9321048,6.0275047, '42048659', 'Y' ]
		];

		$('#aeds').text(locations.length)
		
		/*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
		id = (id === undefined) ? 'mapWrapper' : id;

		var map = new google.maps.Map(document.getElementById(id), {
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				streetViewControl:true,
				scaleControl:false,
				zoom: 14,
				styles:[
				{
					"featureType": "water",
					"stylers": [
					{
						"color": "#6196AD"
					},
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#FCFFF5"
					},
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
					{
						"color": "#808080"
					},
					{
						"lightness": 54
					}
					]
				},
				{
					"featureType": "landscape.man_made",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#dde1d4"
					}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#73AB7D"
					}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"color": "#767676"
					}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [
					{
						"color": "#ffffff"
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#7e7341"
					}
					]
				},

				{
					"featureType": "landscape.natural",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#dee6e6"
					}
					]
				},
				{
					"featureType": "poi.park",
					"stylers": [
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "poi.sports_complex",
					"stylers": [
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "poi.medical",
					"stylers": [
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "poi.business",
					"stylers": [
					{
						"visibility": "simplified"
					}
					]
				}
				]

			});

		var myLatlng;
		var marker, i;
		var bounds = new google.maps.LatLngBounds();
		var infowindow = new google.maps.InfoWindow({ content: "loading..." });

		for (i = 0; i < locations.length; i++) { 
				if (locations[i][5]=='Y'){
					image = image247;
				} else {
					image = image8;
				}

				if(locations[i][2] !== undefined && locations[i][3] !== undefined){
					var content = '<div class="infoWindow"><a href="#" data-toggle="modal" data-target="#'+locations[i][4]+'"><em class="glyphicon glyphicon-info-sign"></em> '+locations[i][0]+'<br>'+locations[i][1]+'</a></div>';
					(function(content) {
						myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

						marker = new google.maps.Marker({
							position: myLatlng,
							icon:image,  
							title: overlayTitle,
							map: map
						});

						google.maps.event.addListener(marker, 'click', (function() {
							return function() {
								infowindow.setContent(content);
								infowindow.open(map, this);
							};

						})(this, i));

						if(locations.length > 1){
							bounds.extend(myLatlng);
							map.fitBounds(bounds);
						}else{
							map.setCenter(myLatlng);
						}

					})(content);
				}else{

					var geocoder   = new google.maps.Geocoder();
					var info   = locations[i][0];
					var addr   = locations[i][1];
					var latLng = locations[i][1];

					(function(info, addr) {

						geocoder.geocode( {

							'address': latLng

						}, function(results) {

							myLatlng = results[0].geometry.location;

							marker = new google.maps.Marker({
								position: myLatlng,
								icon:image,  
								title: overlayTitle,
								map: map
							});
							var $content = '<div class="infoWindow">'+info+'<br>'+addr+'</div>';
							google.maps.event.addListener(marker, 'click', (function() {
								return function() {
									infowindow.setContent($content);
									infowindow.open(map, this);
								};
							})(this, i));

							if(locations.length > 1){
								bounds.extend(myLatlng);
								map.fitBounds(bounds);
							}else{
								map.setCenter(myLatlng);
							}
						});
					})(info, addr);

				}
			}
	}
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery)