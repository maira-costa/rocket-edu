//Mostrar o que está sendo digitado no campo de senha 
let btnSenha = document.querySelector('#verSenha')

btnSenha.addEventListener('click', ()=>{
    let inputSenhaLogin = document.querySelector('#senhaLogin')

    if(inputSenhaLogin.getAttribute('type') == 'password'){
    inputSenhaLogin.setAttribute('type', 'text')
    } else {
    inputSenhaLogin.setAttribute('type', 'password')
    }
})

//Fazer login

function login() {
    
    let usuarioLogin = document.querySelector('#usuarioLogin')

    let senhaLogin = document.querySelector('#senhaLogin')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
    listaUser.forEach((item) => {
        if(usuarioLogin.value == item.userCad && senhaLogin.value == item.senhaCad){
        
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad,
                rocketcoins: item.rocketcoins
            }
        
        }
    })  

    if(usuarioLogin.value == userValid.user && senhaLogin.value == userValid.senha){
        window.location.href = 'investpack-cursos.html'
        
        let mathRandom = Math.random().toString(16).substring(2)
        let token = mathRandom + mathRandom
        
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
        
    } else {
        usuarioLogin.setAttribute('style', 'border: 2px solid #ffa995')
        senhaLogin.setAttribute('style', 'border: 2px solid #ffa995')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário e/ou senha incorretos'
        usuarioLogin.focus()
    }
}