let apelsin = {
    nimi: "apelsin",
    varv: "oranž",
    kuju: "ümmargune",
    liik: "puuvili"
}

let banaan = {
    nimi: "banaan",
    varv: "kollane",
    kuju: "kumer",
    liik: "rohttaim"
}

let porgand = {
    nimi: "porgand",
    varv: "oranž",
    kuju: "koonus",
    liik: "juurvili"
}

function trykiLemmik(lemmik) {
    document.getElementById('sisu').innerHTML += `
    <div>
        Minu lemmik ${lemmik.liik} on ${lemmik.nimi} ja see on 
        ${lemmik.varv} ning ${lemmik.kuju}
    </div>
    `
}

//trykiLemmik(apelsin)
//trykiLemmik(banaan)
//trykiLemmik(porgand)

let lemmikud = [ apelsin, banaan, porgand ]

for (let i = 0; i < lemmikud.length; i++) {
    let objekt = lemmikud[i]
    trykiLemmik(objekt)
}
