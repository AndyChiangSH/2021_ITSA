$(function () {
    var submit = document.querySelector('#submit');
    var list = document.querySelector('#list');
    var data = JSON.parse(localStorage.getItem('listData')) || [];
    var mode = "add";
    var edit_index = 0;

    submit.addEventListener('click', submitInput);
    list.addEventListener('click', ListTrigger);
    updateList(data)

    // 更新畫面
    function updateList(items) {
        str = '';
        var len = items.length;
        for (var i = 0; i < len; i++) {
            str += '<li class="todo"><span>' + items[i].content + '</span><span><a class="edit" href="#" data-index=' + i + '>編輯</a><a class="delete" href="#" data-index=' + i + '>刪除</a></span></li>';
        }
        list.innerHTML = str;
        $("#clean").empty();
        if (items.length > 0) {
            $("#clean").html("<a href='#'>清除所有項目</a>")
        }
    }

    function submitInput(e) {
        if (mode == "add") {
            newAdd(e);
        }
        else {
            editData(e);
        }
        localStorage.setItem('listData', JSON.stringify(data));
        updateList(data);
        $("#input").val("");
    }

    function ListTrigger(e) {
        // e.preventDefault();
        if (e.target.tagName !== 'A') { return };
        var index = e.target.dataset.index;
        let cName = e.target.className;
        if (cName == "delete") {
            data.splice(index, 1);
            localStorage.setItem('listData', JSON.stringify(data));
            updateList(data);
        }
        else {
            $("#submit").html("編輯");
            edit_index = index;
            mode = "edit";
        }
    }

    function newAdd(e) {
        e.preventDefault();
        var txt = document.querySelector('#input').value;
        var todo = {
            content: txt
        };
        data.push(todo);
    }

    function editData(e) {
        let input = $("#input").val();
        data[edit_index]["content"] = input;
        $("#submit").html("送出");
        mode = "add"
    }

    $("#clean").click(function () {
        data = [];
        localStorage.setItem('listData', JSON.stringify(data));
        updateList(data);
    })
})