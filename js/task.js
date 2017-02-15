function WriteLocalStorage(TaskList) {
    if(typeof (Storage)!== undefined){
        localStorage.setItem("TaskList", JSON.stringify(TaskList));
    }
}

function LoadLocalStorage() {
    if(typeof (Storage)!== undefined){
        var list = localStorage.getItem("TaskList");
        if (list != null){
            return JSON.parse(list);
        }
    }
    return [];
}

function AddTask(Caption) {

    var list = LoadLocalStorage();
    var task = {"erledigt": false, "caption": Caption, "id": 0};
    list.push(task);
    WriteLocalStorage(list);

    return AddItemToDom(task);
}

// funktion lade tasks (6)

function initLoad() {
   var list = LoadLocalStorage();
    list.forEach(function (e, i, a) {
       AddItemToDom(e);
    });
}

