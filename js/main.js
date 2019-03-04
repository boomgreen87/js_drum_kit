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

		// Grab the div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add("playing");
	}

	function removePlayingClass(event) {
		// debugger;
		if (event.propertyName !== "transform") {
			return;
		} else {
			//Remove the playing class here fom the active div
			console.log("Transition is done");
			event.target.classList.remove("playing");
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));
	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	window.addEventListener("keydown", playSound);
})();