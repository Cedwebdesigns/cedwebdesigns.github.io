/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

$(document).ready(function(){
	$(".btn.btn-primary.rounded.scrolling").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

function logsubmit(event){
	event.preventDefault();
	
	var name = document.getElementById("fname").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("msgmsg").value;
	var mobile =document.getElementById("mobile").value;
	const today = new Date(); 
	
	var my_text = 'Hi Cedrick, looks like someone is interested in creating a website!%0A Date: '+today.toString()+'%0A Name: '+name +'%0A Mobile: '+mobile+ '%0A E-Mail: '+email + '%0A - Message: '+msg;
	
	var chat_id = 418435641;
	var token = '5818402846:AAHAED7JZ0Oc5h_v9s4-B6lfE9OqKQOZkww'; // from botfather
	
	var url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='+my_text+'&parse_mode=html';

	let request = new XMLHttpRequest();
	request.open("GET", url);
	request.send();
	
	console.log("Message sent");
};

window.onload = function() {
	var form = document.querySelector("form");
	form.onsubmit = logsubmit.bind(form);
};

