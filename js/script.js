$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            telefone: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert('Formulario enviado com sucesso!')
            form.submit()
        }
    })
})