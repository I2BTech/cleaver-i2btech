// Loading Oswald WebFont
WebFontConfig = {
	google: { families: [ 'Oswald:700,300:latin' ] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();

// Colorful console.log
console.log('%c I2B Technologies ', 'background:#000; color:#f00');