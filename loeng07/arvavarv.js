function kontrolliVarvi() {

    const varv = prompt("Arva ära minu lemmikvärv")
    const minuLemmik = 'roheline'
    const valjundEl = document.getElementById("valjund")

    if ( minuLemmik == varv) {
        valjundEl.innerHTML = "<h2 class='roheline'>Õnnitlused!</h2><div>Meil on sama lemmikvärv</h2>"
    } else {
        valjundEl.innerHTML = "<h2>Proovi uuesti</h2>"
        valjundEl.innerHTML += "<p>" + varv + " ei ole minu lemmik </p>"
        valjundEl.innerHTML += "<h3 class='roheline'>Sisesta uus värv.</h3>"                        
    }
}

function valjastaNumbrid() {
    for (let i = 9; i >= 0; i -=1) {
        console.log(i)
    }
}

valjastaNumbrid()
kontrolliVarvi()