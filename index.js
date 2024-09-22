$(document).ready(function(){

// $('div').click(function(){
//     $(this).hide()
// 

$('.Hide').click(function(){
   $('.text').hide()
})

$('.show').click(function(){
    $('.text').show()
 })

$('#Toggle').click(function(){ 
    $('.text').toggle()
    
    if($(this).text()=='Hide'){
        $(this).text('Show')
    }else{
        $(this).text('Hide')
    }
})

$('.alert').hide()
    $('.nama').blur(function(){
    $('.alert').show()
    $('.title').blur(function(){
        $('.alert').show()
    })
})
$('.moveLeft').click(function(){
    $('.box').animate({
        marginLeft: '0px',
        width: '250px',
        height: '250px',
    })
})

$('.moveRight').click(function(){
    $('.box').animate({
        marginLeft: '300px',
        width: '300px',
        height: '300px',
    })
})


})