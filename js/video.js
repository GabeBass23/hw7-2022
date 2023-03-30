var video = document.getElementsByClassName('video')[0];
var volumeVal = 1;

window.addEventListener("load", function() {
	video.load();
	video.autoplay = false;
	video.loop = false;
	
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume = volumeVal;
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slider").addEventListener("mouseup", function() {
	volume = document.querySelector("#slider");
	volumeVal = volume.value/100;
	video.volume = volumeVal;
	document.querySelector("#volume").innerText = volume.value + "%";
	console.log("The current value is ", volume.value/100);
	console.log(document.querySelector("#volume"));
});

document.querySelector("#slider").addEventListener("click", function() {
	volume = document.querySelector("#slider");
	volumeVal = volume.value/100;
	video.volume = volumeVal;
	console.log("The current value is ", volume.value/100);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 10/9;
	console.log("Speed up video")
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow down video")
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {

	if(video.duration > video.currentTime + 10){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Skip ahead");
	console.log("Video current time is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		document.querySelector("#mute").innerText = "Mute";
		video.muted = false;
		console.log("Unmute");
	}
	else{
		document.querySelector("#mute").innerText = "Unmute";
		video.muted = true;
		console.log("Mute");
	}
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});


