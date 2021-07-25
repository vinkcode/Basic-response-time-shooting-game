/******************************** VINKING ***************************************/
/*  Goal: Just having fun :P!

    Challenge: Build whatever pops up in your mind quick as possible.
    
    Disclaimer: The script is built quick and simple so you can expand on it!
    Consider removing jQuery and use clean Javascript, or maybe look into <canvas>
    its up to you.

    Why jQuery? To make it easy for anyone to Google and copy/paste stuff from
    stackoverflow to experiment!

    If you find these types of videos interesting please let me know what you
    would like to see next.

    Video: https://youtu.be/NjRCnh2moVg
*/
/******************************** VINKING ***************************************/

$(document).ready(function() {
    $(document).bind("contextmenu",function(e){
        return false;
    });

    let missed = 1, hit = 1, animation = 4;

    $(".mask").click(function(e){
        if(e.target.className == "mask") {
            $(".missed").text(`missed: ${missed ++}`);
            if(animation > 0) {
                $(".target").css('animation', `mymove ${animation++}s infinite`);
            }
        }
        if(e.target.className == "target") {
            $(".hit").text(`hit: ${hit ++}`);
            if(animation > 1) {
                $(".target").css('animation', `mymove ${animation--}s infinite`);
            }
        }
    });

    $(".map").mousedown(function(e) {
        if (e.which === 3) {
            if($(".map")[0].style.transform == "scale(2)") {
                $($(".zoom")[0]).hide();
                $(".map")[0].style.transform = "scale(1)";
            } else{
                $($(".zoom")[0]).show();
                $(".map")[0].style.transform = "scale(2)";
            }
        }
    });

    $('body').bind('keypress', function(code){
        if (code.keyCode == 32 && $('.map').is(":hidden")) {
            $('.map').show();
        } else{
            $('.map').hide();
        }
    });

});