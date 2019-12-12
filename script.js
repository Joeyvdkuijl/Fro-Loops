let menukaart = [
    "Snij de hamblokjes Rasp de kaas Meng de hamblokjes en de gemalen kaas",
    "Snij de spinazie in stukjes, dan mix je het met de room in een bol Dan meng je de spinazie met room",
    "Snij het gehakt in stukjes en maak je tot een klein gehaktballetje, en mix gehaktballetjes met de tomatensaus. Rasp de kaas en meng de tomatensaus met gehaktballetjes met de kaas."
];
let menukaart2 = [
    "Snij de spinazie in stukjes en meng het met de tomatensaus, rasp de kaas.En meng dat ook met de spinazie en tomatensaus", 
    "Mix de room met doperwten en tomatensaus."
];
let menukaart3 = [
    "Meng de courgette met de tomatensaus.",
    "Snij de courgette in plakjes."
];
let menukaart4 = [
    " Rasp de kaas en meng de tomatensaus met gehaktballetjes met de kaas",
    " Snij het gehakt in stukjes en maak je tot een klein gehaktballetje, en mix gehaktballetjes met de tomatensaus. ",
    " macaroni met kaas."
];
let menukaart5 = [
    "Doe (soort)in het water.Laat 8 minuten koken.",
    "Zet een ruime hoeveelheid water op en wacht tot die kookt."
];  
let menukaart6 = [
    "Verse blaaderdeeg maken en dat doe je op de Mix.",
    "En dat doe je samen in de oven"
]

let count = 0;

while(count < menukaart6.length) {
    console.log( menukaart6[count]);
    count++
}
for (item of menukaart3) {
    console.log(item);
}
for (item in menukaart4) {
    console.log(item);
}

menukaart4.forEach(function (item) {
    console.log(item);

});


do {
    console.log(menukaart[count]);
    count++;
} while (count < menukaart.length)

count = 0;
while(count < menukaart.length) {
    console.log(menukaart[count]);
    count++

}

menukaart2.push("Snij de spek in blokjes en snij de spinazie in stukjes.Meng de spek blokjes en spinazie met de room.");
menukaart2.unshift("Snij de courgette in plakjes,Meng de courgette met de tomatensaus");
menukaart2.push("Mix de room met doperwten en pastasaus.");

for (let count = 0; count  < menukaart2.length; count++) {
    console.log(menukaart2[count]);
}
 



for (let count = 0; count  < menukaart5.length; count++) {
    console.log(menukaart5[count]);
}
 