
let time = 45;

setInterval(function(){

    if(time > 0){

        time--;

        $('#time').text(time);

    }

},1000);