$(document).ready(function(){
    $('.ProductItem').hide()
    $('.ProductItem:first').show()
    $('.colorItem a:not(:first)').addClass('inactive')

    $('.colorItem a').on('click', function(){
        const n = $(this).attr('id')

        if($(this).hasClass('inactive')){
            $('.colorItem a').addClass('inactive')
            $(this).removeClass('inactive')
        }
        $('.ProductItem').hide()
        $('#' + n + 'image').show()


    })
})
