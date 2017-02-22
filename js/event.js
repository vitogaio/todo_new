$("document").ready(function () {
    // ich hole die Elemente (input-feld)
    var $input     = $('input');
    var $addButton = $('#addButton');

    initLoad();

    // auf Button-click ...
    $addButton.on('click', function() {
       if(!AddTask($input.val())){
           alert('Bitte Input eingeben.');

       }else {
           $input.val('');
       }
    });




    var $doneItems = $('.doneItems');
    var $openItems = $('.openItems');
// Hängt erledigte Tasks an Erledigten-Liste an

// Bei Click Funktion aufrufen die den Status ändert
    $openItems.on('click', '.task', function() {
        $(this).prependTo($doneItems);
        $(this).css({
            'background-color': '$color-lightgrey',
            'opacity': '0.3'
        });
    });

});
