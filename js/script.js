//на случай, если верну браузерные input-range
function RedrawOutput() {
	document.getElementById('id-filter-range-output').value='Цена: '+
	Math.min(document.getElementById('id-filter-range-1').value, document.getElementById('id-filter-range-2').value)+' руб. - '+
	Math.max(document.getElementById('id-filter-range-1').value, document.getElementById('id-filter-range-2').value)+' руб.';	 	
}

function isLocalStorageAvailable() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

//Адский ад. Нельзя ж так-то. Но разбираться с JS прямо сейчас времени точно нет. 
var mapLink = document.querySelector(".map-link");
var mapIFrame = document.querySelector(".map-iframe");

var feedbackLink = document.querySelector(".map-info-feedback");
var feedbackForm = document.querySelector(".form-feedback");

var searchLink = document.querySelector(".link-search");
var searchForm = document.querySelector(".form-search");

var entranceLink = document.querySelector(".link-entrance");
var entranceForm = document.querySelector(".form-entrance");

var basketLink = document.querySelector(".link-basket-full");
var basketForm = document.querySelector(".form-basket");


var darkenArea;

window.addEventListener("keydown", function (e) {
	if (e.keyCode === 27) {
		
		if (!(feedbackForm === null)) {
			if (feedbackForm.classList.contains("gllacy-flex-show")) {
			feedbackForm.classList.remove("gllacy-flex-show");   
			darkenArea.parentNode.removeChild(darkenArea);
			}  
			
			if (feedbackForm.classList.contains("effect")) {
					feedbackForm.classList.remove("effect");     					
			}		
		}

		if  (!(searchForm === null) && (searchForm.classList.contains("gllacy-block-show"))) {
			searchForm.classList.remove("gllacy-block-show");     
		}

		if  (!(entranceForm === null) && (entranceForm.classList.contains("gllacy-block-show"))) {
			entranceForm.classList.remove("gllacy-block-show");     
		}

		if  (!(basketForm === null) && (basketForm.classList.contains("gllacy-flex-show"))) {
			basketForm.classList.remove("gllacy-flex-show");     
		}
	}
});


if (!(mapLink === null) && !(mapIFrame === null))  {
	mapLink.addEventListener("dblclick", function (e) {	
		e.preventDefault();	    	
		mapIFrame.classList.toggle("map-iframe-hide");
		mapIFrame.classList.toggle("map-iframe-show");
	});
}


if (!(feedbackLink === null) && !(feedbackForm === null))  {
	 
	 var feedbackClose = feedbackForm.querySelector(".form-feedback-close"); 
	 if  (!(feedbackClose === null))  {
			feedbackClose.addEventListener("click", function (e) {
				e.preventDefault();
				if (feedbackForm.classList.contains("gllacy-flex-show")) {
					feedbackForm.classList.remove("gllacy-flex-show");     
					darkenArea.parentNode.removeChild(darkenArea);
				}		
				if (feedbackForm.classList.contains("effect")) {
					feedbackForm.classList.remove("effect");     					
				}		
			});
		}
  

   //учебный код просто для того, чтобы был, ибо в форме поля required и мну это нравится больше кода, который может написать JS-чайник.	
		feedbackForm.addEventListener("submit", function (e) {
			if (!feedbackForm['id-feedback-name'].value || !feedbackForm['id-feedback-email'].value || !feedbackForm['id-feedback-text'].value ) {
				e.preventDefault();
				console.log("Перед отправкой необходимо заполнить все поля формы: имя, адрес электронной почты и текст сообщения!");				
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


if (!(searchLink === null) && !(searchForm === null))  {
	searchLink.addEventListener("click", function (e) {
		e.preventDefault();
		searchForm.classList.add("gllacy-block-show");  
		searchForm[0].focus();
	});
}

if (!(entranceLink === null) && !(entranceForm === null))  {
	entranceLink.addEventListener("click", function (e) {
		e.preventDefault();	 
		entranceForm.classList.toggle("gllacy-block-hide");  
		entranceForm.classList.toggle("gllacy-block-show");  
		entranceForm[0].focus();
	});
}

if (!(basketLink === null) && !(basketForm === null))  {
	basketLink.addEventListener("click", function (e) {
		e.preventDefault();					
		basketForm.classList.toggle("gllacy-flex-hide");
		basketForm.classList.toggle("gllacy-flex-show");
	});
}