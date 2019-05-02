# Markup Charts

Charts are a useful tool for presenting data but are not very 
accessible for visually impaired users. 

They can also make it difficult for users to make use of the raw 
data if they want to combine it with data from another source or 
collate it differently. 

## TODO 

I'd like to rewrite this more natively as a `Vue.component`. At 
the moment it's not very vue-like in the way it works.  

There's still a lot to do to make the colours, fonts, data labels
more accessible - this is really just a proof of the concept of 
building the chart from the HTML table data. 

## Progressive enhancement

GDS uses progressive enhancement to build pages that work as raw 
HTML with JS added on top to improve the experience for some users. 

## Setup

You can install this and just add the `app.js` and 
`table-chart.js` to your html as shown in the `index.html` 
with `table-chart.js` in the document head and `app.js` inside 
the closing body tag. 

You also need to load the npm installed versions of VueJS, C3 and 
D3. If you have a different dependency management process you
could include these from there or from a CDN.  

```
<link href="node_modules/c3/c3.css" rel="stylesheet">
<script src="node_modules/d3/dist/d3.min.js" charset="utf-8"></script>
<script src="node_modules/c3/c3.min.js"></script>
<script src="node_modules/vue/dist/vue.js"></script>
<script src="lib/js/table-chart.js"></script>
```

You then need to add an app id to the body and a 
`<div class="chart-wrapper"...>` around any tables you want to
chart. See options in the use section below:

If you want to view the example you should run 
`npm install` and then 
`gulp` to load the govuk-frontend and build the css. 

Then you can run the code with an npm http server 
`http-server . -a 127.0.0.1 -p 8000`

## Approach

This repository uses [VueJS](https://vuejs.org/) and [C3](https://c3js.org/) 
to create charts from the data in a standard HTML table by adding 
some markup to the parent div of the table element.

## Use
```
<div class="chart-wrapper"
             type="line"
             series="rows"
             x-axis="Months"
             y-axis="Volume"
             above="false"
             multiple="false"
             smoothed="true"
             stacked="false"
             order="null"
             palette="govuk"
        >
    
    <table id="test-table" class="govuk-table">
```

The div attributes tell the code the type of chart to draw and 
how to read the table data. 

You can chart the data by the rows or columns in the table.  

### Attributes: type
The type attribute specifies which chart type to draw
* line (and spline)
* area (and area-spline)
* pie
* donut 
* bar 
* or a number of other chart types described 
[on the c3 site](https://c3js.org/examples.html).

### Attributes: series
You can draw charts with each chart series being a table row 
or a table column
* rows 
* cols or columns

### Attributes: x-axis and y-axis 
For bar, line and area charts which draw axes you can specify 
what each axis is called. 

### Attributes: above 
At the moment the chart(s) draw below the table unless you 
specify `above="true"` in which case they are inserted above
the table. 

I might change this to position so you can put them side by side 
in a 2 column layout. 

### Attributes: multiple 
You can draw a single chart with all series on one chart or you 
can set `multiple="true"` to draw a separate chart of each 
series. With this option the charts are drawn smaller using a 
2 column layout. 

### Attributes: smoothed 
Rather than specifying chart types as spline or area-spline you 
can just specify line and area and set `smoothed=true`

This draws smooth curves between the points on the chart rather 
than straight lines. 

### Attributes: stacked 
For areas, lines and bar charts you can choose to have the data 
side by side or `stacked=true` into a cummulative total

### Attributes: order 
By default data is rendered in the order it is shown in the 
table data. 

If you want a pie chart ordered by biggest to smallest segment 
you can set `order="desc"` 

### Attributes: palette 
There are a number of predefined palettes or you can pass a 
json list of double quoted hex values 
```
palette='["#b1d581","#b10e1e"]'
```

### Attributes: rotated 
Uses C3's axes rotated property to print horizontal bar charts.

### Attributes: reversed
For time series data you may want to list the
table data in columns in descending order (recent first)
but render the chart with time going left to right.

 