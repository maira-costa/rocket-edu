//Informar ao usuário que precisa fazer login para ter acesso à página

if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'investpack-login.html'
}