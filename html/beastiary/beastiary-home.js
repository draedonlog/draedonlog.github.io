function generateCards() {
	const obj = JSON.parse(creatures);
	
	// Creates the card
	for (let i = 0; i < obj.characters.length; i++) {
        if (!obj.characters[i].file.includes("secret")) {
		    const card = document.createElement("a");
		    card.href = "/html/beastiary/creature.html?name=" + obj.characters[i].file;
		    // Adds the faction border
		    card.classList.add(obj.characters[i].fact);
		    // Creates the portrait
		    const portrait = document.createElement("img");
		    portrait.src = "assets/beastiary/" + obj.characters[i].file + ".jpg";
		    portrait.classList.add("portrait")
		    card.appendChild(portrait);
		    // Creates the name label
		    const label = document.createElement("span");
		    label.classList.add("menu-label")
		    label.innerHTML = obj.characters[i].name;
		    card.appendChild(label);
		    // Creates the brief info section
		    const info = document.createElement("div");
		    info.classList.add("info");
		    info.innerHTML = "<hr>Status: ".bold() + obj.characters[i].status.italics() + "<br>"
		    + "Origin: ".bold() + obj.characters[i].origin.italics() + "<br>"
		    + "Race: ".bold() + obj.characters[i].race.italics() + "<hr>";
		    label.appendChild(info);
		    // Creates the description section
		    const desc = document.createElement("p");
		    desc.innerHTML = obj.characters[i].desc + "<br>" + "<br>";
		    info.appendChild(desc);
	
	
		    // Adds to the card list
		    const element = document.getElementById("content");
		    element.appendChild(card);
        }
	}
}

let history = [10];
let foundSecret1 = false;
let foundSecret2 = false;
let foundSecret3 = false;
let foundSecret4 = false;
let foundSecret5 = false;
let code1 = ["resistance", "pyranus", "resistance", "demanatus", "unaligned", "godly", "godly", "leviathan", "resistance", "godly"];
let code2 = ["pyranus", "pyranus", "pyranus", "pyranus", "pyranus", "pyranus", "unaligned", "godly", "pyranus", "demanatus"];
let code3 = ["resistance", "godly", "resistance", "pyranus", "leviathan", "resistance", "pyranus", "demanatus", "godly", "resistance"];
let code4 = ["godly", "godly", "resistance", "pyranus", "leviathan", "resistance", "pyranus", "demanatus", "godly", "resistance"];
let code5 = ["godly", "godly", "resistance", "pyranus", "leviathan", "resistance", "pyranus", "demanatus", "godly", "resistance"];

function secretCode() {
	var code1Success = true;
	var code2Success = true;
    var code3Success = true;
    var code4Success = true;
    var code5Success = true;
	for (i = 0; i < 10; i++) {
		if (history[i] != code1[i]) {
			code1Success= false;
		}
		if (history[i] != code2[i]) {
			code2Success= false;
		}
        if (history[i] != code3[i]) {
			code3Success= false;
		}
        if (history[i] != code4[i]) {
			code4Success= false;
		}
        if (history[i] != code5[i]) {
			code5Success= false;
		}
	}
	if (!foundSecret1 && code1Success) { // Code 1 entered successfully
		foundSecret1 = true;
		generateSecretCard("secretEclipse");
	}
    if (!foundSecret2 && code2Success) { // Code 2 entered successfully
		foundSecret2 = true;
		generateSecretCard("secretPurge");
	}
    if (!foundSecret3 && code3Success) { // Code 3 entered successfully
		foundSecret3 = true;
		generateSecretCard("secretVal");
	}
    if (!foundSecret4 && code4Success) { // Code 4 entered successfully
		foundSecret4 = true;
		generateSecretCard("secretVoid");
	}
    if (!foundSecret5 && code5Success) { // Code 5 entered successfully
		foundSecret5 = true;
		generateSecretCard("secretSun");
	}
    if (foundSecret1 && foundSecret2 && foundSecret3 && foundSecret4 && foundSecret5) { // All secrets found
        const consoleLog = document.getElementById("consLog");
        consoleLog.style.display = "inline-block";
    }
}

function hideShowType(id, faction) {
	var toHide = document.getElementsByClassName(faction);
	var hidden = false;
	var button = document.getElementById(id);
	if (button.style.opacity == .4) {
		hidden = true;
		button.style.opacity = 1;
	}
	else {
		button.style.opacity = .4;
	}
	
	for (i = 0; i < 9; i++) {
		history[i] = history[i + 1];
	}
	history[9] = faction;
	secretCode();
	
	for (i = 0; i < toHide.length; i++) {
		if (hidden) {
			toHide[i].style.display = "block";
		}
		else {
			toHide[i].style.display = "none";
		}
	}
}

function generateSecretCard(secretName) {
	// Creates the hidden cards
    const obj = JSON.parse(creatures);
	for (let i = 0; i < obj.characters.length; i++) {
        if (obj.characters[i].file.match(secretName)) {
		    const card = document.createElement("a");
		    card.href = "/html/beastiary/creature.html?name=" + obj.characters[i].file;
		    // Adds the faction border
		    card.classList.add(obj.characters[i].fact);
		    // Creates the portrait
		    const portrait = document.createElement("img");
		    portrait.src = "assets/beastiary/" + obj.characters[i].file + ".jpg";
		    portrait.classList.add("portrait")
		    card.appendChild(portrait);
		    // Creates the name label
		    const label = document.createElement("span");
		    label.classList.add("menu-label")
		    label.innerHTML = obj.characters[i].name;
		    card.appendChild(label);
		    // Creates the brief info section
		    const info = document.createElement("div");
		    info.classList.add("info");
		    info.innerHTML = "<hr>Status: ".bold() + obj.characters[i].status.italics() + "<br>"
		    + "Origin: ".bold() + obj.characters[i].origin.italics() + "<br>"
		    + "Race: ".bold() + obj.characters[i].race.italics() + "<hr>";
		    label.appendChild(info);
		    // Creates the description section
		    const desc = document.createElement("p");
		    desc.innerHTML = obj.characters[i].desc + "<br>" + "<br>";
		    info.appendChild(desc);
	
	
		    // Adds to the card list
		    const element = document.getElementById("content");
		    element.appendChild(card);
        }
	}
}

function validateLog() {
    console.log(document.getElementById("consLog").value + "\n");
}