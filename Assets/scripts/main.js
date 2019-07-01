//Frontpage countdown script

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
});


//Grid & List view script
$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
    $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
});


$('#module_calender_box_view').click(function () {
    $(".module_calender_wrapper").addClass(" col-lg-3 module_grid_view ").removeClass("col-lg-10");
});

$('#module_calender_list_view').click(function () {
    $(".module_calender_wrapper").addClass("col-lg-10").removeClass("module_grid_view col-lg-3");
});

//


//Module Calender Search Script
        $("#module_calender_search").on('keyup', function () {
            var matcher = new RegExp($(this).val(), 'gi');
            $('.module_calender_wrapper').show().not(function () {
                return matcher.test($(this).find('.module_calender_date , .module_calender_event_heading').text())
            }).hide();
});


//Module Calender Search Script
$("#module_calender_search").on('keyup', function () {
    var matcher = new RegExp($(this).val(), 'gi');
    $('.module_news_card_wrapper').show().not(function () {
        return matcher.test($(this).find('.item-search , .news_card_date').text())
    }).hide();
});




// Sign up Javascript

function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}

  //choosing options on step 3 (checkboxes)
        $("#option-one").click(function (e) {
            if ($('#eventscheck').prop('checked') == true) {
            $('#eventscheck').attr('checked', false);
        $("#option-one").removeClass("yellowed");
            } else {
            $('#eventscheck').attr('checked', true);
        $("#option-one").addClass("yellowed");
            }
        });

        $("#option-two").click(function (e) {
            if ($('#genbrugscheck').prop('checked') == true) {
            $('#genbrugscheck').attr('checked', false);
        $("#option-two").removeClass("yellowed");
            } else {
            $('#genbrugscheck').attr('checked', true);
        $("#option-two").addClass("yellowed");
            }
        });

        $("#option-three").click(function (e) {
            if ($('#sportscheck').prop('checked') == true) {
            $('#sportscheck').attr('checked', false);
        $("#option-three").removeClass("yellowed");
            } else {
            $('#sportscheck').attr('checked', true);
        $("#option-three").addClass("yellowed");
            }
        });
   
        $("div[data-includeHTML]").each(function() {
            $(this).load($(this).attr("data-includeHTML"));
        });
 


        if ($('#overlay').prop('block') == true) {
            $('body').click(function () { $('#overlay').hide() });
        }
    


        var current_fs, next_fs, previous_fs; //fieldsets

        $(".next").click(function () {

            current_fs = $(this).parent();
        next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0 }, {
            step: function (now, mx) {
            scale = 1 - (1 - now) * 0.2;
        left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
            'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({'left': left, 'opacity': opacity });
                },
                duration: 500,
                complete: function () {
            current_fs.hide();
        },
            });
        });

        $(".previous").click(function () {

            current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0 }, {
            step: function (now, mx) {
            scale = 0.8 + (1 - now) * 0.2;
        left = ((1 - now) * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({'left': left });
                    previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity });
                },
                duration: 500,
                complete: function () {
            current_fs.hide();
        },
            });
        });

        $(".submit").click(function () {
            return false;
        })
   

         var on = false;

        function toggle() {
            if (on == false) {
            document.getElementById("overlay").style.display = "block";
        on = true;
            }
            else {
            document.getElementById("overlay").style.display = "none";
        on = false;
            }
        }


    



        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("moduel_countdown_btn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }





   //for search box
    function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    } else {
    li[i].style.display = "none";
    }
    }
    }



