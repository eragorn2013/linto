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

	/*Страница ВХОД*/
	$('#auth .form-field-input.login').on('input', function(){
		var text=$(this).val();
		if(text.length >= 1) {
			$(this).addClass("border").removeClass("error");
			$(this).next(".form-field-error").hide();
		}
		else {
			$(this).removeClass("border").addClass("error");
			$(this).next(".form-field-error").show();
		}
	});
	$('#auth .form-field-input.pass').on("input", function(){
		var text=$(this).val();
		var parent=$(this).parents(".form-field-wrap");
		if(text.length >= 1){
			$(this).removeClass("error");
			$(this).next(".form-field-error").hide();
			$(".form-field-visible-pass", parent).fadeIn(200);
		}
		else {
			$(this).addClass("error");
			$(this).next(".form-field-error").show();
			$(".form-field-visible-pass", parent).fadeOut(200);
		}
	});

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

	$("#auth .form-field").on("submit", function(){
		var parent=$(this);
		var login=$(".form-field-input.login", parent);
		var pass=$(".form-field-input.pass", parent);
		var errorLogin=login.next(".form-field-error");
		var errorPass=pass.next(".form-field-error");
		var flagError=false;
		if(login.val()==""){
			login.addClass("error");
			errorLogin.show();
			flagError=true;
		}
		if(pass.val()==""){
			pass.addClass("error");
			errorPass.show();
			flagError=true;
		}
		if(flagError==true) return false;
	});
	
});


