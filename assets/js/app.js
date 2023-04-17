$(function(){
    var autoPlayVideo = document.getElementById("myVideo");
    autoPlayVideo.myVideo = function() {
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
    }
});

$(document).ready(function () {

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 6000,
    })

    //contador numeros
    var counter = function() {
		
		$('.count-numbers').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ut-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.counter > h1').each(function(){
					var $this = $(this),
					num = $this.data('number');
					$this.animateNumber(
					{
						number: num,
						numberStep: comma_separator_number_step
					}, 10000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


    
});

// darkmode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
 }

// animação botão
 const botao = document.querySelector('botao');
 const mudar = document.getElementById('mudar');
 mudar.onclick = function() {
     mudar.classList.toggle('active');
     botao.classList.toggle('active');
 }