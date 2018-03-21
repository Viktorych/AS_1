$(document).ready(function () {
    var tree = $('#jstree');
    var orgChart=getManningtableData();

    tree.jstree({
        'core': {
            'data':orgChart
        }
    });
    tree.on('ready.jstree', function () {
        tree.jstree("open_all");
        tree.jstree('select_node', 'ПАО Русполимет');
    });
    tree.bind("select_node.jstree", function (event, data) {

        //console.log(data.node.parent);
        if (data.node.parent === "#") {
            $(".propertys").html("Предприятие : " + data.node.text);
        } else {
            $(".propertys").html("Подчинение: " + data.node.parent + "<br>   Подразделение : " + data.node.text + "<br>");
            //console.log(data.node.data);
        }
    });
    google.charts.load('current', {packages: ["orgchart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        orgChart.forEach(function (item, i, arr) {

            data.addRow([item.id,item.parent,""]);
            //console.log(ManningtableData)
        });
        /*
        data.addRows([
            [{v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>'},
                '', 'The President'],
            [{v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>'},
                'Mike', 'VP'],
            ['Alice', 'Mike', ''],
            ['Bob', 'Jim', 'Bob Sponge'],
            ['Carol', 'Bob', '']
        ]);
*/
        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart-container'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml: true});
    }

    /*
        $('#users tfoot th').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
        } );

        var table=$('#users').DataTable( {
            data: getuserssdata(),
            columns: [
                { title: "л.н." },
                { title: "Фамилия Имя Отчество" },
                { title: "Должность" },
                { title: "Подразделение" },
                { title: "Телефон" },


            ],
            "iDisplayLength": 16,
            "language":
                {
                    "url":
                        "config/Russian.json"
                }

        } );
        */
    /*
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
    */


});

