$(document).ready(function(){
	/*Клик по ссылке О нас открываем модалку и добавляет к ссылке класс active*/
	$(".header-center-left-link.about-us, .header-center-right-link.geo, .header-center-right-link.basket, .header-center-right-link.profile, .header-center-right-link.search").on("click", function(){
		var element=$(this);
		if(element.hasClass("active")) {
			element.removeClass("active");
			if(element.next(".header-modal").is(":visible")) element.next(".header-modal").fadeOut(200);
		}
		else {
			element.addClass("active");
			if(element.next(".header-modal").is(":hidden")) element.next(".header-modal").fadeIn(200);
			if(element.hasClass("basket"))
				$(".modal-basket-goods").jScrollPane();
		}
		return false;
	});
	$(document).mouseup(function (e){
		if(!$(".header-modal, .modal-search-list").is(e.target) && $(".header-modal, .modal-search-list").has(e.target).length === 0) {
			if($(".header-modal, .modal-search-list").is(":visible")) {
				$(".header-modal, .modal-search-list").fadeOut(0, function(){
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
			$("body").removeClass("fixed");
		});
	});
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
		return false;
	});
	$(".modal-change-city-item").on("click", function(){
		var text=$(this).text();
		$("#modal-change-city").fadeOut(200);
		$(".header-center-right-link-span.city").text(text);
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
});


