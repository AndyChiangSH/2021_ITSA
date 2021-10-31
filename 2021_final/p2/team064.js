$(function () {

    $("#guess").attr("disabled", true);
    $("#ok").attr("disabled", true);
    $("#show").attr("disabled", true);

    var digit = 3;
    var answer_string = "";
    var result_text = "";

    $("#new").on("click", function(e) {
        $("#result").html("");
        $("#guess").attr("disabled", false);
        $("#ok").attr("disabled", false);
        $("#show").attr("disabled", false);

        digit = $("#digit").val();
        $("#display-digit").html(digit);
        let answer_array = [];
        answer_string = "";
        result_text = "";

        let tf = true
        
        for(let i=0; i<digit; i++){
            tf = true
            while(tf){
                tf = false
                var answer = Math.floor(Math.random()*10)
                for(let j=0; j<i; j++){
                    if(answer == answer_array[j]){
                        tf = true
                        break
                    }
                }
            }
            answer_array[i] = answer;
            answer_string += answer;
        }

        // console.log(answer_array)
        console.log(answer_string)
    })

    $("#ok").on("click", function(e) {
        
        let guess = $("#guess").val();

        if(guess.length != digit) {
            $("#error").html("數字個數不一致")
            return
        }
        else {
            $("#error").html("")
        }

        let A = 0
        let B = 0

        for(let i = 0; i < digit; i++) {
            for(let j = 0; j < digit; j++){
                if(guess[i] == answer_string[j]) {
                    if(i == j) {
                        A++;
                    }
                    else{
                        B++;
                    }
                }
            }
        }

        console.log("A:", A)
        console.log("B:", B)

        result_text += guess + " ==> " + A + "A" + B + "B" + "\n";
        $("#result").html(result_text.slice(0, result_text.length-1))

        $("#guess").val("");
        if(A == digit) {
            alert("恭喜!\n答案是: "+answer_string);
            $("#guess").attr("disabled", true);
            $("#ok").attr("disabled", true);
            $("#show").attr("disabled", true);
        }

    })

    $("#show").on("click", function(e) {
        alert("QAQ~\n答案是: "+answer_string);
        $("#guess").val("");
        $("#guess").attr("disabled", true);
        $("#ok").attr("disabled", true);
        $("#show").attr("disabled", true);
    })
})

