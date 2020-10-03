$(document).ready(function () {
    $("jdTable").dataTable();
})

$(document).ready(function () {
    $("#mydatatable").dataTable({
        "scrollY": '50vh',
        "paging": false

    });
})

$(document).ready(function () {
    var table = $("#tblData").DataTable({
        "ajax": {
            "url": "/Home/GetData",
            "type": "GET",
            "datatype": "json"
        },
        "columnDefs":[
            {
                "targets": [7],
                "searchable": false,
                "orderable": false
            }
         ],
        "columns": [
            { "data": "Id" },
            { "data": "RoleId", "title":"Role ID" },
            { "data": "Name" },
            { "data": "Email" },
            { "data": "Password" },
            { "data": "Contact" },
            { "data": "Address", "title": "Home Address" },
            {
                "render": function (data, type, row, meta) {
                    return '<a class="btn btn-primary btn-xs" href="/Home/StudentInfo/' + row.Id + '">View</a> <a class="btn btn-danger btn-xs" href="/Home/StudentDelete/' + row.Id + '">Delete</a>';
                }
            }
        ],
        dom: 'Btlfrip',
        buttons: [
            { extend: 'colvis', columns:':not(.permanent)' },
            { extend:'copy'},
            { extend:'excel'},
            { extend:'csv'},
            { extend:'pdf'},
            { extend:'print'}
        ]
    });

    table.buttons().container().appendTo($("#printbar"));
});