$(function() {

    $("#q2").hide()
    $("#q3").hide()
    $("#result").hide()

    // correct answer is A, B, C
    const correct1 = 1;
    const correct2 = 2;
    const correct3 = 3;
    
    var ans1 = 0;
    var ans2 = 0;
    var ans3 = 0;

    $("#a1").on("click", function(e) {
        ans1 = 1;
    })
    $("#b1").on("click", function(e) {
        ans1 = 2;
    })
    $("#c1").on("click", function(e) {
        ans1 = 3;
    })
    $("#d1").on("click", function(e) {
        ans1 = 4;
    })

    $("#a2").on("click", function(e) {
        ans2 = 1;
    })
    $("#b2").on("click", function(e) {
        ans2 = 2;
    })
    $("#c2").on("click", function(e) {
        ans2 = 3;
    })
    $("#d2").on("click", function(e) {
        ans2 = 4;
    })

    $("#a3").on("click", function(e) {
        ans3 = 1;
    })
    $("#b3").on("click", function(e) {
        ans3 = 2;
    })
    $("#c3").on("click", function(e) {
        ans3 = 3;
    })
    $("#d3").on("click", function(e) {
        ans3 = 4;
    })

    $("#next1").on("click", function(e) {
        $("#q1").hide();
        $("#q2").show();
    })

    $("#pre2").on("click", function(e) {
        $("#q2").hide();
        $("#q1").show();
    })

    $("#next2").on("click", function(e) {
        $("#q2").hide();
        $("#q3").show();
    })

    $("#pre3").on("click", function(e) {
        $("#q3").hide();
        $("#q2").show();
    })


    $("#submit").on("click", function(e) {
        let correct_num = 0
        if(ans1 == correct1) {
            correct_num += 1
            $("#q1 .form-check-label").css("color", "green");
        }
        else {
            $("#q1 .form-check-label").css("color", "red");
        }

        if(ans2 == correct2) {
            correct_num += 1
            $("#q2 .form-check-label").css("color", "green");
        }
        else {
            $("#q2 .form-check-label").css("color", "red");
        }

        if(ans3 == correct3) {
            correct_num += 1
            $("#q3 .form-check-label").css("color", "green");
        }
        else {
            $("#q3 .form-check-label").css("color", "red");
        }

        $("#correct-num").html(correct_num);
        $("#result").show();
    })
});