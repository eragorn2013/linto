$(document).ready(function(){
	function createMap(lat, lon, zoom){
		$('#map').html('');
		var myMap = new ymaps.Map("map", {
	        center: [lat, lon],
	        zoom: zoom
	    });
	    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		    //... отключаем перетаскивание карты
		    myMap.behaviors.disable('drag');
		}
		var myCollection = new ymaps.GeoObjectCollection({}, {
		    preset: 'islands#redIcon',
		    draggable: false
		});
		if(document.documentElement.clientWidth > 960)
			myMap.geoObjects.options.set('balloonMinWidth', 404);
		else if(document.documentElement.clientWidth <= 960)
			myMap.geoObjects.options.set('balloonMinWidth', 292);
		
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
			    			'<div class="baloon-inst-links">'+inst+'</div>'+
			    		'</div>'+
			    	'</div>'+
			    '</div>'
			);
		    myCollection.add(new ymaps.Placemark(data[i].coords, {},
		    {balloonContentLayout: MyBalloonContentLayoutClass}));
		}		
		myMap.geoObjects.add(myCollection);
	}
	$("body").on("click", ".repres-list-item-map-link", function(){
		var lat=$(this).attr('data-lat');
		var lon=$(this).attr('data-lon');
		var elMap=$(".repres-list-wrap.map");
		var elList=$(".repres-list-wrap.list");	
		createMap(lat, lon, 18);
		if(elMap.is(":hidden")){
			elMap.show();
			elList.hide();
			$(".repres-filter-type-link.active").removeClass("active");
			$(".repres-filter-type-link.map").addClass("active");						
		}		
	});
	/*Клик по ссылке О нас открываем модалку и добавляет к ссылке класс active*/
	$("body").on("click", ".header-center-left-link.about-us, .header-center-right-link.geo, .header-center-right-link.basket, .header-center-right-link.profile, .header-center-right-link.search", function(){
		var element=$(this);
		if(element.next(".header-modal").length < 1) return false;
		if(element.hasClass("active")) {			
			element.removeClass("active");
			if(element.next(".header-modal").is(":visible")) element.next(".header-modal").fadeOut(200);
			if(element.hasClass("basket")){
				$("body").removeClass("fixed");
			}
		}
		else {
			element.addClass("active");
			if(element.next(".header-modal").is(":hidden")) element.next(".header-modal").fadeIn(200);
			if(element.hasClass("basket")){
				$("body").addClass("fixed");
				$(".modal-basket-goods").jScrollPane();
			}
		}
		return false;
	});
	$(document).mouseup(function (e){
		if(!$(".header-modal, .modal-search-list").is(e.target) && $(".header-modal, .modal-search-list").has(e.target).length === 0) {
			if($(".header-modal, .modal-search-list").is(":visible")) {
				$(".header-modal, .modal-search-list").fadeOut(0, function(){
					$("body").removeClass("fixed");
					$(".modal-basket-goods").jScrollPane();
				});
			}
			var el=$(".header-center-left-link, .header-center-right-link");
			if(el.hasClass("active")) el.removeClass("active");
		}
	});
	$("body").on("click", ".modal-close", function(){
		var parent=$(this).parent(".header-modal");
		if(parent.prev("a").hasClass("active")) parent.prev("a").removeClass("active");
		if(parent.is(":visible")) parent.fadeOut(200);
	});

	/*удаление товара из корзины*/
	$("body").on("click", ".modal-basket-item-desc-top-delete", function(){
		var element=$(this).parents(".modal-basket-item");
		element.remove();
		$(".modal-basket-goods").jScrollPane();
	});

	/*Модальное окно Все представители в Москве*/
	$("body").on("click", ".modal-geo-all-close, #modal-geo-all", function(){
		$("#modal-geo-all").fadeOut(200, function(){
			$("body").removeClass("fixed");
		});
	});
	$("body").on("click", ".modal-geo-all-content", function(e){
		e.stopPropagation();
	});
	$("body").on("click", ".modal-geo-more", function(){
		var element=$("#modal-geo-all");
		if(element.is(":hidden")) {
			element.fadeIn(200);
			$(".modal-geo").fadeOut(200);
			$(".modal-geo-all-list").jScrollPane();
			$("body").addClass("fixed");
		}
	});

	/*Модальное окно Введите название города*/
	$("body").on("click", ".modal-change-city-close, #modal-change-city", function(){
		$("#modal-change-city").fadeOut(200, function(){
			if($(".header-center-mob-menu").is(":hidden")){
				$("body").removeClass("fixed");
			}
			
		});
	});

	$("#modal-change-city").swipe(function(e){
		if(e=="right" || e=="left"){
			$("#modal-change-city").fadeOut(300);
			if($(".header-center-mob-menu").is(":hidden")) $('body').removeClass("fixed");
		}
	}, {preventDefault: false});

	$("body").on("click", ".modal-change-city-content", function(e){
		e.stopPropagation();
	});
	$("body").on("click", ".modal-geo-change-city", function(){
		var element=$("#modal-change-city");
		if(element.is(":hidden")) {
			element.fadeIn(200);
			$(".modal-geo").fadeOut(200);
			$("body").addClass("fixed");
		}
	});

	/*Всплытие окна при вводе в input при поиске товаров*/
	$('body').on("input", ".form-field-input.search", function(){
		var text=$(this).val();
		if(text.length >= 3){
			$(".modal-search-list").fadeIn(200, function(){
				$(".modal-search-list").jScrollPane();
			});			
		}
		else{
			$(".modal-search-list").fadeOut(200);
		}
	});
	$("body").on("click", ".modal-search-item", function(){
		var text=$(this).text();
		var parent=$(this).parents(".form-field");
		$(".form-field-input.search").val(text);
		$(".modal-search-list", parent).fadeOut(200);
	});

	/*Всплытие окна для смены города*/
	$('body').on("input", ".form-field-input.change-city", function(){
		var text=$(this).val();
		if(text.length >= 3){
			$(".modal-city-list").fadeIn(200);
			$(".modal-city-list").jScrollPane();
		}
		else{
			$(".modal-city-list").fadeOut(200);
		}
	});
	$("body").on("click", ".modal-city-item", function(){
		var text=$(this).text();
		var parent=$(this).parents(".form-field");
		$(".modal-city-list", parent).fadeOut(200);
		$("#modal-change-city").fadeOut(200);
		$(".header-center-right-link-span.city").text(text);
		if($(".header-center-mob-menu").is(":hidden")) $('body').removeClass("fixed");
		return false;
	});
	$("body").on("click", ".modal-change-city-item", function(){
		var text=$(this).text();
		$("#modal-change-city").fadeOut(200);
		$(".header-center-right-link-span.city").text(text);
		if($(".header-center-mob-menu").is(":hidden")) $('body').removeClass("fixed");
		return false;
	});

	/*работа футера в мобильной версии*/
	$("body").on("click", ".footer-item-head", function(){
		var flag=false;
		if($(window).width() <= 960) flag=true;
		if(flag==true){
			var element=$(this);
			var list=element.next(".footer-item-wrap");
			var arrow=$(".footer-item-head-arrow", element);
			$(".footer-item-wrap").slideUp(200);
			if(list.is(":hidden")) list.slideDown(200, function(){
				if(!arrow.hasClass("active")) arrow.addClass("active");
			});
			$(".footer-item-head-arrow").removeClass("active");
			
		}
	});

	/*Аккордион в мобильном меню*/
	$("body").on("click", ".header-center-mob-menu-item-name", function(){
		var submenu=$(this).next(".header-center-mob-menu-item-list");
		var arrow=$(this).children(".header-center-mob-menu-item-name-arrow");
		if(submenu.is(":hidden")) {
			submenu.slideDown(300);
			arrow.addClass("active");
		}
		else{
			submenu.slideUp(300);
			arrow.removeClass("active");
		}
	});

	$("body").on("click", ".header-center-mob-menu-item-link.sub", function(){
		var parent=$(this);
		var submenu=$(".header-center-mob-menu-item-list-sub", parent);
		if(submenu.is(":hidden")) submenu.slideDown(300);
		else submenu.slideUp(300);
	});

	$("body").on("click", ".header-center-mob-icon.menu", function(){
		var container=$(".header-center-mob-menu");
		var menu=$(".header-center-mob-menu-wrap");
		if(container.is(":hidden")){
			container.fadeIn(300);
			menu.animate({"left":"0"},300);
			$("body").addClass("fixed");
		}
	});
	$("body").on("click", ".header-center-mob-menu-top-close, .header-center-mob-menu", function(){
		var container=$(".header-center-mob-menu");
		var menu=$(".header-center-mob-menu-wrap");
		if(container.is(":visible")){
			container.fadeOut(300);
			menu.animate({"left":"-100%"},300);
			$("body").removeClass("fixed");
		}
	});

	$(".header-center-mob-menu-top, .header-center-mob-menu-geo, .header-center-mob-menu-items, .header-center-mob-menu-order").swipe(function(e){
		if(e=="left"){
			$(".header-center-mob-menu-wrap").animate({"left": "-100%"},300);
			$(".header-center-mob-menu").fadeOut(300);
			$('body').removeClass("fixed");
		}
	}, {preventDefault: false});

	$("body").on("click", ".header-center-mob-menu-wrap", function(e){e.stopPropagation()});

	$("body").on("click", ".header-center-mob-menu-geo", function(){
		var modal=$("#modal-change-city");
		if(modal.is(":hidden")) modal.fadeIn();
		$("body").addClass("fixed");
	});

	/*Открытие модального окна поиска в мобильной версии*/
	$("body").on("click", ".header-center-mob-icon.search", function(){
		var modal=$(".header-center-mob-search");
		if(modal.is(":hidden")) {
			modal.fadeIn(300);
			$("body").addClass("fixed");
		}
	});
	$("body").on("click", ".header-center-mob-search-close", function(){
		var modal=$(".header-center-mob-search");
		if(modal.is(":visible")) {
			modal.fadeOut(300);
			$("body").removeClass("fixed");
		}
	});
	$(".header-center-mob-search").swipe(function(e){
		if(e=="right" || e=="left"){
			$(".header-center-mob-search").fadeOut(300);
			$('body').removeClass("fixed");
		}
	}, {preventDefault: false});

	/*Замена фото в событиях*/
	function changeImgEvent(width, element){
		if(width <= 530)var img=element.attr("data-mobile");
		else if(width > 530)var img=element.attr("data-desctop");
		element.attr("src", img);
	}
	$(window).on("resize", function(){
		var width=$(this).width();
		var element=$('.main-page-events-img');
		changeImgEvent(width, element);
	});
	changeImgEvent($(window).width(), $('.main-page-events-img'));
	
	/*Страница ВХОД, РЕГИСТРАЦИЯ, ВОССТАНОВЛЕНИЕ ПАРОЛЯ и валидация полей*/
	var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	var required=[/*'login', 'pass', 'name', 'surname', 'email', 'promo', 'phone', 'city'*/];//валидация на пустые поля
	var email=[/*'email'*/];//валидация на корректность email

	function validate(parent){
		var flagError=false;
		for(var i=0; i<email.length; i++){
			if($(".form-field-input."+email[i], parent).length > 0){
				var element=$(".form-field-input."+email[i], parent);
				if(regEmail.test(element.val()) == false){
					element.next(".form-field-error").text("Введите корректный email").show();
					element.addClass("error");
					flagError=true;
				}
			}
		}
		for(var i=0; i<required.length; i++){
			if($(".form-field-input."+required[i], parent).length > 0){
				var element=$(".form-field-input."+required[i], parent);
				if(element.val()==""){
					element.addClass("error");
					element.next(".form-field-error").text("Это поле является обязательным").show();
					flagError=true;
				}
			}
		}
		return flagError;
	}

	for(var i=0; i<required.length; i++){
		if($(".form-field-input."+required[i]).length > 0){
			var element=$(".form-field-input."+required[i]);
			$("body").on("input", element, function(){
				if($(this).val().length >= 1){
					$(this).removeClass("error");
					$(this).next(".form-field-error").hide();
					if($(this).hasClass("pass")){
						var parent=$(this).parents(".form-field-wrap");
						$(".form-field-visible-pass", parent).fadeIn(200);
					}
				}
				else{
					$(this).addClass("error");
					$(this).next(".form-field-error").text("Это поле является обязательным").show();
					if($(this).hasClass("pass")){
						var parent=$(this).parents(".form-field-wrap");
						$(".form-field-visible-pass", parent).fadeOut(200);
					}
				}
			});
		}
	}
	$("body").on("click", ".form-field-visible-pass-icon", function(){
		var elementClick=$(this);
		var parent=elementClick.parents(".form-field-wrap");
		var input=$(".form-field-input", parent);
		var hint=elementClick.next(".form-field-visible-pass-hint");
		if(elementClick.hasClass("hide")){
			input.attr("type", "text");
			elementClick.removeClass("hide").addClass("visible");
			hint.text("Скрыть пароль");
		}
		else if(elementClick.hasClass("visible")){
			input.attr("type", "password");
			elementClick.removeClass("visible").addClass("hide");
			hint.text("Показать пароль");
		}
	});
	$("body").on("submit", ".form-field", function(){
		var parent=$(this);
		if(validate(parent)==true) return false;
	});


	/*Пользовательский селект*/

	$("body").on("click", ".select-wrap", function(){
		var parent=$(this).parents(".select");
		var arrow=$(".select-arrow", parent);
		var modal=$(".select-modal", parent);
		if(!arrow.hasClass("active")) arrow.addClass("active");
		else arrow.removeClass("active");
		if(modal.is(":hidden")) modal.fadeIn(200);
		else modal.hide();
	});
	$("body").on("click", ".select-modal-item, .select-modal-color", function(e){
		var parent=$(this).parents(".select");		
		var arrow=$(".select-arrow", parent);
		var modal=$(".select-modal", parent);
		var input=$(".select-name-input", parent);
		var span=$(".select-span", parent);		
		var text=$(this).attr("data-text");	
		input.val(text);
		span.text(text);	
		if(!arrow.hasClass("active")) arrow.addClass("active");
		else arrow.removeClass("active");
		if(modal.is(":hidden")) modal.fadeIn(200);
		else modal.hide();		
		e.stopPropagation();
	});
	$(document).mouseup(function (e){
		if(!$(".select-modal").is(e.target) && $(".select-modal").has(e.target).length === 0) {
			if($(".select-modal").is(":visible")) {
				$(".select-modal").hide();
				$(".select-arrow").removeClass("active");
			}
		}
	});
	
	/*Оформление заказа*/

	$('body').on('click', '.order-steps-step-head-span', function(){
		var element=$(this);
		var stepData=element.parents('.order-steps-step.data');
		var stepForm=stepData.prev('.order-steps-step.form');
		if(element.hasClass('step-1')) var parent=element.parents('.order-steps-step-1');
		else if(element.hasClass('step-2')) var parent=element.parents('.order-steps-step-2');
		var formParent=parent.parents('.order-steps-form');
		var head=parent.prev('.order-steps-form-head-wrap');		
		$('.order-steps-step.form', formParent).hide();
		$('.order-steps-form-head-wrap', formParent).removeClass('active');
		stepData.hide();
		stepForm.show();
		head.show();
		head.addClass('active');

		if(element.hasClass('step-1')){
			var step2=$('.order-steps-step-2', formParent);
			step2.prev('.order-steps-form-head-wrap').hide();
			$('.order-steps-step.data', step2).show();
			$('html, body').animate({//автоскролл к след шагу
		      scrollTop: $('.order-steps-step-1', formParent).offset().top
		    }, 500);
		} else if(element.hasClass('step-2')){
			var step1=$('.order-steps-step-1', formParent);
			step1.prev('.order-steps-form-head-wrap').hide();
			$('.order-steps-step.data', step1).show();
			$('html, body').animate({//автоскролл к след шагу
		      scrollTop: $('.order-steps-step-2', formParent).offset().top
		    }, 500);
		}
	});

	$(".order-steps-basket-list-wrap").jScrollPane();
	$("body").on("click", ".order-steps-step-completion-comment", function(){
		$(this).next(".form-field-label").show().focus();
		$(this).hide();
	});

	function order(parent, parentList, nextStep){
		var headInput=$('.form-field-input.head', parentList);
		var headRadio=$('.form-field-radio.head:checked', parentList);
		var rowsInput=$('.form-field-input.row', parentList);
		var colsInput=$('.form-field-input.col', parentList);
		$('.order-steps-step-info', parent).html('');
		if(headInput.length > 0)
			$('.order-steps-step-head-name-span', parent).text(headInput.val());

		if(headRadio.length > 0)
			$('.order-steps-step-head-name-span', parent).text(headRadio.attr('data-name'));

		if(rowsInput.length > 0){
			var rowsSpan='';
			if(rowsInput.length > 1){
				for(var i=0; i < rowsInput.length; i++){
					if(rowsInput[i].value != '')
						rowsSpan+='<span class="order-steps-step-info-span">'+rowsInput[i].value+'</span>';
				}
			}
			else{
				rowsSpan='<span class="order-steps-step-info-span">'+rowsInput.val()+'</span>';
			}			
			$('.order-steps-step-info', parent).append(rowsSpan);
		}
		if(colsInput.length > 0){
			var colsList='';
			for(var i=0; i < colsInput.length; i++){
				if(colsInput[i].value != '')
					colsList+=colsInput[i].value+', ';
			}
			colsList=colsList.substring(0, colsList.length - 2);
			$('.order-steps-step-info', parent).append('<span class="order-steps-step-info-span">'+colsList+'</span>');
		}
		$(".order-steps-step.form", parent).hide();//скрывает форму
		parent.prev(".order-steps-form-head-wrap").hide();//скрывает заголовок
		
		$(".order-steps-step.data", parent).show();//показывает свернутую инфу

		$(".order-steps-step.form", nextStep).show();//открывает форму на след шаге
		nextStep.prev(".order-steps-form-head-wrap").addClass("active"); //active присваивает дополнительные стили к заголовку
	}

	var face='individual';
	$("body").on('click', '.form-field-wrap.organization', function(){
		$('.order-steps-form.individual').hide();
		$('.order-steps-form.organization').show();
		face='organization';
	});
	$("body").on('click', '.form-field-wrap.individual', function(){
		$('.order-steps-form.organization').hide();
		$('.order-steps-form.individual').show();
		face='individual';
	});

	$("body").on("click", ".button-link.step-1", function(){
		var parent=$(this).parents(".order-steps-step-1");		
		var formParent=parent.parents('.order-steps-form');
		var parentList=$('.form-field-list', parent); //блок внутри которого ищем заполненные поля
		var nextStep=$(".order-steps-step-2", formParent); //блок следующего шага
		var head=nextStep.prev('.order-steps-form-head-wrap', formParent);
		var dataStep=$('.order-steps-step.data', nextStep);
		if(head.is(':hidden')) head.show();
		if(dataStep.is(':visible')) dataStep.hide();
		order(parent, parentList, nextStep);		

		$('html, body').animate({//автоскролл к след шагу
	      scrollTop: $('.order-steps-step-1', formParent).offset().top
	    }, 500);
		
		return false;
	});
	$("body").on("click", ".button-link.step-2", function(){		
		var parent=$(this).parents(".order-steps-step-2");
		var formParent=parent.parents('.order-steps-form');
		var parentList=$('.form-field-list', parent); //блок внутри которого ищем заполненные поля
		var nextStep=$(".order-steps-step-3");
		var head=nextStep.prev('.order-steps-form-head-wrap', formParent);		
		var dataStep=$('.order-steps-step.data', nextStep);
		if(head.is(':hidden')) head.show();
		if(dataStep.is(':visible')) dataStep.hide();
		order(parent, parentList, nextStep);		

		$('html, body').animate({
	      scrollTop: $('.order-steps-step-2', formParent).offset().top
	    }, 500);
		
		return false;
	});

	/*Открытие/закрытие элементов фильтра в каталоге*/
	$("body").on("click", ".catalog-menu-item-head", function(){
		var parent=$(this).parents(".catalog-menu-item");
		var list=$(".catalog-menu-item-list", parent);
		var arrow=$(".catalog-menu-item-head-arrow", parent);
		if(list.is(":hidden")) list.slideDown(300);
		else list.slideUp(300);
		if(arrow.hasClass("active")) arrow.removeClass("active");
		else arrow.addClass("active");
	});	

	var galleryThumbs = new Swiper('.gallery-thumbs', { 
		/*loop: true,   */     
      freeMode: true,      
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
		    0: {
		      slidesPerView: 3,
		      spaceBetween: 12
		    },
		    960: {
		      slidesPerView: 4,
		      spaceBetween: 5
		    },
		    1300: {
		      slidesPerView: 5, 
		      spaceBetween: 15
		    }
		}
    });   
    var galleryTop = new Swiper('.gallery-top', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },      
      thumbs: {
        swiper: galleryThumbs
      }, 
    });

    galleryTop.on('slideNextTransitionStart',function(){    	
    	galleryThumbs.slideNext();
    });
    galleryTop.on('slidePrevTransitionStart',function(){    	
    	galleryThumbs.slidePrev();
    });

    $("#lightgallery, .sert-list-wrap").lightGallery();

	$(".catalog-menu").swipe(function(e){
		if(e=="right" || e=="left"){
			if($(window).width() <= 960){
				$(".catalog-menu").fadeOut(300);
				$('body').removeClass("fixed");
			}			
		}
	}, {preventDefault: false});

	$("body").on("click", ".catalog-menu-head-mobile-close", function(){
		$(".catalog-menu").fadeOut(300);
		$('body').removeClass("fixed");
	});

	$("body").on("click", ".catalog-head-filter-mobile-button.first", function(){
		if($(".catalog-menu").is(":hidden")) {
			$(".catalog-menu").fadeIn(300);
			$('body').addClass("fixed");
		}
	});
	$(window).on("resize", function(){
		if($(this).width() > 960) $(".catalog-menu").removeAttr("style");
	});

	/*Вкладки в карточке товара*/
	$("body").on("click", ".details-tabs-span", function(){
		var element=$(this);
		var current=null;
		$(".details-tabs-span.active").removeClass("active");
		element.addClass("active");
		if(element.hasClass("first")) {
			current="first";
			next="last";
			if($(".details-block-"+current).is(":hidden")){
				$(".details-block-"+current).show();
				$(".details-block-"+next).hide();
			}
		}
		else if(element.hasClass("last")) {
			current="last";
			next="first";
			if($(".details-block-"+current).is(":hidden")){
				$(".details-block-"+current).show();
				$(".details-block-"+next).hide();
			}
		}
	});

	$("body").on("click", ".button-link.modal", function(){
		$("#modal-report").fadeIn(300);
		return false;
	});
	$("body").on("click", ".modal-report-close, #modal-report", function(){
		$("#modal-report").fadeOut(300);
		$("#modal-report .form-field-input").val("");
	});
	$("body").on("click", ".modal-report-content", function(e){e.stopPropagation()});

	/*fixed-content*/	
	$(window).on("scroll", function(){
		if($('.in-basket-wrap').length > 0){
			var elementTop = $('.in-basket-wrap').offset().top + $('.in-basket-wrap').height();
			var scrollTop=$(this).scrollTop();
			if(scrollTop >= elementTop){
				if($('.fixed-content').is(":hidden"))
					$('.fixed-content').slideDown(200);						
			}
			else{
				if($('.fixed-content').is(":visible"))
					$('.fixed-content').slideUp(200);
			}
		}		
	});

	/*страница с сертификатами*/
	$("body").on("click", ".sert-menu-item", function(){
		var element=$(this);
		var id="#sert-list-"+element.attr("data-page");
		$(".sert-menu-item").removeClass("active");
		element.addClass("active");
		$(".sert-list").hide();
		$(id).show();
	});

	/*Представители на карте*/
	$("body").on("click", ".repres-filter-type-link", function(){
		var element=$(this);
		var elMap=$(".repres-list-wrap.map");
		var elList=$(".repres-list-wrap.list");
		if(element.hasClass("map")){
			if(elMap.is(":hidden")){
				var lat=element.attr('data-lat');
				var lon=element.attr('data-lon');
				elMap.show();
				elList.hide();				
				createMap(lat, lon, 14);
			}
		}
		else if(element.hasClass("list")){
			if(elList.is(":hidden")){
				elMap.hide();
				elList.show();
			}
		}
		$(".repres-filter-type-link.active").removeClass("active");
		element.addClass("active");
		return false;
	});

	/*Фильтрация городов представителей*/

	$(".repres-filter-city .form-field-input.search").quicksearch(".repres-filter-city .modal-search-item", {
		"onAfter": function(){
			$(".modal-search-list").jScrollPane();
		}
	});
});