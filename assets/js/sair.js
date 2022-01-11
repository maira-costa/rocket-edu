//Deslogar da plataforma

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'investpack-login.html'
}