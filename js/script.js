$("document").ready(function () {
    var $loadButton = $('#load');
    var $newList = $('#newList');


    // lade Liste (taskliste.json)
// er macht mir einen Promise - er holt mir die Liste
    function ladeListe() {
        return $.ajax({
            type: "GET",
            url: "api/taskList.json"
        });
    }


    function schreibeListe() {
        var liste = ladeListe();
        liste.done(function (meineSuperVariable) {
            console.log(meineSuperVariable);
            meineSuperVariable.forEach(function (e, i, a) {
              var $listItem = $('<li></li>');

              $listItem.text(e.caption + ", " + e.id);

              $newList.append($listItem);
            });
        });
    }


    $loadButton.on('click', schreibeListe);

/*
function ladeListeSync() {
    return $.ajax({
        type: "GET",
        url: "api/taskList.json",
        async: false
    });
}


function schreibeListeSync() {
    var liste = ladeListeSync();
        liste.forEach(function (e, i, a) {
            var $listItem = $('<li></li>');

            $listItem.text(e.caption);

            $newList.append($listItem);


        });
}


$loadButton.on('click', schreibeListeSync);
*/

});


