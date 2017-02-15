function AddItemToDom(Task) {
    $('.openItems').append('<div class="task">' + Task.caption + '</div>');
    return true;
}

function createItem(caption, id) {
    var $newListItem = $('<div class="task" data-taskid="' +  id + '"></div>');
    var $h2Text = $('<h2></h2>');
    var $faClock = $("<i class='fa fa-clock-o'></i>");
    var $faTag = $("<i class='fa fa-tag'></i>");


    // Den Text(caption) ans h2-Element
    $h2Text.text(caption);
    // Text an newListitem (div)
    $newListItem.append($h2Text);

    // APPEND the Awesome Icons
    $newListItem.append($faClock);
    $newListItem.append($faTag);
    return $newListItem;
}

var $doneItems = $('.doneItems');
var $openItems = $('.openItems');

$openItems.on('click', '.task', function() {
    $(this).prependTo($doneItems);
    $(this).css({
        'background-color': '$color-lightgrey',
        'opacity': '0.3'
    });
});