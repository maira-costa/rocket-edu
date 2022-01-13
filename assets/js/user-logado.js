//Mostrar informações do usuário logado no header

let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#usuarioLogado')
logado.innerHTML = `${userLogado.user}`

let rocketcoins = document.querySelector('#rocketcoins')
rocketcoins.innerHTML = `${userLogado.rocketcoins}`