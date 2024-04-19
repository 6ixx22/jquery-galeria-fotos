$(document).ready(function(){
    $('header button').click(function() {
        $("form").slideDown();
    })

    $('#Botão-cancelar').click(function() {
        $("form").slideUp();
    })

    $('form').on('sumit', function(e) {
        console.log("sumit");
        const enderecoDaNovaImagem = $('#endereco-imagem-novo').val();
        const novoIntem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(nonoItem);
        $(`
            <div class="overley-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="-blank" title="ver imagem em tamanho real"
                ver imagem em tamanho real
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    })
})