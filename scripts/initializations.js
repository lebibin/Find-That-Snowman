/* ---------------------------
 *
 *		<?Initializations>
 *
 *----------------------------*/			

var listOfTd = document.getElementsByTagName("td"),
	scoreHold = document.getElementById("score"),
	shotsHold = document.getElementById("shots"),
	pauseHold = document.getElementById("pauseCount"),
	listOfInput = document.getElementsByTagName("input"),
	listOfImgs = document.getElementsByTagName("img"),
	targetObjImg = document.getElementById("targetObj"),
	timerHold = document.getElementById("timeCount"),
	listOfRandom = new Array(),
	objHitVar, objHitVar1, objHitVar2,
	startObjTimeout,
	rand, hitRand,
	objHitCheck, pauseCheck = false, timerCheck = false, pauseCount = 5,
	targetObj, noOfTargetObj = 0, difficulty = 3, roundNumber = 0, x = 3, s = 0, scoreMultiplier = 1, totalScore = 0, tries = 0, finalScore = 0,
	remainingTime, timeHold = 0,
	Seconds = 0, varTime = 16, levelTime = 16;
	
startOrResume = listOfInput[0];
startOrResume.setAttribute("onclick", "easy();");
listOfInput.item(3).setAttribute("onclick", "exitGame();");


/* ---------------------------
 *
 *	Candelaria, Kevin
 *	http://kev-dev.com
 *
 *----------------------------*/		