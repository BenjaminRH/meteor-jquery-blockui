Package.describe({
	summary: "The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX, without locking the browser."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files([
		'lib/jquery.blockUI.js'
		], 'client');
});