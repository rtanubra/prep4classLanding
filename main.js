$( document ).ready(function() {
    $(".navigate_up").hide()
    $(".locationBox").hide()
    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height()*.06){
            $(".navigate_up").show()
        } else {
            $(".navigate_up").hide()
        }
    });

    $(".navigate_up").click(function(){

        $(window).scrollTop(0,0)
    })
})

