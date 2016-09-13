var consulta = window.matchMedia('(max-width: 730px)');
	consulta.addListener(mediaQuery);

var $burgerButton = document.getElementById('burger-button');
var $menu = document.getElementById('menu');

function toggleMenu(){
	$menu.classList.toggle('active');
};

function hideMenu(){
	$menu.classList.add('active');

};

function showMenu(){
	$menu.classList.remove('active');
};

function mediaQuery(){
	if (consulta.matches){

		console.log('se cumplio la condicion');

		$burgerButton.addEventListener('touchstart', toggleMenu);
	}else{

		$burgerButton.removeEventListener('touchstart', toggleMenu);
		console.log('no se cumplio la condicion');
	}
}

mediaQuery();

// carga de imagenes

var bLazy = new Blazy({
          selector: 'img, iframe'
});

// hammer para movimientos touch

var $body = document.body;

var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);