$(document).ready(function(){
	$(".hire-me").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1}),
	$("ul.nav-pills li a").click(function(){$("ul.nav-pills li.active").removeClass("active"),$(this).parent("li").addClass("active")}),
	$(window).load(function(){var e=$(".grid-wrapper");e.isotope({filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1}}),
	$(".grid-controls li a").click(function(){$(".grid-controls .current").removeClass("current"),$(this).addClass("current");var i=$(this).attr("data-filter");return e.isotope({filter:i,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})}),
	$(".grid-wrapper").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),
	$(".navbar").sticky({topSpacing:0}),
	$("#main-menu").onePageNav({currentClass:"active",changeHash:!1,scrollThreshold:.5,scrollSpeed:750,filter:"",easing:"swing"}),
	$(".chart").waypoint(function(){$(this).easyPieChart({barColor:"#3498db",size:"150",easing:"easeOutBounce",onStep:function(e,i,a){$(this.el).find(".percent").text(Math.round(a))}})},{triggerOnce:!0,offset:"bottom-in-view"}),$.vegas("slideshow",{backgrounds:[{src:"img/slider/01.jpg",fade:1e3},{src:"img/slider/02.jpg",fade:1e3},{src:"img/slider/03.jpg",fade:1e3},{src:"img/slider/04.jpg",fade:1e3}]})("overlay",{src:"img/overlays/16.png"}),
	$("#vegas-next").click(function(){$.vegas("next")}),
	$("#vegas-prev").click(function(){$.vegas("previous")}),
	$("#name, #email, #message").blur(function () {$(this).css('border','0px solid #cc0000')}),
	$("#btn-send").click(function(){
		var x =document.getElementById('name').value
		var z = document.getElementById('message').value
		var y =document.getElementById('email').value
		var reg =/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;

		if ( x == ""){$('#name').css('border','2px solid #cc0000')
			return false};
		if ( y == ""){$('#email').css('border','2px solid #cc0000')
			return false};
		if ( z == ""){$('#message').css('border','2px solid #cc0000')
			return false};
		if ( reg.test(y) != true){$('#email').css('border','2px solid #cc0000')}
		else{
			var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	  		xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
	  		xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  		xmlhttp.onreadystatechange = function() {
	    	if (xmlhttp.readyState == 4) {
	       	 if(xmlhttp.status == 200) {alert('Mail sended!'), x = y = z = ''}
	       		else if(xmlhttp.status == 500) alert('Check apikey')
	       	 		else alert('Request error');
	       			}
	 		 }
	  		xmlhttp.send(JSON.stringify({'key': 'a_EDZ92rVPGI6cTAnHJ6Fw',
	   			'message': {
			       'from_email': 'Mail_from:' + y,
			       'to': [{'email': 'vova_denisov@bigmir.net', 'type': 'to'}],
			       'autotext': 'true',
			       'subject': 'Name:'+ x,
			       'html': 'Message:' + z
    		}})); 
  		}
	});
});

