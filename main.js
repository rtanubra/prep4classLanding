$( document ).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height()*.06){
            $(".navigate_up").show()
        }else{
            $(".navigate_up").hide()
        }
    });

})


`
if($(window).scrollTop() + $(window).height() === $(document).height()) {
            alert("bottom!");
            // getData();
}
`