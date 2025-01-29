const busca = document.querySelector("#form input")
const botao = document.querySelector("#form button")
const container = document.querySelector(".container")
const qrcode = document.querySelector("#qrcode img")

function GerarQrCode() {
    const QRCodeInputValue = busca.value
    if (!QRCodeInputValue) {
        return;
    }
    
    botao.innerHTML = "Criando QR Code"
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRCodeInputValue}`

    qrcode.addEventListener("load", () => {
        container.classList.add("active");
        botao.innerHTML = "QR Code criado";
    })
    
}

function Limpar() {
    botao.innerHTML = "Criar QR Code";
    container.classList.remove("active");
}


botao.addEventListener("click", () => {
    GerarQrCode();
})

busca.addEventListener("keydown", (e) => {
    if (e.code === "Enter")
    {
    GerarQrCode();
    }
})

busca.addEventListener("keyup", () => {
    if (!busca.value) {
        Limpar();
    }
})