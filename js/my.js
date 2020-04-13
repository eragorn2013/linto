$(document).ready(function(){
	/*Клик по ссылке О нас открываем модалку и добавляет к ссылке класс active*/
	$(".header-center-left-link.about-us, .header-center-right-link.geo, .header-center-right-link.basket, .header-center-right-link.profile, .header-center-right-link.search").on("click", function(){
		var element=$(this);
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
	$(".modal-close").on("click", function(){
		var parent=$(this).parent(".header-modal");
		if(parent.prev("a").hasClass("active")) parent.prev("a").removeClass("active");
		if(parent.is(":visible")) parent.fadeOut(200);
	});

	/*удаление товара из корзины*/
	$(".modal-basket").on("click", ".modal-basket-item-desc-top-delete", function(){
		var element=$(this).parents(".modal-basket-item");
		element.remove();
		$(".modal-basket-goods").jScrollPane();
	});

	/*Модальное окно Все представители в Москве*/
	$(".modal-geo-all-close, #modal-geo-all").on("click", function(){
		$("#modal-geo-all").fadeOut(200, function(){
			$("body").removeClass("fixed");
		});
	});
	$(".modal-geo-all-content").on("click", function(e){
		e.stopPropagation();
	});
	$(".modal-geo-more").on("click", function(){
		var element=$("#modal-geo-all");
		if(element.is(":hidden")) {
			element.fadeIn(200);
			$(".modal-geo").fadeOut(200);
			$(".modal-geo-all-list").jScrollPane();
			$("body").addClass("fixed");
		}
	});

	/*Модальное окно Введите название города*/
	$(".modal-change-city-close, #modal-change-city").on("click", function(){
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

	$(".modal-change-city-content").on("click", function(e){
		e.stopPropagation();
	});
	$(".modal-geo-change-city").on("click", function(){
		var element=$("#modal-change-city");
		if(element.is(":hidden")) {
			element.fadeIn(200);
			$(".modal-geo").fadeOut(200);
			$("body").addClass("fixed");
		}
	});

	/*Всплытие окна при вводе в input при поиске товаров*/
	$('.form-field-input.search').on("input", function(){
		var text=$(this).val();
		if(text.length >= 3){
			$(".modal-search-list").fadeIn(200);
			$(".modal-search-list").jScrollPane();
		}
		else{
			$(".modal-search-list").fadeOut(200);
		}
	});
	$(".form-field").on("click", ".modal-search-item", function(){
		var text=$(this).text();
		var parent=$(this).parents(".form-field");
		$(".form-field-input.search").val(text);
		$(".modal-search-list", parent).fadeOut(200);
	});

	/*Всплытие окна для смены города*/
	$('.form-field-input.change-city').on("input", function(){
		var text=$(this).val();
		if(text.length >= 3){
			$(".modal-city-list").fadeIn(200);
			$(".modal-city-list").jScrollPane();
		}
		else{
			$(".modal-city-list").fadeOut(200);
		}
	});
	$(".form-field").on("click", ".modal-city-item", function(){
		var text=$(this).text();
		var parent=$(this).parents(".form-field");		
		$(".modal-city-list", parent).fadeOut(200);
		$("#modal-change-city").fadeOut(200);
		$(".header-center-right-link-span.city").text(text);
		if($(".header-center-mob-menu").is(":hidden")) $('body').removeClass("fixed");
		return false;
	});
	$(".modal-change-city-item").on("click", function(){
		var text=$(this).text();
		$("#modal-change-city").fadeOut(200);
		$(".header-center-right-link-span.city").text(text);
		if($(".header-center-mob-menu").is(":hidden")) $('body').removeClass("fixed");
		return false;
	});

	/*работа футера в мобильной версии*/
	$(".footer-item-head").on("click", function(){
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
	$(".header-center-mob-menu-item-name").on("click", function(){
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

	$(".header-center-mob-menu-item-link.sub").on("click", function(){
		var parent=$(this);
		var submenu=$(".header-center-mob-menu-item-list-sub", parent);
		if(submenu.is(":hidden")) submenu.slideDown(300);
		else submenu.slideUp(300);
	});

	$(".header-center-mob-icon.menu").on("click", function(){
		var container=$(".header-center-mob-menu");
		var menu=$(".header-center-mob-menu-wrap");
		if(container.is(":hidden")){
			container.fadeIn(300);
			menu.animate({"left":"0"},300);
			$("body").addClass("fixed");
		}
	});
	$(".header-center-mob-menu-top-close, .header-center-mob-menu").on("click", function(){
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

	$(".header-center-mob-menu-wrap").on("click", function(e){e.stopPropagation()});

	$(".header-center-mob-menu-geo").on("click", function(){
		var modal=$("#modal-change-city");
		if(modal.is(":hidden")) modal.fadeIn();
		$("body").addClass("fixed");
	});

	/*Открытие модального окна поиска в мобильной версии*/
	$(".header-center-mob-icon.search").on("click", function(){
		var modal=$(".header-center-mob-search");
		if(modal.is(":hidden")) {
			modal.fadeIn(300);
			$("body").addClass("fixed");
		}
	});
	$(".header-center-mob-search-close").on("click", function(){
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

	var required=['login', 'pass', 'name', 'surname', 'email', 'promo', 'phone', 'city'];//валидация на пустые поля
	var email=['email'];//валидация на корректность email

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
			element.on("input", function(){
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
	$(".form-field-visible-pass-icon").on("click", function(){
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
	$(".form-field").on("submit", function(){
		var parent=$(this);		
		if(validate(parent)==true) return false;
	});


	/*Пользовательский селект (ввод номера телефона)*/

	$(".form-field-phone-select").on("click", function(){
		var parent=$(this).parents(".form-field-phone");
		var arrow=$(".form-field-phone-select-arrow", parent);
		var modal=$(".form-field-phone-select-modal", parent);
		if(!arrow.hasClass("active")) arrow.addClass("active");
		else arrow.removeClass("active");
		if(modal.is(":hidden")) modal.fadeIn(200);
		else modal.hide();
	});
	$(".form-field-phone-select-modal-item").on("click", function(e){
		var parent=$(this).parents(".form-field-phone");
		var regionInput=$(".form-field-phone-input-region", parent);
		var regionSpan=$(".form-field-phone-select-span", parent);
		var arrow=$(".form-field-phone-select-arrow", parent);
		var modal=$(".form-field-phone-select-modal", parent);
		var value=$(this).attr("data-region");
		if(!arrow.hasClass("active")) arrow.addClass("active");
		else arrow.removeClass("active");
		if(modal.is(":hidden")) modal.fadeIn(200);
		else modal.hide();
		regionInput.val(value);
		regionSpan.text(value);
		$(".form-field-input.phone", parent).focus();
		e.stopPropagation();
	});
	$(document).mouseup(function (e){
		if(!$(".form-field-phone-select-modal").is(e.target) && $(".form-field-phone-select-modal").has(e.target).length === 0) {
			if($(".form-field-phone-select-modal").is(":visible")) {
				$(".form-field-phone-select-modal").hide();
				$(".form-field-phone-select-arrow").removeClass("active");
			}			
		}
	});
	$(".form-field-input.phone").mask("(000) 000-00-00", {	    
	    clearIfNotMatch: true
	});

	/*Оформление заказа*/

	$(".order-steps-step-completion-comment").on("click", function(){
		$(this).next(".form-field-label").show().focus();
		$(this).hide();
	});

	$(".button-link.step-1").on("click", function(){
		var parent=$(this).parents(".order-steps-step-1");
		if(validate(parent) == false){
			var name=$(".form-field-input.name", parent).val();
			var email=$(".form-field-input.email", parent).val();
			var region=$(".form-field-phone-input-region", parent).val();
			var phone=$(".form-field-input.phone", parent).val();
			var nextStep=$(".order-steps-step-2");

			$(".order-steps-step.form", parent).hide();
			parent.prev(".order-steps-form-head-wrap").hide();
			$(".order-steps-step-head-name-span", parent).text(name);
			$(".order-steps-step-info-span.phone", parent).text(region + phone);
			$(".order-steps-step-info-span.email", parent).text(email);
			$(".order-steps-step.data", parent).show();

			$(".order-steps-step.form", nextStep).show();
			nextStep.prev(".order-steps-form-head-wrap").addClass("active");
		}
		return false;
	});
	$(".button-link.step-2").on("click", function(){
		var parent=$(this).parents(".order-steps-step-2");
		if(validate(parent) == false){
			var city=$(".form-field-input.city", parent).val();
			var delivery=$(".form-field-radio:checked", parent).attr("data-name");
			var street=$(".form-field-input.street", parent).val();
			var house=$(".form-field-input.house").val();
			var room=$(".form-field-input.room").val();
			var nextStep=$(".order-steps-step-3");

			$(".order-steps-step.form", parent).hide();
			parent.prev(".order-steps-form-head-wrap").hide();
			$(".order-steps-step-head-name-span", parent).text(delivery);
			var address=city;
			if(street) address+=", "+street;
			if(house) address+=", "+house;
			if(room) address+=", "+room;
			$(".order-steps-step-info-span.address").text(address);
			$(".order-steps-step.data", parent).show();

			$(".order-steps-step.form", nextStep).show();
			nextStep.prev(".order-steps-form-head-wrap").addClass("active");
		}
		return false;
	});
});


