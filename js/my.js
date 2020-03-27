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
		if(!$(".header-modal").is(e.target) && $(".header-modal").has(e.target).length === 0) {
			if($(".header-modal").is(":visible")) {
				$(".header-modal").fadeOut(0, function(){
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
});

/*Модальное окно Все представители в Москве*/
$(".modal-geo-all-close, #modal-geo-all").on("click", function(){
	$("#modal-geo-all").fadeOut(200);
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
	}
});
