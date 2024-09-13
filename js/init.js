"use strict";
for (var images = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg", "images/bg4.jpg"], slideFade = 1200, slideDuration = 9e3, img = "", i = 0; i < images.length; i++) img = img + '<img src="' + images[i] + '" />';

function setUpSections() {
    for (var e = document.getElementsByTagName("body")[0].getElementsByTagName("section"), t = 0; t < e.length; t++) {
        switch (e[t].getAttribute("data-direction")) {
            case "from-bottom":
                var a = {
                        top: "100%"
                    },
                    n = {
                        top: "0"
                    },
                    s = {
                        top: "-100%"
                    },
                    i = {
                        top: "0"
                    };
                break;
            case "from-left":
                a = {
                    left: "-100%",
                    right: "100%"
                }, n = {
                    left: "0",
                    right: "0"
                }, s = {
                    left: "100%"
                }, i = {
                    left: "0"
                };
                break;
            case "from-right":
                a = {
                    left: "100%"
                }, n = {
                    left: "0"
                }, s = {
                    left: "-100%"
                }, i = {
                    left: "0"
                }
        }
        e[t].positions = a, e[t].destinations = n, e[t].headerDestinations = s, e[t].headerOrigins = i
    }
}

function openContent(e, t) {
    if (isDesktop()) {
        var a = document.querySelector(e);
        $(e).css(a.positions).css({
            "z-index": 2
        }).animate(a.destinations, "easeOutQuint", function() {
            $(e).addClass("active")
        }), $("header").animate(a.headerDestinations, "easeOutQuint")
    }
}

function closeContent(e) {
    var t = "section.active",
        a = document.querySelector(t);
    $(t).removeClass("active").delay(300).animate(a.positions, "easeOutQuint", function() {
        $(this).css({
            "z-index": -99999
        })
    }), $("header").delay(300).animate(a.headerOrigins, "easeOutQuint")
}

function isDesktop() {
    return $(window).width() >= 768
}
$("#kenburns-bg").prepend(img), $(window).load(function() {
    $("#preload").css({
        display: "none"
    }), $("body").removeClass("preload"), setUpSections();
    $("#rotate").rotator({
        speed: 4e3,
        transition_speed: 500,
        sub_selector: ".rotate"
    }), $.firefly({
        color: "#fff",
        minPixel: 1,
        maxPixel: 3,
        total: 45,
        on: "#firefly"
    }), $(".navigation .move a").click(function() {
        if (isDesktop()) {
            var e = $(this).attr("href");
            return openContent(e, $(e).attr("data-direction")), !1
        }
    }), $(".close").click(function() {
        return closeContent($("section.active").attr("data-direction")), !1
    })
}), $("#kenburns-bg").kenburnsy({
    fullscreen: !0,
    duration: slideDuration,
    fadeInDuration: slideFade
}), $(document).keyup(function(e) {
    isDesktop() && (38 == e.keyCode && $("#subscribe").hasClass("active") && closeContent($("section.active").attr("data-direction")), 40 == e.keyCode && ($("section.active").length ? $("#brands").hasClass("active") && !$("#subscribe").hasClass("active") && closeContent($("section.active").attr("data-direction")) : openContent("#subscribe")), 37 == e.keyCode && ($("section.active").length ? $("#contact").hasClass("active") && !$("#about").hasClass("active") && closeContent($("section.active").attr("data-direction")) : openContent("#about")), 39 == e.keyCode && ($("section.active").length ? $("#about").hasClass("active") && !$("#contact").hasClass("active") && closeContent($("section.active").attr("data-direction")) : openContent("#contact")), 27 == e.keyCode && closeContent($("section.active").attr("data-direction")))
}), $("#subscribe-form").submit(function() {
    return $("#response").html('<div class="loading"><span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span><span class="bounce4"></span></div>'), $.ajax({
        url: "js/inc/store-address.php",
        data: "ajax=true&email=" + escape($("#subscribe_email").val()),
        success: function(e) {
            $("#response").html(e)
        }
    }), !1
}), $(document).ready(function() {
    $("#contactForm .error").remove();
    var e = $("#contactForm"),
        t = $("#contactForm_submit"),
        a = $(".successMsg");
    e.on("submit", function(n) {
        var s = !1;
        return $(".required").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>'), s = !0;
            else if ($(this).hasClass("email")) {
                /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/.test(jQuery.trim($(this).val())) || ($(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>'), s = !0)
            }
        }), s || (n.preventDefault(), $.ajax({
            url: "js/inc/sendemail.php",
            type: "POST",
            dataType: "html",
            data: e.serialize(),
            beforeSend: function() {
                a.fadeOut(), t.html("Sending....")
            },
            success: function(t) {
                e.fadeOut(300), a.html(t).fadeIn(1e3), setTimeout(function() {
                    a.html(t).fadeOut(300), $("#formName, #formEmail,#phone, #message").val(""), e.fadeIn(1800)
                }, 4e3)
            },
            error: function(e) {
                console.log(e)
            }
        }), $(".required").val("")), !1
    }), $("#contactForm input").focus(function() {
        $("#contactForm .error").remove()
    }), $("#contactForm textarea").focus(function() {
        $("#contactForm .error").remove()
    })
});

function counterJs() {
    const countDownDate = new Date("Sep 18, 2024 23:59:59").getTime();

    const countdownFunction = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = `<div class="item mx-2 d-flex flex-column">
                <span class="day">Day</span>
                <span class="time text-center">${days}</span>
            </div>
            <div class="item mx-2 d-flex flex-column">
                <span class="day">Hours</span>
                <span class="time text-center">${hours}</span>
            </div>
            <div class="item mx-2 d-flex flex-column">
                <span class="day">Minutes</span>
                <span class="time text-center">${minutes}</span>
            </div>
            <div class="item mx-2 d-flex flex-column">
                <span class="day">Seconds</span>
                <span class="time text-center">${seconds}</span>
            </div>`;

      if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
} counterJs()