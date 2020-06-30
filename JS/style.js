
$("document").ready(function(){

    // Navbar Hover Effects
    $(".navstyle").hover(

        // For mouseon
        function(){
        // Variables for selectors
        var navElementId = $(this).attr("id");
        var idArr = navElementId.split("-");

        // Onhover meassage
        $("#message" + idArr[1]).fadeIn(300);
        },

        // For mouseoff
        function(){
        // Variables for selectors
        var elementId = $(this).attr("id");
        var idArr = elementId.split("-");
        
        // Offhover meassage
        $("#message"+ idArr[1]).fadeOut(100);
    });


    // For Side Navigation Bar

    // $(".navsidebuttons").hover(
    //     function(){

    //         var navId = $(this).attr("id");
    //         var splitId = navId.split("-");
    //         $("#diamond" + splitId[1]).addClass("diamond");
    //     },
    //     function(){
    //         var navrightId = $(this).attr("id");
    //         var splitId = navrightId.split("-");
    //         $("#diamond"+ splitId[1]).removeClass("diamond");
    //     }
    // );




    // For Showing the particular courses
    $(".btn").click(function() {

        // Variables for selectors
        var btnElementId = $(this).attr("id");
        var idArr = btnElementId.split("-");

        // Course show and hide
        $( "#courseswrapper" + idArr[1] ).fadeToggle();

        // Changing Text on the button
        $("#btntext" + idArr[1]).fadeOut(function () {
            $("#btntext" + idArr[1]).text(($("#btntext" + idArr[1]).text() == 'Show Courses') ? 'Hide Courses' : 'Show Courses').fadeIn();
        });
        
    });

    // For Slider Duration o slide change
    $('.carousel').carousel({
        interval: false
    });

    // For Slider slide down
    var count1=0;
    var count2=0;
    var count3=0;
    var count4=0;

    $(".rounded-link-1").click(function(){
        count1++;
        if(count1 === 1){
            $("#certificate-slider").slideDown("slow");
            count2 = 0;
            count3 = 0;
            count4 = 0;
        }
        else if(count1 === 2){
            $("#certificate-slider").slideUp();
            count1 = 0;
        };
    });
  
    $(".rounded-link-2").click(function(){
        count2++;
        if(count2 === 1){
            $("#certificate-slider").slideDown();
            count1 = 0;
            count3 = 0;
            count4 = 0;
        }
        else if(count2 === 2){
            $("#certificate-slider").slideUp();
            count2 = 0;
        };
    });
  
    $(".rounded-link-3").click(function(){
        count3++;
        if(count3 === 1){
            $("#certificate-slider").slideDown();
            count2 = 0;
            count1 = 0;
            count4 = 0;
        }
        else if(count3 === 2){
            $("#certificate-slider").slideUp();
            count3 = 0;
        };
    });
  
    $(".rounded-link-4").click(function(){
        count4++;
        if(count4 === 1){
            $("#certificate-slider").slideDown();
            count2 = 0;
            count3 = 0;
            count1 = 0;
        }
        else if(count4 === 2){
            $("#certificate-slider").slideUp();
            count4 = 0;
        };
    });

    // Back to top Button effect
    $(window).on('scroll', function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#topBtn").fadeIn("300");
        } 
        else {
            $("#topBtn").fadeOut("100");
        }
    });

    // Side Navigation Bar
    $(window).on('scroll', function() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
             $("#navigationscroll").fadeIn("300");
        } 
        else {
            $("#navigationscroll").fadeOut("100");
        }
    });

});