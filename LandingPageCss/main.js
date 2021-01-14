$(function () {
    $(".btn-1").click(function () {
        $(".model").show();
    })
    $(".footer-one-btn-1").click(function () {
        $(".model").show();
    })
    $(".footer-one-text span").click(function () {
        $(".model").show();
    })
    $(".footer-two-btn-1").click(function () {
        $(".model").show();
    })
    $(".btn-2").click(function () {
        $(".model").show();
    })
    $(".footer-two-text span").click(function () {
        $(".model").show();
    })
    $(".footer-one-btn-2").click(function () {
        $(".model").show();
    })
    $(".footer-two-btn-2").click(function () {
        $(".model").show();
    })
    $(".offer-text-link").click(function () {
        $(".model").show();
    })
    $(".close").click(function () {
        $(".model").hide();
        $('.thankyouPage').hide();
        $('#form').show();
    })
    $(".more-info").click(function() {
        $('html, body').animate({
            scrollTop: $(".eon-aligner").offset().top
        }, 500);
    });


    $('#form').submit(async function (e) {
        e.preventDefault();
        const nameValue = $("#name-input").val();
        const raadio = $('input[name="contact-method"]:checked').val();
        const contactInputValue = $("#contact-input").val();
        let object = {
            name: nameValue,
            contactMethod: `${raadio} ${contactInputValue} - Clinic : lookswoow`,
        };
        let response = await fetch(
            "https://gwhb7l31r0.execute-api.eu-central-1.amazonaws.com/default/clinicsMailerFunction",
            {
                method: "POST",
                body: JSON.stringify(object),
            }
        );
        if (response.status == 200) {
            fbq("track", "Lead");
            $('#form').hide();
            $(".thankyouPage").show();
        }
    })
    $("input[type=radio][name=contact-method]").change(function () {
        $(".contact-input-div").show()
        if (this.value == 'email') {
            $('[id$=contact-label]').text("Email");
            $('[id$=contact-input]').attr("placeholder", "Email");
            $('#contact-input').get(0).type = "email"
        }
        else if (this.value == 'whats/app') {
            $('[id$=contact-label]').text("WhatsApp");
            $('[id$=contact-input]').attr("placeholder", "+966 xx xxxxxxxx");
            $('#contact-input').get(0).type = "number"
        }
        else if (this.value == 'phone') {
            $('[id$=contact-label]').text("Phone");
            $('[id$=contact-input]').attr("placeholder", "+966 xx xxxxxxxx");
            $('#contact-input').get(0).type = "number"
        }
 })
});