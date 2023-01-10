const mandarMsg = (e) =>{
    e.preventDefault()
    const msg = 'Olá, gostaria de saber sobre um serviço da produtora'
    const numero = '5521968439018'
    window.open(`https://wa.me/${numero}?text=${msg}`, "_blank");
}