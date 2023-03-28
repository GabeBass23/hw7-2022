var video = document.getElementsByClassName('video')[0];
var volumeVal = 1;

window.addEventListener("load", function() {
	video.load();
	video.autoplay = false;
	video.loop = false;
	
	console.log("Good job opening the window")
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
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 10/9;
	console.log(video.playbackRate * 100 + "%");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate * 100 + "%");
});

document.querySelector("#skip").addEventListener("click", function() {

	if(video.duration > video.currentTime + 10){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		document.querySelector("#mute").innerText = "Mute";
		video.muted = false;
	}
	else{
		document.querySelector("#mute").innerText = "Muted";
		video.muted = true;
	}
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});


