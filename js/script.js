
let time = 45;

setInterval(function(){

    if(time > 0){

        time--;

        $('#time').text(time);

    }

},1000);

$(document).ready(function(){

    /* OPEN MODAL */

    $('#finishExamBtn').click(function(){

        $('#finishModal').css('display','flex').hide().fadeIn();

    });

    /* CLOSE MODAL */

    $('#cancelFinish').click(function(){

        $('#finishModal').fadeOut();

        $('#confirmFinish').prop('checked', false);

        $('#finalFinishBtn').prop('disabled', true);

    });

    /* ENABLE FINISH BUTTON */

    $('#confirmFinish').change(function(){

        if($(this).is(':checked')){

            $('#finalFinishBtn').prop('disabled', false);

        }else{

            $('#finalFinishBtn').prop('disabled', true);

        }

    });

    /* FINAL SUBMIT */

    $('#finalFinishBtn').click(function(){

        alert('Exam Submitted Successfully');

    });

});




