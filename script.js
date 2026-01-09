
        document.getElementById('cadastroForm').addEventListener('submit', function(event) {
            const senha = document.getElementById('senha');
            const confirmarSenha = document.getElementById('confirmarSenha');
            const senhaError = document.getElementById('senhaError');
            const confirmarSenhaError = document.getElementById('confirmarSenhaError');
            let hasError = false;

            // Validação de senha mínima
            if (senha.value.length < 8) {
                senhaError.style.display = 'block';
                hasError = true;
            } else {
                senhaError.style.display = 'none';
            }

            // Validação de confirmação de senha
            if (senha.value !== confirmarSenha.value) {
                confirmarSenhaError.style.display = 'block';
                hasError = true;
            } else {
                confirmarSenhaError.style.display = 'none';
            }

            if (hasError) {
                event.preventDefault(); // Impede o envio do formulário se houver erros
            } else {
                alert('Formulário enviado com sucesso!');
            }
        });
    