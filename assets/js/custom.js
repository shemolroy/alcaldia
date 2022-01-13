$(document).ready(function(){ 

		/*********** Nav menu ***************/
		$('.open-close-icon').click(function(){
			$('.menubar-area').slideToggle();
			return false;
		});
		$('.bar-area').click(function(){
			$('.bar-area').toggleClass('open');
			return false;
		});
		$('.bar-area').click(function(){
			$('.right-sub-menu-area').toggleClass('right-menu');
			return false;
		});
		$('.canvas-icon').click(function(){
			$('.mobile-menu-area').toggleClass('offcanvas');
			return false;
		});
		$('.bar-area').click(function(){
			$('.right-menu-area').toggleClass('right-menu');
			return false;
		});
		$('.personal label').click(function(){
			$('.list-content-area1').toggleClass('list-toggle');
		});
		$('.QAnónima label').click(function(){
			$('.list-content-area11').toggleClass('list-toggle1');
		});
		 $('.button-list button').click(function(){
			$('.button-list button').removeClass("button-active");
			$(this).addClass("button-active");
		});
		$('.flag_link.es').click(function(){
			$('.flag_link.en').show();
			$('.flag_link.es').hide();
			return false;
		});
		$('.flag_link.en').click(function(){
			$('.flag_link.es').show();
			$('.flag_link.en').hide();
			return false;
		});
		 $('.dropdown-item').on('click', function(e){
            if(Modernizr.mq('screen and (max-width:767px)')) {
				e.preventDefault();
				$(this).next($('.dropdown-menu')).slideToggle();
			}
			return false;
        })
		$('.link-interest-slider-area').owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			autoplay:false,
			navText:['<img src="assets/images/icon/angle-right.png">','<img src="assets/images/icon/angle-left.png">'],
			dots:true,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1,
					margin:15,
				},
				768:{
					items:3,
					margin:15,
				},
				1200:{
					items:4
				}
			}
		})	
		$('.logo-slider').owlCarousel({
			loop:true,
			margin:40,
			nav:true,
			autoplay:true,
			navText:['<img src="assets/images/icon/angle-right.png">','<img src="assets/images/icon/angle-left.png">'],
			dots:false,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1,
					margin:15,
				},
				575:{
					items:3,
					margin:15,
				},
				1200:{
					items:5
				}
			}
		})
		$('.slider-all-area').owlCarousel({
			loop:true,
			margin:40,
			nav:true,
			autoplay:true,
			navText:['<img src="assets/images/icon/angle-right.png">','<img src="assets/images/icon/angle-left.png">'],
			dots:true,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1,
					margin:15,
					nav:false,
				},
				768:{
					items:2,
					margin:15,
					nav:false,
				},
				1200:{
					items:2
				}
			}
		})
		$('.opinion-slider').owlCarousel({
			loop:true,
			margin:40,
			nav:true,
			autoplay:true,
			navText:['<img src="assets/images/icon/angle-right.png">','<img src="assets/images/icon/angle-left.png">'],
			dots:true,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1,
					margin:15,
					nav:false,
				},
				768:{
					items:3,
					margin:15,
					nav:false,
				},
				1200:{
					items:4
				}
			}
		})
		var owl = $('.banner-slider-area');
		   owl.owlCarousel({
			 autoplay: true,
			 items: 1,
			 nav: true,
			 loop: true,
			 autoplayHoverPause: true,
			 dots:false,
			navText:['<img src="assets/images/icon/icon-right.png">','<img src="assets/images/icon/icon-left.png">'],
			responsive:{
				0:{
					items:1,
					margin:15,
				},
				768:{
					dots:true
				},
			}
		   });
		$('.play').on('click', function() {
		   owl.trigger('play.owl.autoplay', [1000]);
			 console.log('play');
		 })
		$('.stop').on('click', function() {
		   owl.trigger('stop.owl.autoplay');
				console.log('stop');
		 });
		$('.stop').click(function(){
			$('.play').show();
			$('.stop').hide();
			return false;
		});
		$('.play').click(function(){
			$('.stop').show();
			$('.play').hide();
			return false;
		});
			var check = $("#correo-electrónico").prop("checked");
			if(check){
				$("#correo-electrónico-item").addClass("activeTab");
			}
			
			//click on yes
			$("#correo-electrónico").on("click", function(){
				check = $(this).prop("checked");
				$("#correspondencia-fisica-item").removeClass("activeTab");
				$("#Otros-item").removeClass("activeTab");
				$("#correo-electrónico-item").addClass("activeTab");
				
			})
			$("#correspondencia-fisica").on("click", function(){
				check = $(this).prop("checked");
				$("#Otros-item").removeClass("activeTab");
				$("#correo-electrónico-item").removeClass("activeTab");
				$("#correspondencia-fisica-item").addClass("activeTab");
			})
			$("#Otros").on("click", function(){
				check = $(this).prop("checked");
				$("#correo-electrónico-item").removeClass("activeTab");
				$("#correspondencia-fisica-item").removeClass("activeTab");
				$("#Otros-item").addClass("activeTab");
				console.log(check);
			})
			$('.show-scrollTop').click(function() {
				$('html, body').animate({
				  scrollTop: 0
				}, 800);
				return false;
			});
			const form = document.querySelector('.default-form form');

				function insertAfter(newNode, referenceNode) {
				  this.insertBefore(newNode, referenceNode.nextElementSibling);
				  
				  return newNode;
				}
				class FieldValidator {
				  constructor(field) {
					this._field = field;
					this._error = null;
					
					this._onInvalid = this._onInvalid.bind(this);
					this._onInput = this._onInput.bind(this);
					this._onBlur = this._onBlur.bind(this);
					
					this.bindEventListeners();
				  }
				  
				  bindEventListeners() {
					this._field.addEventListener('invalid', this._onInvalid);
					this._field.addEventListener('input', this._onInput);
					this._field.addEventListener('blur', this._onBlur);
				  }
				  showError() {
					let errorNode;
					
					if (this._error !== null) {
					  return this.updateError();
					}
					
					this._error = document.createElement('div');
					this._error.className = 'help-block';
					this._error.innerHTML = this._field.validationMessage;
					
					this._field.setAttribute('aria-invalid', 'true');
					this._field.closest('.form-group').classList.add('has-error');
					
					insertAfter.call(this._field.parentNode, this._error, this._field);
				  }
				  updateError() {
					if (this._error === null) return;
					
					this._error.innerHTML = this._field.validationMessage;
				  }
				  hideError() {
					if (this._error !== null) {
					  this._error.parentNode.removeChild(this._error);
					  this._error = null;
					}

					this._field.removeAttribute('aria-invalid');
					this._field.closest('.form-group').classList.remove('has-error');
				  }
				  _onInvalid(event) {
					event.preventDefault();
				  }
				  _onInput(event) {
					if (this._field.validity.valid) {
					  this.hideError();
					} else {
					  this.updateError();
					}
				  }
				  _onBlur(event) {
					if ( ! this._field.validity.valid) {
					  this.showError();
					}
				  }
				}

				Array.prototype.slice.call(form.elements).forEach((element) => {
				  element._validator = new FieldValidator(element);
				});
				form.setAttribute('novalidate', true);
				form.addEventListener('invalid', (event) => {
				  event.preventDefault();
				  
				  event.target._validator.showError();
				}, true);
				form.addEventListener('submit', (event) => {
				  if ( ! form.checkValidity()) {
					event.preventDefault();
					
					form.querySelectorAll(':invalid')[0].focus();
					return;
				  }
				  
				  console.log('submit');
				  event.preventDefault();
				});
					
	
});
		/*********** contrast ***************/
		var contraste = 0;
		  function changeFilter() {
			switch(contraste) {
			  case 0:
				  document.getElementById("page-top").style.filter = "grayscale(100%)";
				  contraste ++;
				  break;
			  case 1:
				  document.getElementById("page-top").style.filter = "hue-rotate(90deg)";
				  contraste ++;
				  break;
			  case 2:
				  document.getElementById("page-top").style.filter = "invert(200%)";
				  contraste ++;
				  break;
			  case 3:
				  document.getElementById("page-top").style.filter = "none";
				  contraste = 0;
				  break;
			  }
		  }
		/*********** font size ***************/
		var $affectedElements = $(".main p,.main h1,.main h2,h3,h4,.main h5,li a,li,.main a,.main li span, span.someClass,header a"); // Can be extended, ex. $("div, p, span.someClass")

		// Storing the original size in a data attribute so size can be reset
		$affectedElements.each( function(){
		  var $this = $(this);
		  $this.data("orig-size", $this.css("font-size") );
		});

		$(".max-fontsize").click(function(){
		  changeFontSize(1);
			return false;
		})

		$(".min-fontsize").click(function(){
		  changeFontSize(-1);
			return false;
		})

		$("#btn-orig").click(function(){
		  $affectedElements.each( function(){
				var $this = $(this);
				$this.css( "font-size" , $this.data("orig-size") );
		   });
		})

		function changeFontSize(direction){
			$affectedElements.each( function(){
				var $this = $(this);
				$this.css( "font-size" , parseInt($this.css("font-size"))+direction );
			});
		};
			