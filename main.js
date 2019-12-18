var NUM_FILES = 2;

function loadImg() {
	var numFiles = 2;
	var i = Math.floor(Math.random() * numFiles);
	var imgUrl = 'images/'+i+'.jpg';

	var mainImg = document.getElementById('mainImg');
	mainImg.src = imgUrl;
}

