// function scrollTo(to, duration) {
//     if (document.body.scrollTop == to) return;
//     var diff = to - document.body.scrollTop;
//     var scrollStep = Math.PI / (duration / 10);
//     var count = 0, currPos;
//     start = element.scrollTop;
//     scrollInterval = setInterval(function(){
//         if (document.body.scrollTop != to) {
//             count = count + 1;
//             currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
//             document.body.scrollTop = currPos;
//         }
//         else { clearInterval(scrollInterval); }
//     },10);
// }
//
// function scrollToId(elID)
// {
//     var dest = document.getElementById(elID);
//     scrollTo(dest.offsetTop, 500);
// }


var hashTagActive = "";
$(".scroll").on("click touchstart" , function (event) {
    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest
        }, 1600, 'swing');
        hashTagActive = this.hash;
    }
});
