$(function () {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    var tags = JSON.parse(localStorage.getItem('tags')) || [];

    update_tags();

    $("#add_tag_btn").click(function () {
        let add_tag_text = $("#add_tag_text").val();
        console.log(tags);
        if (tags.includes(add_tag_text)) {
            alert("重複了!");
        }
        else {
            tags.push(add_tag_text);
            localStorage.setItem('tags', JSON.stringify(tags));
        }
    })

    function update_tags() {
        console.log(tags);
        let str = "<option selected>請選擇筆記分類</option>"
        for (let i = 0; i < tags.length; i++) {
            str += '<option value="1">' + tags[i] + '</option>'
        }
        $("#tag-select").html(str);
    }
})