$(document).ready(function () {
    setTimeout(function(){
        $("#popup").fadeIn("slow");
        
        $("#popup-content img").removeClass("rotate3d");
        
        $("#popup-content-show").click(function() {
            $("#popup-content").animate({height: 550});
            $("#popup-content-show").fadeOut();
            $("#popup-content #about-me").removeClass("about-me");
        });
    
        $("#popup-close").click(function() {
            $("#popup").fadeOut("slow");
        });    
    }, 3000);
    
    $("#mobile-button").click(function() {
        $("#main-nav #menu").slideDown();
        $("#main-logo").fadeOut("fast");
        $("#mobile-button").hide("fast");
        $("h1, .content, #button-more").animate({opacity: 0.25});
        $("#button-more").attr("disabled","disabled");
        $("#main-nav #menu-list").removeClass("menu-list li");
    });

    $("#mobile-button-close").click(function() {
        $("#main-nav #menu").css({height: "auto"}).slideUp();
        $("#mobile-button, #main-logo").fadeIn(1000);
        $("h1, .content, #button-more").animate({opacity: 1});
        $("#submenu1").slideUp();
        $("#arrow").removeClass("rotate");
        $("#button-more").removeAttr("disabled");
        $("#main-nav #menu-list").addClass("menu-list li");
        $("#contact-info").hide();
    });
    
    $("#submenu-button").click(function() {
        $("#submenu1").slideToggle();
        $("#arrow").toggleClass("rotate");
    });
    
    $("#button-more").click(function() {
        $("body").animate({scrollTop: $("#items-container").offset().top -20}, 1500);
    });
    
    $(document).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#pointer").fadeIn();
            } else {
            $("#pointer").fadeOut();
        }
    });
        
    $("#pointer").click(function() {
        $("body").animate({scrollTop: 0}, 500);
    });
    
    $(".carousel").carouFredSel({
        items: 1,
        responsive : true,
        scroll: {
            items: 1,
            fx: 'fade',
            duration: 1000,
            pauseOnHover: true
        }
    });
    
    $(document).scroll(function() {
        if ($(this).scrollTop() > $("#list-one").offset().top - 600) {
            $("#list-one").removeClass("list-one");
        } else {
            $("#list-one").addClass("list-one");
        }
    });
    
    $(document).scroll(function() {
        if ($(this).scrollTop() > $("#list-two").offset().top - 600) {
            $("#list-two").removeClass("list-two");
        } else {
            $("#list-two").addClass("list-two");
        }
    });
    
    $("#contact").click(function(){
        $("#menu").animate({height: 670});
        $("#main-nav #menu-list").addClass("menu-list li");
        $("#contact-info").delay(1000).fadeIn(1000);
    });
    
    $("#menu-back").click(function(){
        $("#contact-info").fadeOut("fast");
        $("#submenu1").slideUp();
        $("#menu").css({height: "auto"});
        $("#main-nav #menu-list").removeClass("menu-list li");
    });
    
    $("#contact-button-close").click(function(){
        $("#contact-info").fadeOut(1000);
        $("#button-more").removeAttr("disabled");
    });
    
    $(".input").focus(function(){
        $(this).parent().addClass("focus");
    }).blur(function(){
        if($(this).val() === ''){
            $(this).parent().removeClass("focus");
        }
    });
    
    $('#email').blur(function() {
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var email = pattern.test($(this).val());
		if(email) {
            $(this).removeClass("error").addClass("ok");
			$(this).next(".alert").text("Wprowadzono poprawny email.").removeClass("error").addClass("ok");
		}
		else {
            $(this).addClass("error").removeClass("ok");
			$(this).next(".alert").text("Wprowadź poprawny email!").removeClass("ok").addClass("error");
		}
    });
    
    $(".form-submit").click(function(e) {
			
        if($('#email').hasClass("ok")) {}
        else {
            e.preventDefault();
            alert("Wypełnij poprawnie formularz!");	
        }
    });
    
});