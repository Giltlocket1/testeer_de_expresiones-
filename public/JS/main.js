$(document).ready(() => {
    $('#testButton').on('click', () => {
        const [regexInput, testString] = [$('#regexInput').val().trim(), $('#testString').val().trim()];
        let resultText = 'No se encontraron coincidencias';

        // Validación de expresión regular y cadena
        try {
            const regex = new RegExp(regexInput);
            $('#regexInput').toggleClass('is-invalid', !regexInput);
            $('#testString').toggleClass('is-invalid', !testString);
            
            // Generar resultado de coincidencias
            if (regexInput && testString) {
                const matches = testString.match(regex);
                resultText = matches ? `Coincidencias: ${matches.map(m => `<span class="badge bg-success">${m}</span>`).join(', ')}` : resultText;
            } 
        } catch (e) {
            $('#regexInput').addClass('is-invalid');
            resultText = 'Expresión regular no válida';
        }
        
        $('#result').html(resultText).toggleClass('text-danger', resultText.includes('no válida')).toggleClass('text-success', resultText.includes('Coincidencias'));
    });
});
