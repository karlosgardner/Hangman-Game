

//grabbing an id
function grabbingId(element){
	var result = document.getElementById(element);
	return result;
}



var win = 1,			// wining score
	loss = 1,			// losing score
	guessRemaining = 8, // guess remaing ,
	computer = ["a", "b", "c", "d", "e", "f"]; //





           document.onkeyup = function(event){

	// cpu guessing number
	          var computerGuessingNumber = Math.floor(Math.random() * computer.length),

		// cpu guessing word
		randomWord = computer[computerGuessingNumber],

		//
		result = document.createTextNode(event.key + ", ");

		          grabbingId("typing").appendChild(result);


		if(randomWord === event.key){
			grabbingId("win").textContent = "Wins: " + win++;


			//     if win is equal or greater to one, then reset the guess
			if(win >= 1){

				grabbingId("guessRemaining").textContent = "Guess Left: " + 9;
				guessRemaining = 8;
			} // end of the if statement inside the if statement.

		}

		// if the letter is not equal, then desincrement the guess remaing by one
		else{

			grabbingId("guessRemaining").textContent = "Guess Left: " + guessRemaining--;


			if(guessRemaining <= -1){

				// adding 1 to loss every time that the user finished their 9 chances
				grabbingId("loss").textContent = "Loss: " + loss++;


				grabbingId("guessRemaining").textContent = "Guess Left: " + 9;
				guessRemaining = 8;


			}

		}

}
