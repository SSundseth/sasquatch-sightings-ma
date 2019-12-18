var NUM_FILES = 30;

function loadImg() {
	var i = Math.floor(Math.random() * NUM_FILES);
	var imgUrl = 'images/'+i+'.jpg';

	var mainImg = document.getElementById('mainImg');
	mainImg.src = imgUrl;
}

function loadGallery() {
	var container = document.getElementById("imgContainer");

	var html = "";

	for (var i=0; i <= NUM_FILES; i++) {
		html += "<div class='col-lg-3 col-md-4 col-6'>";
		html += "<a href='#' class='d-block mb-4 h-100'>";
		html += "<img class='img-fluid img-thumbnail' src='images/"+i+".jpg' alt=''>";
		html += "</a></div>";
	}

	container.innerHTML = html;


}
