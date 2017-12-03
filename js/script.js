function RedrawOutput() {
	document.getElementById('id-filter-range-output').value='Цена: '+
	Math.min(document.getElementById('id-filter-range-1').value, document.getElementById('id-filter-range-2').value)+' руб. - '+
	Math.max(document.getElementById('id-filter-range-1').value, document.getElementById('id-filter-range-2').value)+' руб.';	 	
}

var feedbackLink = document.querySelector(".map-info-feedback");
var feedbackForm = document.querySelector(".form-feedback");
var feedbackField = feedbackForm.querySelector(".form-feedback-name");
var feedbackClose = feedbackForm.querySelector(".form-feedback-close");

var darkenArea = document.createElement('div');

window.addEventListener("keydown", function (e) {
	if (e.keyCode === 27) {
		if (feedbackForm.classList.contains("gllacy-flex-show")) {
			feedbackForm.classList.remove("gllacy-flex-show");     
		}
		darkenArea.parentNode.removeChild(darkenArea);
	}
});


feedbackLink.addEventListener("click", function (e) {	
	e.preventDefault();	    
	darkenArea.className = "darken";
	document.body.appendChild(darkenArea);
	feedbackForm.classList.add("gllacy-flex-show");
	feedbackField.focus();
});

feedbackClose.addEventListener("click", function (e) {
	e.preventDefault();
	if (feedbackForm.classList.contains("gllacy-flex-show")) {
		feedbackForm.classList.remove("gllacy-flex-show");     
	}	
	darkenArea.parentNode.removeChild(darkenArea);
});