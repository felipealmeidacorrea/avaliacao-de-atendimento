document.getElementById('main-form__field#valuation').oninvalid = function() {

    // remove mensagens de erro antigas
    this.setCustomValidity("");

    // reexecuta validação
    if (!this.validity.valid) {

        // se inválido, coloca mensagem de erro
        this.setCustomValidity("Digitar uma nota de 1 a 5");
    }
};

document.getElementById('value1').addEventListener("click", passesValue1toField)
document.getElementById('value2').addEventListener("click", passesValue2toField)
document.getElementById('value3').addEventListener("click", passesValue3toField)
document.getElementById('value4').addEventListener("click", passesValue4toField)
document.getElementById('value5').addEventListener("click", passesValue5toField)

function passesValue1toField() {
    document.getElementById("main-form__field#valuation").value = "1";
};

function passesValue2toField() {
    document.getElementById("main-form__field#valuation").value = "2";
};

function passesValue3toField() {
    document.getElementById("main-form__field#valuation").value = "3";
};

function passesValue4toField() {
    document.getElementById("main-form__field#valuation").value = "4";
};

function passesValue5toField() {
    document.getElementById("main-form__field#valuation").value = "5";
};