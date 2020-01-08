$( document ).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop() > $(document).height()*.06){
            $(".navigate_up").show()
        }else{
            $(".navigate_up").hide()
            console.log('hide')
        }
    });
})



`
if($(window).scrollTop() + $(window).height() === $(document).height()) {
            alert("bottom!");
            // getData();
}
`