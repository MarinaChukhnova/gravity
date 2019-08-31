//SLIDER
var slider = {
	slides:['img/img3.jpg','img/img4.jpg'],
	frame:0, // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("scr").style.backgroundImage = "url("+image+")";
	},
	init: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.frame]);
	},
	left: function() { // крутим на один кадр влево
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},
	right: function() { // крутим на один кадр вправо
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	}
};
window.onload = function() { // запуск слайдера после загрузки документа
	slider.init();
	/*setTimeout(function() { // интервал для перелистывания картинок
	slider.right();
	} ,2000);*/
};

//BUTTON TOP
arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
      // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
 });


