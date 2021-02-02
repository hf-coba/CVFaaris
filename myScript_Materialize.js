// ==> Owl Carousel + FancyBox
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		center: true,
		responsiveClass:true,
		responsive:{
			0	:{ items:1, nav:true },
			600	:{ items:2 },
			1000:{ items:3 }
		}
	});
	
	$("a#ImgFancy").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});


// ==> Fungsi dari Materialize
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
	
const ttipBar = document.querySelectorAll('.tooltipped');
M.Tooltip.init(ttipBar);
 
const pralax = document.querySelectorAll('.parallax');
M.Parallax.init(pralax);

const Mtrial = document.querySelectorAll('.materialboxed');
M.Materialbox.init(Mtrial);
		 
const Dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(Dropdown,{
	coverTrigger: false
});
		 
const elems = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(elems, {
	scrollOffset: - 10
});
		 
const Crusel = document.querySelectorAll('.carousel');
M.Carousel.init(Crusel,{
	fullWidth: true, indicators: true
});
	 
const Klbsibel = document.querySelectorAll('.collapsible.expandable');
M.Collapsible.init(Klbsibel,{
	accordion: false
});

// ==> Fungsi button zoom text
function btnZoomText() {
    document.getElementById("text-zoom").classList.toggle("flow-text");
	document.getElementById("btnZoomA").classList.toggle("findbtn");
	document.getElementById("btnZoomB").classList.toggle("findbtn");
    var xbtnA = document.getElementById("btnZoomA");
		if (xbtnA.innerHTML === "Perbesar") { xbtnA.innerHTML = "Default"; } 
		else { xbtnA.innerHTML = "Perbesar"; }
	var xbtnB = document.getElementById("btnZoomB");
		if (xbtnB.innerHTML === "Perbesar Teks") { xbtnB.innerHTML = "Teks Default"; } 
		else { xbtnB.innerHTML = "Perbesar Teks"; }		
}

// ==> Fungsi text type write
window.addEventListener("load", function(){
  typewrite("Sec1", "Tentang ", true, 200);
  typewrite("Sec2", "Riwayat ", true, 200);
  typewrite("Sec3", "Sertifikat ", true, 200);
  typewrite("Sec4", "Informasi ", true, 200);
});


function typewrite (target, text, loop, speed) {
  // (A) SET DEFAULT OPTIONS
  
  target = document.getElementById(target);
  if (speed === undefined) { speed = 200; }
  if (loop === undefined) { loop = false; }
 
  // (B) DRAW TYPEWRITER
  let pointer = 0;
  let timer = setInterval(function(){
    pointer++;
    if (pointer <= text.length) {
      target.innerHTML = text.substring(0, pointer);
    } else {
      if (loop) { pointer = 0; }
      else { clearInterval(timer); }
    }
  }, speed);
}


// ==> Fungsi load map OSM
var map = L.map('map').setView([-7.34553,112.69120], 17);
var marker = L.marker([-7.34553,112.69120]).addTo(map);
var popup = marker.bindPopup('Ngelom Rolak 346');
popup.openPopup();
//geo:-7.34326,112.68577?z=17 batas kiri atas
//geo:-7.34813,112.69667?z=17 batas kanan bawah

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'open via © <a href="https://osm.org/go/txFIWeGvE-?layers=N&m=">OpenStreetMap</a>'
}).addTo(map);

// ==> Fungsi ambil Tahun via JS
var d = new Date();
var n = d.getFullYear();
document.getElementById("thnE").innerHTML = "&#169; Desain by Faaris HiFa | " + n;