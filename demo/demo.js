document.addEventListener('DOMContentLoaded', function () {

	var mediaElements = document.querySelectorAll('video, audio'), i, total = mediaElements.length;

	for (i = 0; i < total; i++) {
		new MediaElementPlayer(mediaElements[i], {
			pluginPath: '../build/',
			renderers: ['flash_hls'],
			success: function (media) {
				media.addEventListener('loadedmetadata', function () {
					console.log('loaded');
				});
				media.addEventListener('onID3', function (e) {
					console.log('Flashls event', e);
				});
			}
		});
	}
});