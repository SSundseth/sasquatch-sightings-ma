var NUM_FILES = 30;

function loadImg() {
	var i = Math.floor(Math.random() * NUM_FILES);
	var imgUrl = 'images/'+i+'.jpg';

	var mainImg = document.getElementById('mainImg');
	mainImg.src = imgUrl;
}

