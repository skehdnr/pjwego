"use strict";
var app = app || {};
app = (() => {
	const WHEN_ERR = 'app js를 찾을수 없습니다.'
	let js;
	let mainHomejs;
	let run = () => {
		$.getScript('/resources/wegojs/cmm/router.js', () => {
			$.extend(new Session());
			onCreate();
		})
	}
	let init = () => {
		js = $.js();
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate = () => {
		init();
		$.when(
			$.getScript(mainHomejs)
		)
			.done(() => {
				mainHome.onCreate()
			})
			.fail(() => {
				alert(WHEN_ERR)
			})
	}
	return { run }
})();