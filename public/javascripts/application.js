$(function() {
	var faye_client = new Faye.Client('http://localhost:9292/faye');
	faye_client.subscribe('/chat' , function(data) {
		eval(data);
	});
});
