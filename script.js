function registro() {
  var campoEmail = document.querySelector('#email')
  var email = campoEmail.value
  var campoSenha = document.querySelector('#senha')
  var senha = campoSenha.value
    if (email.endsWith('@gmail.com' || '@hotmail.com')) {
      alert("Email Válido")
  } else {
    alert("Endereço de email inválido!")
  }
    
    if (senha == "") {
      alert("Senha inválida")
  } 
    
    if (campoSenha == "" && campoEmail == "") {
      alert("Senha e Email inválidos")
    }
  
  if (email.endsWith('@gmail.com' || '@hotmail.com') && senha == campoSenha.value) {
  alert("Registrado com Sucesso!")
  }
}
