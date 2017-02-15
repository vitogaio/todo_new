$("document").ready(function () {
    var $input     = $('input');
    var $addButton = $('#addButton');

    initLoad();


    $addButton.on('click', function() {
       if(!AddTask($input.val())){
           alert('Fehler!');
       }
    });

    $addButton.on('click', function() {
    // Wenn der Inhalt nicht leer ist
        if ($input.val() !== "") {
        // PREPEND an OpenItems to the list using the function createItem
        $openItems.prepend(createItem($input.val()));
        // leere das Input-Feld
        $input.val('');
        }
    });
});