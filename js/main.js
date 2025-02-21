$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });

    const masks = {
        telefone: '(00) 00000-0000',
        cpf: '000.000.000-00',
        cep: '00000-000'
    };

    const placeholders = {
        telefone: '(DDD) 12345-6789',
        cpf: '123.456.789-00',
        cep: '12345-678'
    };

    $('#telefone').mask(masks.telefone, { placeholder: placeholders.telefone });
    $('#cpf').mask(masks.cpf, { placeholder: placeholders.cpf });
    $('#cep').mask(masks.cep, { placeholder: placeholders.cep });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14,
                maxlength: 15
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9,
                maxlength: 9
            },
            cpf: {
                required: true,
                minlength: 14,
                maxlength: 14
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome completo",
            email: {
                required: "Por favor, insira o seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: "Por favor, insira o seu telefone",
            endereco: "Por favor, insira o seu endereço",
            cep: {
                required: "Por favor, insira o seu CEP",
                minlength: "O CEP deve ter 8 dígitos",
                maxlength: "O CEP deve ter 8 dígitos"
            },
            cpf: {
                required: "Por favor, insira o seu CPF",
                minlength: "O CPF deve ter 11 dígitos",
                maxlength: "O CPF deve ter 11 dígitos"
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos corretamente para prosseguir com a compra!");
        }
    });
});
