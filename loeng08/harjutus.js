let i = 1;
while ( i<=10) {
    console.log("Number: " + i)
    i += 1
}

let minuLemmik = ["apelsin", "mango", "virsik"]
let kasutajaLemmik
//while( minuLemmik != kasutajaLemmik) {
//    kasutajaLemmik = prompt("Sisesta enda lemmikpuuvili")
//}
//loe sisestuselemendi väärtus
//kontrolli, kas on minu lemmik

//document.getElementById("vastus").innerText = "Õnnitlused, arvasid ära!"
function minuLemmikudHTML() {
    let htmlTekst = '<ul>'
    for (let i=0; i < minuLemmik.length; i += 1) {
        htmlTekst += '<li>' + minuLemmik[i] + '</li>'
    }
    htmlTekst += '</ul>'

    return htmlTekst
}

function arvaPuuvili() {
    kasutajaLemmik = document.getElementById("puuvili").value
    let vastus
    if ( minuLemmik.indexOf(kasutajaLemmik) >= 0 ) {
        vastus = '<div class="oigeVastus">Õnnitlused, arvasid ära</div> Minu lemmikud on: ' + minuLemmikudHTML()
    } else {
        vastus = "Ei ole õige. Proovin midagi muud"
    }
    document.getElementById("vastus").innerHTML = `Sisestasid: ${kasutajaLemmik} - ${vastus}`
    document.getElementById("puuvili").value = ""
}

function enterVajutati(event) {
	if (event.code == "Enter") {
        arvaPuuvili()
    }
}