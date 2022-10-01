var submit = document.querySelector('#submit');
var list = document.querySelector('#list');
var data = JSON.parse(localStorage.getItem('listData')) || [];

submit.addEventListener('click', submitInput);
list.addEventListener('click', ListTrigger);
updateList(data)

function ListTrigger(e) {
    // e.preventDefault();
    console.log("ListTrigger!")
    console.log(e.target.tagName)
    if (e.target.tagName == 'A') {  // delete
        var index = e.target.dataset.index;
        data.splice(index, 1);
        localStorage.setItem('listData', JSON.stringify(data));
        updateList(data);
    }
    else if (e.target.tagName == 'INPUT') {   // check
        var index = e.target.dataset.index;
        data[index].check = !data[index].check;
        localStorage.setItem('listData', JSON.stringify(data));
        updateList(data);
    }
    else {
        return;
    }
}

// 更新畫面
function updateList(items) {
    console.log(data);
    str = '';
    var len = items.length;
    for (var i = 0; i < len; i++) {
        let checked = "";
        if (data[i].check) {
            checked = "checked";
        }
        str += '<tr class="todo"><td><input class="form-check-input" type="checkbox" data-index=' + i + ' ' + checked +'></td><td>' + items[i].content + '</td><td><a class="delete text-danger" href="#" data-index=' + i + '>刪除</a></td></tr>';
    }
    list.innerHTML = str;
}

function submitInput(e) {
    newAdd(e);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
    document.querySelector('#input').value = "";
}

function newAdd(e) {
    e.preventDefault();
    var txt = document.querySelector('#input').value;
    var todo = {
        content: txt,
        check: false,
    };
    data.push(todo);
}