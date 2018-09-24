$(function(){

	$(".top-main-nav .nav-item a").on("click", function(){
		$(this).parents(".navbar-nav").find("a.selected").removeClass("selected");
		$(this).toggleClass("selected");
	});

	var header = document.querySelector('.header');
	var headerw = header.clientWidth;
	var origOffsetY = header.offsetTop;
	function onScroll(e){
		window.scrollY >= origOffsetY ? header.classList.add('sticky'):header.classList.remove('sticky');
	}
	$(header).css("width", headerw+"px");
	document.addEventListener('scroll', onScroll);
	
	
});

