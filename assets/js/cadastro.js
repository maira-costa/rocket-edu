//Mostrar o que está sendo digitado nos campos de senha e de confirmar senha 

let btnSenha = document.querySelector('#verSenha')
let btnConfSenha = document.querySelector('#verConfSenha')

btnSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    } else {
    inputSenha.setAttribute('type', 'password')
    }
})

btnConfSenha.addEventListener('click', ()=>{
    let inputConfSenha = document.querySelector('#confirmarSenha')
    
    if(inputConfSenha.getAttribute('type') == 'password'){
        inputConfSenha.setAttribute('type', 'text')
    } else {
        inputConfSenha.setAttribute('type', 'password')
    }
})


// Validar cadastro de usuário
let nome = document.querySelector('#nome')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let confirmarSenha = document.querySelector('#confirmarSenha')
let validNome = false
let validUsuario = false
let validSenha = false
let validConfirmSenha = false


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4){
        labelNome.setAttribute('style', 'color: #ff623e')
        labelNome.innerHTML = '*Insira no minimo 5 caracteres'
        nome.setAttribute('style', 'border: 2px solid #ffa995')
        validNome = false
    } else {
        labelNome.innerHTML = ''
        nome.setAttribute('style', 'border: 2px solid #6fc76f')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: #ff623e')
        labelUsuario.innerHTML = '*Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border: 2px solid #ffa995')
        validUsuario = false
    } else {
        labelUsuario.innerHTML = ''
        usuario.setAttribute('style', 'border: 2px solid #6fc76f')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: #ff623e')
        labelSenha.innerHTML = '*Insira no minimo 5 caracteres'
        senha.setAttribute('style', 'border: 2px solid #ffa995')
        validSenha = false
    } else {
        labelSenha.innerHTML = ''
        senha.setAttribute('style', 'border: 2px solid #6fc76f')
        validSenha = true
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if(confirmarSenha.value != senha.value){
        labelConfirmarSenha.setAttribute('style', 'color: #ff623e')
        labelConfirmarSenha.innerHTML = '*As senhas não conferem'
        confirmarSenha.setAttribute('style', 'border: 2px solid #ffa995')
        validConfirmSenha = false
    } else {
        labelConfirmarSenha.innerHTML = ''
        confirmarSenha.setAttribute('style', 'border: 2px solid #6fc76f')
        validConfirmSenha = true
    }
})


//Cadastrar usuário após validação
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value,
            rocketcoins: "0"
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
        
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=>{
            window.location.href = 'investpack-login.html'
        }, 3000)
    
      
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

