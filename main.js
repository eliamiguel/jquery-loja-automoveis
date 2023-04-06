$(document).ready(function(){

  $('#carousel-imagens').slick({
autoplay: true,
  })

$('.menu-hamburguer').click(function(){
  $('nav').slideToggle()
})
$("#telefone").mask('(00) 0000-0000')
$('form').validate({
  rules:{
    nome:{
      required:true
    },
    email:{
      required:true,
      email:true
    },
    telefone:{
      required:true
    },
    mensagem:{
      required:true
    },
    veiculoDeInteresse:{
      required:false
    },
    
  },
  messages:{
    nome:'Por favor, insira o seu nome'
  }, 
  submitHandler:function(form){
    console.log(form)
  }, 
  invalidHandler: function(evento, validador){
    let campoIncorretos = validador.numberOfInvalids();
    if(campoIncorretos){
      alert(`Esxistem ${campoIncorretos} campos incorretos`)
    }
  }
})
$('.lista-veiculos button').click( function(){
  const destino =$('#Contato');
  const nomeVeiculo =$(this).parent().find('h3').text()
  $('veiculos-interesse').val(nomeVeiculo);
  $('html').animate({
    scrollTop:destino.offset().top
  }, 1000)
})

  });