$(document).on('click', '.field_name', function(event) {
    var type = $(event.target).text();
    $.ajax({
        url: '/users/sorting',
        dataType: "json",
        type: 'post',
        data: { type: $(event.target).text() },
        success: function(data) {
            $('.tbody').html('');
            data['users'].forEach(function (e) {
                $('.tbody').append((function(){
                    // var row = document.createElement('tr');
                    // var name = document.createElement('td');
                    //     name.textContent = e[0];
                    // var date = document.createElement('td');
                    //     date.textContent = e[1];
                    // var number = document.createElement('td');
                    //     number.textContent = e[2];
                    // var description = document.createElement('td');
                    //     description.textContent = e[3];
                    //
                    // row.appendChild(name);
                    // row.appendChild(date);
                    // row.appendChild(number);
                    // row.appendChild(description);
                    //
                    // return row;



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