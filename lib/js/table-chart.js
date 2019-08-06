var TableChart = Vue.extend({
    //props: ['type','series'],
    data: function () {

        return {
            'tableData': [[]],
            'charts': [],
            'c3Charts': [],
            'above': false,
            'separate': false,
            'order': null,
            'stacked': false,
            'smoothed': true,
            'palette': null,
            'rotated': false,
            'reversed': false,
            'height': null
        }
    },

    methods: {

        getTableData: function () {

            var table = this.$el.querySelector('TABLE')
            var id = table.getAttribute('id')

            this.caption = table.querySelector('CAPTION').textContent

            var data = []

            if (table.rows[0]) {
                for (y=0;y<table.rows.length;y++) {
                    data.push([])
                    for (x=0;x<table.rows[y].cells.length;x++) {
                        data[y][x] = table.rows[y].cells[x].textContent.trim();
                        if ((x * y) > 0) {
                            data[y][x] = parseFloat(data[y][x]);
                        }
                    }
                }
            }

            console.log("tableData", data);

            // Reverse the rows and put the first row back at the front.
            if (this.reversed) {
                console.log("reversing");
                data.reverse();
                data.unshift(data.pop());

            }
            console.log("tableData", data);

            this.tableData = data
        },

        loadAttributes: function() {

            var i, attributes, attr;

            attributes = this.$el.attributes;

            for(i in attributes) {
                attr = attributes[i];
                this[attr.name] = this.parseAttributeValue(attr.value);
                console.log(attr.name, this.parseAttributeValue(attr.value));
            }
        },

        parseAttributeValue: function(value) {

            var parsed;

            switch(true) {

                case value == "true": {
                    parsed = true;
                } break;

                case value == "false": {
                    parsed = false;
                } break;

                case value == "":
                case value == "null": {
                    parsed = null;
                } break;

                default: {
                    parsed = value;
                } break;

            }
            return parsed;
        },

        buildChartData: function() {

            // clone the table data
            var i, chartData, types, options, selector, chart, seriesData, seriesTypes, title;

            chartData = this.tableData.slice(0);

            switch(this.series) {
            case 'columns':
            case 'cols': {
                chartData = this.transpose(chartData);
            } break;
            }

            options = this.getChartOptions();

            if (this.separate) {
                console.log('separate:true');
                for(i=1;i<chartData.length;i++) {
                    seriesData = [
                        chartData[0],
                        chartData[i]
                    ];

                    if (options.isPie | options.isDonut) {
                        seriesData = this.transpose(seriesData);
                    }

                    title = chartData[i][0];

                    options.index = (i-1);

                    chart = this.buildChartObject(options, seriesData);
                    chart.title = title;

                    this.charts.push(chart)

                }
            } else {
                console.log('separate:false');

                options.index = 0;

                chart = this.buildChartObject(options, chartData);

                this.charts.push(chart)
            }

        },

        getChartType: function() {

            var prepend = "", append = "";

            if (this.smoothed) {
                switch(this.type) {
                    case "line": {
                        prepend = "sp";
                    } break;
                    case "area": {
                        append = "-spline";
                    } break;
                }
            }

            return prepend + this.type + append;
        },

        getRowHeadings: function(data) {

            var i, headings = [];
            for (i=1;i<data.length;i++) {
                headings.push(data[i][0]);
            }
            return headings;
        },

        getColHeadings: function(data) {

            var i, headings = [];
            for (i=1;i<data[0].length;i++) {
                headings.push(data[0][i])
            }
            return headings;

        },

        getTypeList: function(headings) {

            var i,types = {};
            for (i in headings) {
                types[headings[i]] = this.getChartType();
            }

            console.log(types);

            return types;
        },

        getChartOptions: function() {

            var options = {
                type: this.type,
                isBar: false,
                isPie: false,
                isDonut: false,
                axisData: this.getAxisData()
            };

            switch (this.type) {
                case 'donut': {
                    options.isDonut = true;
                    options.dataLabels = {
                        format: function (value, ratio, id) {
                            return d3.format(".0%")(ratio);
                        }
                    }
                } break;
                case 'pie': {
                    options.isPie = true;
                    options.dataLabels =  {
                        format: function (value, ratio, id) {
                            return d3.format(".0%")(ratio);
                        }
                    }
                } break;
                case 'bar': {
                    options.isBar = true;
                    options.dataLabels = {
                        format: function (v, id, i, j) {
                            return id + " (" + v + ")";
                        }
                    };
                } break;
                default: {
                    options.dataLabels = {
                        format: function (v, id, i, j) {
                            return v;
                        }
                    };
                } break;
            }

            return options;

        },

        buildChartObject: function(options, chartData) {

            var i, groups, types, selector, chart, headers;

            selector = "#" + "chart-container-" + this.id + '-chart-' + options.index;

            options.axisData.categories = this.getColHeadings(chartData);

            types = this.getTypeList(this.getRowHeadings(chartData));

            chart = {
                bindto: selector,
                data: {
                    x: chartData[0][0],
                    columns: chartData,
                    order: this.order,
                    type: this.getChartType(),
                    types: types
                },
                axis: options.axisData
            }

            if (this.height) {
                chart.size = {
                    height: this.height
                };
            }

            if (this.palette) {
                let palette = null;
                let type = typeof this.palette;
                console.log("Palette data type", type);
                console.log("Palette", this.palette);
                switch (true) {
                    case ((type == 'string')
                            && /^\[.*\]$/.test(this.palette)): {
                        console.log('Custom palette');
                        try {
                            palette = JSON.parse(this.palette);
                        } catch (err) {
                            console.log("Parse error", err);
                        }
                    } break;
                    case ((type == 'string')
                            && /^[a-zA-Z0-9]+$/.test(this.palette)): {
                        console.log('Named palette');
                        palette = this.getPalettePattern(this.palette);
                    } break;
                    case (type == 'array'): {
                        console.log('Custom palette');
                        palette = this.palette;
                    } break;
                    default: {
                        console.log('Default palette');
                    }
                }
                if (palette) {
                    chart.color = {
                        pattern: palette
                    };
                }
            }

            switch (this.type) {
                case "pie":
                case "donut": {
                    chart[this.type] = {
                        label: options.dataLabels
                    };
                } break;
                case "bar":
                case "line":
                case "area": {
                    if (this.stacked) {
                        groups = this.getRowHeadings(chartData);
                        chart.data.groups = [groups];
                    }
                }
                default: {
                    chart.data.labels = options.dataLabels;
                    chart.padding = {
                        right: 20
                    };
                }
            }

            return chart;

        },

        getAxisData: function() {

            var xLabel = this['x-axis']
            var yLabel = this['y-axis']

            var axisData = {
                x: {
                    type: 'category',
                    label: {
                        text: xLabel,
                        position: 'outer-center'
                    }
                },
                y: {
                    label: {
                        text: yLabel,
                        position: 'outer-middle'
                    }
                }
            };
            axisData.rotated = this.rotated;

            return axisData;
        },

        drawCharts: function() {

            var i, chart;
            this.c3Charts = [];

            for (i in this.charts) {
                (function (vue, i) {
                    chart = vue.charts[i];
                    console.log(chart);
                    vue.c3Charts.push(c3.generate(chart));
                })(this, i);
            }

            window.addEventListener("hashchange", this.hashchange, false);
        },

        hashchange: function() {
            console.log("Rerendering charts following hash change");
            this.rerender();
        },

        rerender: function() {
            var i, chart;
            for (i in this.c3Charts) {
                chart = this.c3Charts[i];
                chart.flush();
            }
        },

        transpose: function(sourceData) {

            var targetData = [];
            var sourceRows, sourceCols

            sourceCols = sourceData[0].length;
            sourceRows = sourceData.length

            for(var y = 0; y < sourceRows; y++){
                for(var x = 0; x < sourceCols; x++){

                    cell = sourceData[y][x]

                    if (!targetData[x]) targetData[x] = [];

                    targetData[x][y] = cell;

                }
            }

            return targetData;

        },

        getPalettePattern(palette) {

            var palettes = {
                govuk: [
                    "#005ea5", // blue
                    "#ffbf47", // yellow
                    "#2e358b", // purple
                    "#006435", // green
                    "#f47738", // orange
                    "#2b8cc4", // light-blue
                    "#28a197", // turquoise
                    "#f499be", // light-pink
                    "#b10e1e", // red
                    "#6f72af", // light-purple
                    "#d53880", // pink
                    "#df3034", // bright-red
                    "#912b88", // bright-purple
                    "#b58840", // brown
                    "#85994b"  // light-green
                ],
                monochrome_blue:   ["#0F084B","#26408B","#3D60A7","#81B1D5","#A0D2E7"],
                monochrome_purple: ["#4B0F08","#8B2640","#A73D60","#D581B1","#E7A0D2"],
                monochrome_green:  ["#084B0F","#408B26","#60A73D","#B1D581","#D2E7A0"]
            };

            return palettes[palette];
        }
    },
    template: '<div class="chart-wrapped">'+
            '<div v-if="!above" class="chart-wrap-table" v-html="this.$el.innerHTML"></div>'+
            '<a v-bind:href="\'#skip-\' + this.id" class="govuk-skip-link">Skip chart</a>'+
            '<div v-if="type != \'none\'" class="govuk-grid-row">'+
            '<div v-bind:id="\'chart-container-\' + this.id">'+
                '<div v-for="(chart, index) in charts" '+
                     'v-bind:class="{\'govuk-grid-column-one-half\':(charts.length>1), '+
                                    '\'govuk-grid-column-full\':(charts.length == 1)}" >'+
                    '<caption class="govuk-caption-m" v-if="chart.title">{{ chart.title }}</caption>'+
                    '<div v-bind:id="\'chart-container-\'+ this.id + \'-chart-\' + index" '+
                        'style="background-color: #fafafa; outline: 1px solid #ddd;padding: 1em 0;margin-bottom:2em;">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+
            '<div v-if="above" class="chart-wrap-table" v-html="this.$el.innerHTML"></div>'+
            '<a v-bind:name="\'skip-\' + this.id"></a>'+
        '</div>',

    beforeCreate: function() {
        console.log("BEFORE CREATE");
    },
    created: function() {
        console.log("CREATED");
    },
    beforeMount: function() {
        console.log("BEFORE MOUNT");

        this.loadAttributes();

        this.getTableData();

        this.buildChartData();

    },
    mounted: function() {
        console.log('MOUNTED');

        if (this.type != 'none') {

            //TODO - fix this.
            //this.drawCharts();
            window.setTimeout(this.drawCharts,500);
        }
    }
});