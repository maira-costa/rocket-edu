//Mostrar nome do usuário logado no header


let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#usuarioLogado')
logado.innerHTML = `${userLogado.nome}`

