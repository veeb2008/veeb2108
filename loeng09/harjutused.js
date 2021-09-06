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

let riis = {
    nimi: "riis",
    varv: "valge",
    kuju: "tera",
    liik: "teravili"
}

let viinamari = {
    nimi: "viinamari",
    varv: "roheline",
    kuju: "ümmargune",
    liik: "mari"
}

function trykiLemmik(lemmik) {
    document.getElementById('sisu').innerHTML += `
    <div class="puuvili">
        <div>
            Minu lemmik <strong>${lemmik.liik}</strong> on <strong>${lemmik.nimi}</strong>.
        </div>
        <div>
            See on ${lemmik.varv} ja ${lemmik.kuju}.
        </div>
    </div>
    `
}

//trykiLemmik(apelsin)
//trykiLemmik(banaan)
//trykiLemmik(porgand)

let lemmikud = [ apelsin, banaan, porgand, riis, viinamari ]

for (let i = 0; i < lemmikud.length; i++) {
    let objekt = lemmikud[i]
    trykiLemmik(objekt)
}
