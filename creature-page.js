//Gets the url query
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlName = urlParams.get('name');

function generatePage() {
    const obj = JSON.parse(creatures);
    const i = (obj.characters).findIndex(checkName);
    console.log(obj.characters[i].name);
    console.log(urlName);
    
    // Creates the title block
    const title = document.createElement("h1");
    title.innerHTML = obj.characters[i].name;
    const titleBar = document.getElementById("titleBar");
    titleBar.appendChild(title);
        
    // Creates the threat indicator
    const threat = document.getElementById("threat");
    const position = (100 - parseInt(obj.characters[i].threat) * 10) + "% 0";
    threat.style["mask-position"] = position;
    threat.style["-webkit-mask-position"] = position;
    threat.src = "threat-10.jpg";
        
    // Creates the portrait
    const portrait = document.getElementById("portrait");
    const frame = document.getElementById("flip-contain");
    portrait.src = "assets/beastiary/" + obj.characters[i].file + ".jpg";
    if (obj.characters[i].alt === null || obj.characters[i].alt.length === 0) { // No alt picture
        frame.classList.add(obj.characters[i].fact + "-stat");
    }
    else { // Alt picture
        frame.classList.add(obj.characters[i].fact);
        frame.setAttribute("onclick","cardFlipper();");
        const alt_portrait = document.getElementById("alt-portrait");
        alt_portrait.src = "assets/beastiary/" + obj.characters[i].alt + ".jpg";
    }
        
    // Adds the intro block
    const introduction = document.createElement("p");
    introduction.innerHTML = "<strong>Full Name: </strong><em>" + obj.characters[i].full + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Aliases: </strong><em>" + obj.characters[i].aliases + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Occupations: </strong><em>" + obj.characters[i].occupations + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Race: </strong><em>" + obj.characters[i].race + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Origin: </strong><em>" + obj.characters[i].origin + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Gender: </strong><em>" + obj.characters[i].gender + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Age: </strong><em>" + obj.characters[i].age + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Companions: </strong><em>" + obj.characters[i].companions + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Enemies: </strong><em>" + obj.characters[i].enemy + "</em><br>";
    introduction.innerHTML = introduction.innerHTML + "<strong>Status: </strong><em>" + obj.characters[i].status + "</em><br><br>";
    const intro = document.getElementById("intro");
    intro.appendChild(introduction);
        
    // Adds the entry block
    const entry = document.createElement("p");
    entry.innerHTML = "<strong>Physical Description: </strong>" + obj.characters[i].physical + "<br><br>";
    entry.innerHTML = entry.innerHTML + "<strong>Entry: </strong>" + obj.characters[i].entry;
    const entryBlock = document.getElementById("entry-block");
    entryBlock.appendChild(entry);
            
    // Updates the next and prev
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    if (i == 0) {
        prev.href = "/html/beastiary/creature.html?name=" + obj.characters[obj.characters.length - 1].file;
        prev.innerHTML = prev.innerHTML + obj.characters[obj.characters.length - 1].name;
    }
    else {
        prev.href = "/html/beastiary/creature.html?name=" + obj.characters[i - 1].file;
        prev.innerHTML = prev.innerHTML + obj.characters[i - 1].name;
    }
    if (i == obj.characters.length - 1) {
        next.href = "/html/beastiary/creature.html?name=" + obj.characters[0].file;
        next.innerHTML = obj.characters[0].name + next.innerHTML;
    }
    else {
        next.href = "/html/beastiary/creature.html?name=" + obj.characters[i + 1].file;
        next.innerHTML = obj.characters[i + 1].name + next.innerHTML;
    }
}
    
function checkName(character) {
    return urlName == character.file;
}

function cardFlipper() {
    const card = document.getElementById("flip-card");
    card.classList.toggle("is-flipped");
}