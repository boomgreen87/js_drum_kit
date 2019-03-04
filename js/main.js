(() => {
	console.log("I'm workin' hea!");

	function playSound(event) {
		// debugger;
		
		// Select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		// Debugging / Error Handling
		// If we don't have a matching audio element, then kill the function
		if (!audio) { return; } //Return stops code execution

		//Rewind audio on every click and make it play
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playSound);
})();