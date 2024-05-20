function ShowsMsg() {
    
    document.getElementById("FormContato").addEventListener("submit", function(event) {
        var nome = document.querySelector("[name='Nome']").value;
        var email = document.querySelector("[name='Email']").value;
        var mensagem = document.querySelector("[name='Mensagem']").value;

        if (nome && email && mensagem) {
            alert("Obrigado por entrar em contato! :)");
        } else {
            alert("Você deve preencher todos os campos!");
            event.preventDefault();
        }
    });
}
