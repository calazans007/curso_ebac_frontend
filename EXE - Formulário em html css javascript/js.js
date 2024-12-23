const form = document.getElementById('meuFormulario');
        const mensagemDiv = document.getElementById('mensagem');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const campoA = parseFloat(document.getElementById('campoA').value);
            const campoB = parseFloat(document.getElementById('campoB').value);

            mensagemDiv.classList.remove('sucesso', 'erro'); // Remove classes anteriores

            if (campoB > campoA) {
                mensagemDiv.textContent = "Formulário válido! Campo B é maior que Campo A.";
                mensagemDiv.classList.add('sucesso');
            } else {
                mensagemDiv.textContent = "Formulário inválido! Campo B não é maior que Campo A.";
                mensagemDiv.classList.add('erro');
            }
        });