/* 

I|B Studio

*/

jQuery(document).ready(function($) {

	'use strict';


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });



        $(".b1").click(function () {
            $(".pop").fadeIn(300);
            
        });
		
		$(".b2").click(function () {
            $(".pop2").fadeIn(300);
            
        });
		
		$(".b3").click(function () {
            $(".pop3").fadeIn(300);
            
        });

        $(".pop > span, .pop").click(function () {
            $(".pop").fadeOut(300);
        });
		
		$(".pop2 > span, .pop2").click(function () {
            $(".pop2").fadeOut(300);
        });
		
		$(".pop3 > span, .pop3").click(function () {
            $(".pop3").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

});

// Efeito maquina de escrever

var div = document.getElementById('maq');
var textos = [ 'Marketing digital & SEO', 'Web desing & Websites' ];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = 0;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);