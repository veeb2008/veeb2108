let i = 0;
while ( i<=10) {
    console.log("Number: " + i)
    i += 1
}

i = 0;
while ( i<=10) {
    console.log("Paarisnumber: " + i)
    i += 2
}

function analyysi() {
    nimi = document.getElementById("nimi").value
    tahti = nimi.length
    let vastus = `${nimi} - sinu nimes on ${tahti} tähte`
    if (tahti > 10) {
        vastus += `
        <div class="pikkNimi"> 
        Küll on alles ikk nimi!
        </div>
        `
    }

    document.getElementById("vastus").innerHTML = vastus
    document.getElementById("nimi").value = ""
}

function enterVajutati(event) {
	if (event.code == "Enter") {
        analyysi()
    }
}