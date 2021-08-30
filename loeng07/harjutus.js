function valjastaRuut(x) {
    console.log(x * x)
}

function naitaSisu(rida) {
    document.getElementById("sisu").innerHTML += rida
}

function harjutus() { 
    let nimi = prompt("Sisesta enda nimi")
    let tervitus = "Tere tulemast <strong>veebiarenduse</strong> maailma, " + nimi
    console.log(tervitus)

    naitaSisu("<div class='tervitus'>" + tervitus + "</div>")
    for (let i=1; i<=nimi.length; i += 1) {
        valjastaRuut(i)
        naitaSisu(i + " - ")
        naitaSisu(nimi[i-1] + "<br />")
    }

    if (nimi.length > 5) {
        naitaSisu("Õnnitlused - sul on ilus pikk nimi")
    } else {
        naitaSisu("Väga ilus lühike nimi on sul")
    }
}

harjutus()
