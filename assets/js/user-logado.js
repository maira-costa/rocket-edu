//Mostrar informações do usuário logado no header

let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#usuarioLogado')
logado.innerHTML = `Olá, ${userLogado.nome}!`

let rocketcoins = document.querySelector('#rocketcoins')
rocketcoins.innerHTML = `R&#8373; ${userLogado.rocketcoins}`