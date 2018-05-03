$(document).on('click', '.field_name', function(event) {
    $.ajax({
        url: '/users/sorting',
        dataType: "json",
        type: 'post',
        data: { type: $(event.target).text() },
        success: function(data) {
            $('.tbody').html('');
            data['users'].forEach(function (e) {
                $('.tbody').append((function(){
                    var row = $('<tr></tr>');
                    var name = $('<td></td>').append(e[0]);
                    var date = $('<td></td>').append(e[1]);
                    var number = $('<td></td>').append(e[2]);
                    var description = $('<td></td>').append(e[3]);
                    row.append(name);
                    row.append(date);
                    row.append(number);
                    row.append(description);
                    return row;
                }()));
            });
        }
    })
});