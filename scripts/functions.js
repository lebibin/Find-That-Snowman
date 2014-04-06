/* ---------------------------
 *
 *		<?FUNCTIONS>
 *
 *----------------------------*/			

function resetAllTd() {
	targetObjImg.setAttribute("src", "assets/placeholder.png" );
	for (var i = 0; i < 180; i++) {
		listOfTd.item(i).setAttribute("style", "width: 50px; height: 50px; background-color: #DBE7F0;");
		if ( listOfTd.item(i).hasChildNodes() ) {
			listOfTd.item(i).setAttribute("id", "");
			listOfTd.item(i).removeChild(listOfTd.item(i).lastChild);
			}
		else;
	}
}

function generateRand() {
	return Math.floor(Math.random()*179);
}

function generateMoreRand() {
	return Math.floor(Math.random()*4);
}

function startGame() {
	x = difficulty;
	if ( timerCheck == false ) {
		remainingTime = levelTime;
		s++;
		timeHold = Seconds;
		Seconds++;
		s = Seconds;

		remainingTime -= Seconds;
		timerHold.value = remainingTime;
		listOfInput[2].setAttribute("onclick", "resetGame();");
		if ( (remainingTime%5)==0 )	{
			if ( pauseCheck == false ) {
				startOrResume.value = "Start";
				pause.setAttribute("onclick", "pauseGame();");
				startOrResume.setAttribute("onclick", "");
				objHitCheck = false, pauseCheck = false;
				resetAllTd();
				targetObj = generateMoreRand();
				hitRand = generateRand();
				var thumbHold, newImg = document.createElement("img"), imgSrcHold = "assets/snowman" + targetObj + ".png";
				newImg.setAttribute("src", imgSrcHold );
				targetObjImg.setAttribute("src", imgSrcHold );
				listOfTd[hitRand].appendChild(newImg);
				listOfTd[hitRand].setAttribute("id", "hit");
				generateMore();
				}
			else if ( pauseCheck == true )
				clearTimeout(startObjTimeout);
			else;
		}
		if ( Seconds == levelTime ){
			resetAllTd();
			timerCheck = true;
			clearTimeout(startObjTimeout);
		}
		
		startObjTimeout = setTimeout("startGame()", 1000);
	}
	else {
		roundNumber++;
		nextRound(roundNumber);
	}
}

function objHit(objHitVar) {
	if ( objHitVar.id == "hit" && objHitCheck == false && pauseCheck == false) {
		totalScore = parseInt(scoreHold.value) + scoreMultiplier;
		scoreHold.value = totalScore;
		objHitCheck = true;
		objHitVar.setAttribute("style", "background-color:green;");
	}
	else if ( pauseCheck == false && s!=0) {
	if ( totalScore > -1 ) {
		tries++;
		shotsHold.value = tries;
		objHitVar.setAttribute("style", "background-color:red;");
		}
	}
	else;
}

function pauseGame() {
	pauseHold.value = pauseCount;
	if ( pauseCount > 0 ) {
		pauseHold.value = --pauseCount;
		clearTimeout(startObjTimeout);
			for ( var i = 1; i < listOfImgs.length; i++ ) {
				listOfImgs[i].setAttribute("style", "-moz-animation-play-state:paused; -webkit-animation-play-state:paused; animation-play-state:paused;");
			}
		pauseCheck = true;
		startOrResume.value = "Resume";
		startOrResume.setAttribute("onclick", "resumeGame()");
		pause.setAttribute("onclick", "");
		}
	else {
		alert("Pause disabled.");
	}
	listOfInput[2].setAttribute("onclick", "resetGame();");
}

function resumeGame() {
	Seconds = s;
	for ( var i = 1; i < listOfImgs.length; i++ ) {
			listOfImgs[i].setAttribute("style", "-webkit-animation: fadeEffect 5s; -moz-animation: fadeEffect 5s; animation: fadeEffect 5s;");
		}
	pauseCheck = false;
	startOrResume.value = "Start";
	startOrResume.setAttribute("onclick", "");
	startGame();
	if ( pauseCount > 0 )
		pause.setAttribute("onclick", "pauseGame()");
}

function resetGame() {
	resetAllTd();
	clearTimeout(startObjTimeout);
	pauseCheck = false;
	startOrResume.value = "Start";
	startOrResume.setAttribute("onclick", "easy()");
	Seconds = 0;
	roundNumber = 0;
	difficulty = 3;
	pauseCount = 5;
	pauseHold.value = pauseCount;
	timerHold.value = 15;
	scoreHold.value = finalScore;
	pause.setAttribute("onclick", "");
}

function generateMore() {
	for ( var n = 0; n < Math.floor(x+Math.random()*(x*2)); n++) {
		var target = generateMoreRand();
			rand = generateRand();
		if ( rand != hitRand && target != targetObj && !listOfTd[rand].hasChildNodes() ) {
			var thumbHold, newImg = document.createElement("img"), imgSrcHold = "assets/snowman" + target + ".png";
			newImg.setAttribute("src", imgSrcHold );
			listOfTd[rand].appendChild(newImg);
		}
		else {
			n--;
			continue;
		}
	}
}

function exitGame() {
	if (confirm("Do you want to Exit the Game?"))
		window.close();
	else {
		clearTimeout(startObjTimeout);
	}
}

function easy() {
	pause.setAttribute("onclick", "pauseGame()");
	scoreHold.value = 0;
	shotsHold.value = 0;
	scoreMultiplier = 1;
	x = 3;
	levelTime = 16;
	startGame();
}

function medium() {
	scoreMultiplier = 2;
	difficulty = 10;
	levelTime = 21;
	startGame();
}

function hard() {
	scoreMultiplier = 3;
	difficulty = 30;
	levelTime = 26;
	startGame();
}

function extreme() {
	scoreMultiplier = 5;
	difficulty = 100;
	levelTime = 31;
	startGame();
}

function nextRound(x) {
	timerCheck = false;
	Seconds = 0;
	var message;
	if ( x == 1 ) {
		message = "EASY Difficulty Round CLEARED!\n\nPrepare, as the other Snowmen was sent by SNOW-EVIL to confuse you!\n\n\t-> Entering MEDIUM Difficulty Round. . .";
		alert(message);
		clearTimeout(startObjTimeout);
		medium();
	}
	else if ( x == 2 ) {
		message = "MEDIUM Difficulty Round CLEARED!\n\nPrepare, as SNOW-EVIL had sent even more Snowmen to confuse you!\n\n\t-> Entering HARD Difficulty Round. . .";
		alert(message);
		clearTimeout(startObjTimeout);
		hard();
	}
	else if ( x == 3 ) {
		message = "HARD Difficulty Round CLEARED!\n\nSNOW-EVIL has wreaked Havoc into Snow Land. He went all out into confusing you in finding the right Snowman! \n\n\t-> Entering EXTREME Difficulty Round. . .";
		alert(message);
		clearTimeout(startObjTimeout);
		extreme();
	}
	else {
	if ( totalScore < tries )
		finalScore = 0;
	else
		finalScore = Math.floor(totalScore-.5*tries);
		var endMessage = "EXTREME Difficulty Round CLEARED!\n\nCONGRATULATIONS, YOU'VE FINISHED THE GAME!\n\n\t-> Your Final Score was " + finalScore + "!\n\t-> Press OK to Continue . . .";
		alert(endMessage);
		clearTimeout(startObjTimeout);
		resetGame();
	}
};

function mouseOverEff(objHitVar1) {
	if ( !(objHitVar1.hasChildNodes()) ) {
	objHitVar1.setAttribute("style", "background-color:#9FC8E7; ");
	}
}

function mouseOutEff(objHitVar2) {
	if ( !(objHitVar2.hasChildNodes()) ) {
	objHitVar2.setAttribute("style", "background-color:#DBE7F0; ");
	}
}

/* ---------------------------
 *
 *	Candelaria, Kevin
 *	http://kev-dev.com
 *
 *----------------------------*/			