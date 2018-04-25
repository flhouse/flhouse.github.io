$(function() {

	//Toggle-mnu//
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").slideToggle();
	});

	//$(".toggle-mnu").click(function () {
		//$(this).toggleClass("on");
		//$(".hidden-mnu").animate({width: 'toggle'});
		//return false;
	//});

	//Instafeed//
	var userFeed = new Instafeed({get: 'user',
		limit:60,
		resolution:"standard_resolution",
		sortBy: 'none',
		template: '<div class="flex"><a href="{{image}}"><img src="{{image}}" alt="{{caption}}"/><div class="insta_descr_div"><span class="insta_descr_span"><i class="fas fa-heart"></i>{{likes}} <i class="fas fa-comment"></i>{{comments}}</span></div></a></div>',
		userId: '2406703867',
		accessToken: '2406703867.2e25692.a8a9eafc63f74cb08c345e6fbd4bdabb'
	});
	userFeed.run();

	//MagnificPopup//
	$(".top-popup").magnificPopup();

	$(".popup").magnificPopup({
		type: 'image',
		delegate: 'a',
		gallery: {
			enabled: true
		}
	});

	/*Service*/
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
	});

	//Circle-up//
	$(".circle-up a").mPageScroll2id();
	$(".scroll a").mPageScroll2id();
	$(".mnu a").mPageScroll2id();
	$(".hidden-mnu a").mPageScroll2id();

	//Button up//
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$(".circle-up").addClass('active'); 
		}
		else{
			$(".circle-up").removeClass('active');
		}
	});

	//Min height//
	function heightDetect() {
		$("#top").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#project-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("В течении 15 мин с Вами свяжется наш менеджер. Благодарим за доверие!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#main-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("В течении 15 мин с Вами свяжется наш менеджер. Благодарим за доверие!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll//
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});	





