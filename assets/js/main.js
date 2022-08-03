
let outputVorne = document.getElementById("outputVorne")
let outputHinten = document.getElementById("outputHinten")


const trenneAlles = (event) => {
    event.preventDefault()
    let txtInput = document.forms[0].txtInput.value
    let signInput = document.forms[0].signInput.value
    let index = txtInput.indexOf(signInput);
    let endIndex = index + signInput.length - 1;
    let trennen = document.forms[0].trennen.value


    if (index !== -1) {
        outputVorne.innerHTML = "Dieses Wort ist nicht auffindbar Babe"
    }
    else if
        (trennen === "davor") {
        vorTrennen()
    }
    else {
        danachTrennen()
    }


    let vorTrennen = () => {
        let textausgabe1 = txtInput.slice(0, index)
        outputVorne.innerHTML = textausgabe1
    }
    let danachTrennen = () => {
        let textausgabe2 = txtInput.slice(endIndex, -1)
        outputHinten.innerHTML = textausgabe2
    }
}
