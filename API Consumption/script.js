$(document).ready(function () {
    const apiUrl = 'https://reqres.in/api/users?page=1';

    $.ajax({
        url: apiUrl,
        dataType: 'json',
        success: function (response) {
            const data = response.data; 
            const tableBody = $('#tbl tbody');

            data.forEach(item => {
                const row = $('<tr>');
                $('<td>').text(item.id).appendTo(row);
                $('<td>').text(item.email).appendTo(row);
                $('<td>').text(item.first_name).appendTo(row);
                $('<td>').text(item.last_name).appendTo(row);
                $('<td>').html('<img src="' + item.avatar + '" alt="Avatar" width="50">').appendTo(row);
                tableBody.append(row);
            });
        }
    });

    $('#searchInput').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        $('#tbl tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});