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
		 
const slidImg = document.querySelectorAll('.slider');
M.Slider.init(slidImg,{
	indicators:false, height:500			
});

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

var d = new Date();
var n = d.getFullYear();
document.getElementById("thnE").innerHTML = "&#169; Desain by Faaris HiFa | " + n;