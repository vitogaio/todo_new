function writeLocalStorage(TaskList) {
    if(typeof (Storage)!== undefined){
        localStorage.setItem("TaskList", JSON.stringify(TaskList));
    }
}

// gibt Liste (ob leer oder nicht) retour
function LoadLocalStorage() {
    if(typeof (Storage)!== undefined){
        var list = localStorage.getItem("TaskList");
        if (list != null){
            return JSON.parse(list);
        }
    }
    return [];
}


// Funktion, die die nächste ID für einen neuen Task ermittelt
function getNextID() {
    var list = LoadLocalStorage();

    // prüft, ob die Liste leer ist und gibt dann 1 zurück
    if (list.length == 0)
        return 1;

    // gibt die grösste ID zurück
    var result = Math.max.apply(null, list.map(function (element, index, array) {
        return element.id;
    }));

    // gibt bei einem Fehler 1 zurück, ansonsten die Grösste ID + 1
    return result == null ? 1 : result + 1;
}


// ich möchte einen Text als String
function AddTask(eingabetext) {
    // aufhören bei leerem Eintrag
    if(eingabetext == undefined || typeof (eingabetext) != "string" || eingabetext == "") {
        return false;
    }

    var list = LoadLocalStorage();

    var task = {"erledigt": false, "caption": eingabetext, "id": getNextID()};
    list.push(task);
    // schreibe die neue Liste in den localStorage
    writeLocalStorage(list);
    // ruft eine Funktion auf die das Element dem DOM hinzufügt
    return AddItemToDom(task);
}

// ich lade alle Elemente und füge sie dem DOM zu

function initLoad() {
   var list = LoadLocalStorage();
    list.forEach(function (e, i, a) {
       AddItemToDom(e);
    });
}

// Task-Status auf erledigt ändern und Funktion aufrufen die den Task im DOM verschiebt
// Nicht vergessen Liste im localStorage zu speichern
function changeStatus(id) {

}
