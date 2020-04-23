<?php include './elements/header.php'; ?>
	<script src="https://api-maps.yandex.ru/2.1/?apikey=2a1b7d82-04ce-4c03-af57-83cbecd96d20&lang=ru_RU" type="text/javascript"></script>
	<style type="text/css">
		.ymaps-2-1-76-balloon__content{
			padding: 0;			
		}
		.ymaps-2-1-76-balloon__close+.ymaps-2-1-76-balloon__content{
			margin: 0;
		}
	</style>
    <div id="map" style="width: 100%; height: 900px"></div>

	<script>

	ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {            
            center: [55.382433979033515, 36.72783427132507],
            zoom: 14
        });        
		var myCollection = new ymaps.GeoObjectCollection({}, {
		    preset: 'islands#redIcon',
		    draggable: false
		});
		myMap.geoObjects.options.set('balloonMinWidth', 404);
		var data={
			0:{
				coords: [55.382433979033515, 36.72783427132507],
				head: "ЦЕНТРАЛЬНЫЙ ОФИС",
				address: "Пресненская набережная, д. 6с2, 'Москва-Сити' Башня Империя, 51 этаж, офис 5113",
				phone: ["+7 (499) 499-19-90"],
				site: ["parisnail.ru"],
				inst: ["paris_nail_cafe/", "paris_nail_cafe/"],
			},
			1:{
				coords: [55.387124848460466,36.74491457833191],
				head: "МУЛЬТИБРЕНДОВЫЙ МАГАЗИН PARIS NAIL SHOP&SCHOOL",
				address: "м. Кузьминки, ул. Зеленодольская, д. 30",
				phone: ["+7 (499) 499-19-90","+7 (499) 499-19-90"],
				site: ["nailbrand.com"],
				inst: ["nailbrand_com"],
			},
			2:{
				coords: [55.3760319952172,36.73633150948425],
				head: "МУЛЬТИБРЕНДОВЫЙ МАГАЗИН NAILBRAND",
				address: "м. Проспект Вернадского, пр-кт. Вернадского, д. 39",
				phone: ["+7 (499) 499-19-90","+7 (499) 499-19-90"],
				site: ["parisnail.ru"],
				inst: ["paris_nail_cafe/", "paris_nail_cafe/"],
			},
		};
		for (i in data) {
			var phones="";
			for(var j=0; j < data[i].phone.length; j++){
				phones+='<div class="baloon-phone">'+data[i].phone[j]+'</div>';
			}
			var sites="";
			for(var j=0; j < data[i].site.length; j++){
				sites+='<a class="baloon-site" target="_blank" href="//'+data[i].site[j]+'">'+data[i].site[j]+'</a>';
			}
			var inst="";
			for(var j=0; j < data[i].inst.length; j++){
				inst+='<a class="baloon-inst" target="_blank" href="//instagram.com/'+data[i].inst[j]+'">'+data[i].inst[j]+'</a>';
			}
			var MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
			    '<div class="baloon">'+			    	
			    	'<div class="baloon-head">'+data[i].head+'</div>'+
			    	'<div class="baloon-address">'+data[i].address+'</div>'+
			    	'<div class="baloon-wrap">'+
			    		'<div class="baloon-phones">'+phones+'</div>'+
			    		'<div class="baloon-sites">'+sites+'</div>'+
			    		'<div class="baloon-inst">'+
			    			'<i class="baloon-icon inst"></i>'+
			    			'<div class="baloon-insta-links">'+inst+'</div>'+
			    		'</div>'+
			    	'</div>'+
			    '</div>'
			);
		    myCollection.add(new ymaps.Placemark(data[i].coords, {},
		    {balloonContentLayout: MyBalloonContentLayoutClass}));
		}		
		myMap.geoObjects.add(myCollection);
    }

</script>
<?php include './elements/subscription.php'; ?>
<?php include './elements/footer.php'; ?>
