function isLocalStorageAvailable() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

var mapLink = document.querySelector(".map-link");
var mapIFrame = document.querySelector(".map-iframe");
var mapImg = document.querySelector(".map-img");

var feedbackLink = document.querySelector(".map-info-feedback");
var feedbackForm = document.querySelector(".form-feedback");

var darkenArea;

window.addEventListener("keydown", function (e) {
	if (e.keyCode === 27) {
		
		if (!(feedbackForm === null)) {
			if (feedbackForm.classList.contains("gllacy-flex-show")) {
				feedbackForm.classList.remove("gllacy-flex-show");   
				if (!(darkenArea === null)) {
					darkenArea.parentNode.removeChild(darkenArea);
				}
			}  
			
			if (feedbackForm.classList.contains("effect")) {
				feedbackForm.classList.remove("effect");     					
			}		
			if (feedbackForm.classList.contains("error")) {
				feedbackForm.classList.remove("error");     					
			}		
		}

	}
});


if (!(mapLink === null) && !(mapIFrame === null)  && !(mapImg === null))  {
	mapLink.addEventListener("dblclick", function (e) {	
		e.preventDefault();	    	
		mapIFrame.classList.toggle("map-hide");
		mapIFrame.classList.toggle("map-show");
		mapImg.classList.toggle("map-hide");
		mapImg.classList.toggle("map-show");
	});
}


if (!(feedbackLink === null) && !(feedbackForm === null))  {

	var feedbackClose = feedbackForm.querySelector(".form-feedback-close"); 
	if  (!(feedbackClose === null))  {
		feedbackClose.addEventListener("click", function (e) {
			e.preventDefault();
			if (feedbackForm.classList.contains("gllacy-flex-show")) {
				feedbackForm.classList.remove("gllacy-flex-show");     
				if (!(darkenArea === null)) {
					darkenArea.parentNode.removeChild(darkenArea);
				}
			}		
			if (feedbackForm.classList.contains("effect")) {
				feedbackForm.classList.remove("effect");     					
			}		
			if (feedbackForm.classList.contains("error")) {
				feedbackForm.classList.remove("error");     					
			}		
		});
	}

	feedbackForm.addEventListener("submit", function (e) {
		if (!feedbackForm['id-feedback-name'].value || !feedbackForm['id-feedback-email'].value || !feedbackForm['id-feedback-text'].value ) {
			e.preventDefault();	
			feedbackForm.classList.remove("error");
			feedbackForm.offsetWidth = feedbackForm.offsetWidth;		
			feedbackForm.classList.add("error");		
			feedbackForm['id-feedback-text'].focus();	
			// сonsole.log("Перед отправкой необходимо заполнить все поля формы: имя, адрес электронной почты и текст сообщения!");			
		} else { 				
			if (isLocalStorageAvailable()) {
				localStorage.setItem("gllacy-name", feedbackForm['id-feedback-name'].value);				
				localStorage.setItem("gllacy-email", feedbackForm['id-feedback-email'].value);							
			} 
		}
	});	 

	feedbackLink.addEventListener("click", function (e) {	
		e.preventDefault();	    
		darkenArea = document.createElement('div');
		darkenArea.className = "darken";
		document.body.appendChild(darkenArea);		

		feedbackForm.classList.add("effect");
		feedbackForm.classList.add("gllacy-flex-show");
		if (isLocalStorageAvailable()) {

			var storageName = localStorage.getItem("gllacy-name");  
			var storageEmail = localStorage.getItem("gllacy-email");  
			if ((storageName) && (storageEmail)) {
				feedbackForm['id-feedback-name'].value = storageName; 
				feedbackForm['id-feedback-email'].value = storageEmail; 
				feedbackForm['id-feedback-text'].focus();	
			} 		
			else {
				feedbackForm['id-feedback-name'].focus();	
			}
		} 
		else { 
			feedbackForm['id-feedback-name'].focus();	
		}
		
	});

}