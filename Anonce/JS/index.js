$(document).on('ready', function () {
	var player = document.querySelector('#audioPlayer');
	$(".fa-pause").hide();

    setTimeout(function () {
        $('.letter').addClass('loaded');
    }, 1);
});

$(".fa-play").on("click", function(event){
    	player.play();
	$(this).hide();
	$(".fa-pause").show();
});

$(".fa-pause").on("click", function(event){
	player.pause();
	$(this).hide();
	$(".fa-play").show();
});

$(".fa-stop").on("click", function(event){
	player.pause();
	player.currentTime = 0;
	$(".fa-pause").hide();
	$(".fa-play").show();
});

$(".fa-step-backward").on("click", function(event){
	player.currentTime = 0;
});

$(".fa-step-forward").on("click", function(event){
	
});    