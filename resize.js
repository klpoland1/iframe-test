function sendHeight(){
	document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() { parent.postMessage(JSON.stringify({ subject:
	"lti.frameResize", height: document.getElementById('container').offsetHeight + 350}), "*"); }, 0); } );
}
