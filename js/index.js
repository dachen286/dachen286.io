 var random




 $('body > div > button:nth-child(3)').on('click', function() {
     random = Math.floor(Math.random() * 1000)

     $('#anser > button:nth-child(2)').hide()
     $('#anser > button:nth-child(3)').hide()
     $('#anser > button:nth-child(4)').hide()

     console.log(random)

 })



 $('body > div.container > button:nth-child(5)').on('click', function() {

     $('#anser > button:nth-child(2)').hide()
     $('#anser > button:nth-child(3)').hide()
     $('#anser > button:nth-child(4)').hide()

     var a = Number($('#ua').val());
     if (a > random) $('#anser > button:nth-child(3)').show()
     else if (a < random) $('#anser > button:nth-child(2)').show()
     else $('#anser > button:nth-child(4)').show()

     console.log(random)

 })

 $('#anser > button:nth-child(4)').on('click', function() {
     $('#anser > button:nth-child(4)').hide()




 })