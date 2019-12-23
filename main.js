var NUM_FILES = 92;
var NUM_VIDS = 8;

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
		html += "<div class='col-sm-2 col-xs-3'>";
		html += "<a href='#' class='d-block h-100'>";
		html += "<img class='img-thumbnail' src='images/"+i+".jpg' alt='' onclick='showModal(this);'>";
		html += "</a></div>";
	}

	container.innerHTML = html;


}

function showModal(el) {
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var modalImg = document.getElementById("img01");
	  modal.style.display = "block";
	  modalImg.src = el.src;

	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}

function showVidModal(el) {
	var modal = document.getElementById("myVidModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var modalImg = document.getElementById("vid01");
	  modal.style.display = "block";
	  modalImg.src = el.src;

	var span = document.getElementsByClassName("vidclose")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}

function loadVideos() {
	var container = document.getElementById("vidContainer");

	var html = "";

	for (var i=0; i < NUM_VIDS; i++) {
		html += "<div class='col-sm-6 col-6'>";
		html += "<video controls>";
		html += "<source src='videos/"+i+".mp4' type='video/mp4'>";
		html += "</video>";
		html += "</div>";
	}

	container.innerHTML = html;


}
