let A = document.getElementById("ch");
let B = document.getElementById("ci");
let C = document.getElementById("cb");
let D = document.getElementById("nl-0");
let E = document.getElementById("nl-1");
let F = document.getElementById("nl-2");
let G = document.getElementById("nl-3");
let H = document.getElementById("nl-4");
let I = document.getElementById("nl-5");

let headers = [
    "North American Blizzard of 2006",
    "2006 Winter Olympics",
    "Libya's Independence",
    "Treaty of Paris 1763",
    "\"Tom and Jerry \"",
    "\"In the Mood\""
];
let images = [
    "img/blizzard.png",
    "img/torino.jpg",
    "img/libya.png",
    "img/treaty of paris.JPG",
    "img/tom and jerry.png",
    "img/in the mood.jpg"
];
let info = [
    "The North American blizzard of 2006 was a nor'easter that began on the evening of February 11, 2006. It dumped heavy snow across the Mid-Atlantic and New England states, from Virginia to Maine through the early evening of February 12, and ended in Atlantic Canada on February 13. The major cities from Baltimore to Boston received at least a foot of snow, with a second-highest amount of 26.9 inches (68 cm) in New York City, the (at the time) most since at least 1869, the start of record keeping, only broken by the January 2016 United States blizzard nearly 10 years later.",
    "The 2006 Winter Olympics, also known as Torino 2006, were a winter multi-sport event held from 10 to 26 February in Turin, Italy. Sports included Biathlon, Bobsleigh, Skeleton, Curling, Ice Hockey, Luge, Skaing, Skiing, and Snowboarding. Germany won this year, with 29 medals (11G, 12S, 6B). In second place was the United States, with 25 medals (9G, 9S, 7B), and Austria came in third with 23 medals (9G, 7S, &B).",
    "From 1943 to 1951, Libya was under Allied occupation. The British military administered the two former Italian Libyan provinces of Tripolitana and Cyrenaïca, while the French administered the province of Fezzan. In 1944, Idris returned from exile in Cairo but declined to resume permanent residence in Cyrenaica until the removal of some aspects of foreign control in 1947. Under the terms of the 1947 peace treaty with the Allies, Italy relinquished all claims to Libya.",
    "The Treaty of Paris, also known as the Treaty of 1763, was signed on 10 February 1763 by the kingdoms of Great Britain, France and Spain, with Portugal in agreement, following Great Britain and Prussia's victory over France and Spain during the Seven Years' War. Great Britain and France each returned much of the territory that they had captured during the war, but Great Britain gained much of France's possessions in North America.",
    "The first short, Puss Gets the Boot, was released onto the theatre circuit on February 10, 1940. Hanna and Barbera were told not to make any more shorts with these characters, but they were swayed by a letter sent to them asking for more shorts with a cat and a mouse. A studio contest held to rename both characters was won by animator John Carr, who suggested Tom the cat and Jerry the mouse.",
    "\"In the Mood\" is a popular big band-era jazz standard recorded by American bandleader Glenn Miller. \"In the Mood\" is based on the composition \"Tar Paper Stomp\" by Wingy Manone. The first recording under the name \"In the Mood\" was released by Edgar Hayes & His Orchestra in 1938. Glenn Miller's \"In the Mood\", with \"I Want to Be Happy\" on the B-side, became the best-selling swing instrumental."
];

function switchText(p){
    A.innerText = headers[p];
    B.src = images[p];
    C.innerText = info[p];
    D.classList.remove("active");
    E.classList.remove("active");
    F.classList.remove("active");
    G.classList.remove("active");
    H.classList.remove("active");
    I.classList.remove("active");
    document.getElementById("nl-" + p).classList.add("active");
}

function refresh(){
    window.location.reload();
}