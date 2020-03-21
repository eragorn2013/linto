$(document).ready(function(){
	/*Клик по ссылке О нас открываем модалку и добавляет к ссылке класс active*/
	$(".header-center-left-link.about-us, .header-center-right-link.geo").on("click", function(){
		var element=$(this);
		if(element.hasClass("active")) {
			element.removeClass("active");
			if(element.next(".modal").is(":visible")) element.next(".modal").fadeOut(200);
		}
		else {
			element.addClass("active");
			if(element.next(".modal").is(":hidden")) element.next(".modal").fadeIn(200);
		}
		return false;
	});
	$(document).mouseup(function (e){
		if(!$(".modal").is(e.target) && $(".modal").has(e.target).length === 0) {
			$(".modal").fadeOut(200);
			var el=$(".header-center-left-link, .header-center-right-link");
			if(el.hasClass("active")) el.removeClass("active");
		}
	});
	$(".modal-close").on("click", function(){
		var parent=$(this).parent(".modal");
		if(parent.prev("a").hasClass("active")) parent.prev("a").removeClass("active");
		if(parent.is(":visible")) parent.fadeOut(200);
	});
});