// Validações
const mensagensErro = {
    login: "O campo login deve ser preenchido!",
    senha: "O campo senha deve ser preenchido!",
    loginSenha: "Login ou senha incorretos!",
  };
  
  // Valida se o login está vazio
  function validaLogin() {
    const login = document.getElementById("login").value;
    if (login === "") {
      alert(mensagensErro.login);
      return false;
    }
    return true;
  }
  
  // Valida se a senha está vazia
  function validaSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === "") {
      alert(mensagensErro.senha);
      return false;
    }
    return true;
  }
  
  // Valida se o login e a senha estão corretos
  function validaLoginSenha() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
    // Valores de login e senha corretos
    const loginCorreto = "admin";
    const senhaCorreta = "123";
  
    if (login !== loginCorreto || senha !== senhaCorreta) {
      alert(mensagensErro.loginSenha);
      return false;
    }
    return true;
  }
  
  // Valida o formulário
  function validaFormulario() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
    // Redireciona para a página principal
    const pagina = "https://www.nfl.com";
    if (validaLogin() && validaSenha() && validaLoginSenha()) {
      return pagina;
    }
    return false;
  }
  
  // Evento de clique no botão de login
  document.getElementById("submit").addEventListener("click", function() {
    if (!validaFormulario()) {
      return;
    }
  
    // Redireciona para a página principal
    window.location.href = validaFormulario();
  });