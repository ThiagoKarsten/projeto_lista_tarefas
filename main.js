$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        var mensagem = $('#endereco-mensagem').val();
        var novaTarefa = $('<ul></ul>')

        $(`<li>${mensagem}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('#lista')

        $('#endereco-mensagem').val('');
    })

        $(document).on('click', 'li', function(){
            $(this).css('text-decoration', 'line-through')
    })
})
