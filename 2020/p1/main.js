$(function () {
    function init() {
        var today = new Date();
        var now_year = today.getFullYear()
        for (var y = now_year - 1000; y <= now_year + 1000; y++) {
            $("#years").append(`<option value=${y}>`)
        }
    }

    init();

    $("#today").click(function () {
        var today = new Date();
        $("#day").val(formatDate(today.getDate()))
        $("#month").val(formatDate(today.getMonth() + 1))
        $("#year").val(today.getFullYear())
    })

    function formatDate(num) {
        if (num < 10) {
            return "0" + num;
        }
        else {
            return num;
        }
    }

    $("#calculate").click(function () {
        var year = parseInt($("#year").val(), 10);
        var month = parseInt($("#month").val(), 10);
        var day = parseInt($("#day").val(), 10);
        var delta_year = parseInt($("#delta-year").val(), 10);
        var delta_month = parseInt($("#delta-month").val(), 10);
        var delta_week = parseInt($("#delta-week").val(), 10);
        var delta_day = parseInt($("#delta-day").val(), 10);

        if (isValidDate(year, month, day)) {
            console.log("OK")
            var add_or_sub = $("#add-or-sub").val();
            if (add_or_sub == "+") {
                add_delta(year, month, day, delta_year, delta_month, delta_week, delta_day);
            }
            else {
                sub_delta(year, month, day, delta_year, delta_month, delta_week, delta_day);
            }
        }
        else {
            alert("時間錯誤!")
        }

    })

    function isValidDate(year, month, day) {
        var date_string = `${year}-${formatDate(month)}-${formatDate(day)}`;
        var date_test = Date.parse(date_string);

        if (!isNaN(date_test)) {
            var date = new Date(date_test);
            var date_test_string = `${date.getFullYear()}-${formatDate(date.getMonth() + 1)}-${formatDate(date.getDate())}`;
            console.log(date_string, date_test_string)
            if (date_string == date_test_string) {
                return true;
            }
        }

        return false;
    }

    function add_delta(year, month, day, delta_year, delta_month, delta_week, delta_day) {
        console.log("now:", year, month, day);
        console.log("delta:", delta_year, delta_month, delta_week, delta_day);
        // console.log(typeof (year), typeof (delta_year));

        var now_date = new Date(year, month - 1, day);

        year = year + delta_year;
        month = month + delta_month;
        if (month > 12) {
            year += Math.floor(month / 12);
            month = month % 12;
        }
        var date_timestamp = new Date(year, month - 1, day).getTime();
        date_timestamp += (delta_week * 7 + delta_day) * 86400 * 1000;;
        var new_date = new Date(date_timestamp);
        console.log(now_date, new_date);

        $("#result1").text(`開始日期: ${now_date.toDateString()}`);
        $("#result2").text(`往前${delta_year}年${delta_month}月${delta_week}週${delta_day}天的日期: ${new_date.toDateString()}`);
    }

    function sub_delta(year, month, day, delta_year, delta_month, delta_week, delta_day) {
        console.log("now:", year, month, day);
        console.log("delta:", delta_year, delta_month, delta_week, delta_day);
        // console.log(typeof (year), typeof (delta_year));

        var now_date = new Date(year, month - 1, day);

        year = year - delta_year;
        month = month - delta_month;
        if (month < 1) {
            year += Math.floor((month - 1) / 12);
            month = 12 + (month % 12);
        }
        var date_timestamp = new Date(year, month - 1, day).getTime();
        date_timestamp -= (delta_week * 7 + delta_day) * 86400 * 1000;;
        var new_date = new Date(date_timestamp);
        console.log(now_date, new_date);

        $("#result1").text(`開始日期: ${now_date.toDateString()}`);
        $("#result2").text(`往後${delta_year}年${delta_month}月${delta_week}週${delta_day}天的日期: ${new_date.toDateString()}`);
    }

    $("#clean").click(function () {
        $("#delta-year").val("0");
        $("#delta-month").val("0");
        $("#delta-week").val("0");
        $("#delta-day").val("0");
        $("#result1").text("");
        $("#result2").text("");
    });
});

