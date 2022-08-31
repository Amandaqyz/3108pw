$(document).reeady(function(){

    $('.btn').click(function(e){
        e.preventDefault()

        let cep = $('#CEP').val()

    let url =`https://viacep.com.br/ws/${cep}/json/`

        $.ajax({
            type: 'GET',
           dataType: 'Json',
           url: url,
           success: function(dados){
               $('#LOGRADOURO').val(dadods.logradouro)
               $('#BAIRRO').val(dadods.bairro)
               $('#LOCALIDADE').val(dadods.localidade)
               $('#UF').val(dadods.uf)

           }

        })
    })
})