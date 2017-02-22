// Gib mir den Task = ich erwarte den Task = ich erwarte ein Objekt vom Typ Task

function AddItemToDom(Task) {
    if(Task.erledigt) {
        $('.doneItems').append(createItem(Task.caption, Task.id));
    }else {
        $('.openItems').append(createItem(Task.caption, Task.id));
    }
    return true;
}


/* andere Schreibweise der AddItemToDom-Funktion
function AddItemToDom(ID, Caption, Erlerdigt) {
    if (Erlerdigt) {
        $('.doneItems').append(createItem(Caption, ID));
    }else{}
}

*/


// Kreiert Element
function createItem(caption, id) {
    //Was muss in das Item rein?
    var $newListItem = $('<div class="task" data-taskid="' +  id + '"></div>');
    var $h2Text = $('<h2></h2>');
    var $faClock = $("<i class='fa fa-clock-o'></i>");
    var $faTag = $("<i class='fa fa-tag'></i>");


    // Den Text(caption) ans h2-Element
    $h2Text.text(caption);
    // Text an newListitem (div)
    $newListItem.append($h2Text);

    // Hängt die Icons an
    $newListItem.append($faClock);
    $newListItem.append($faTag);
    return $newListItem;
}



// Funktion wo einen Task verschiebt