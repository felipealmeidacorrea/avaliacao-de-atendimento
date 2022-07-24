document.getElementById('main-form__field#valuation').oninvalid = function() {

    // remove mensagens de erro antigas
    this.setCustomValidity("");

    // reexecuta validação
    if (!this.validity.valid) {

        // se inválido, coloca mensagem de erro
        this.setCustomValidity("Digitar uma nota de 1 a 5");
    }
};