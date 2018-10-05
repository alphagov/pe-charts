# Markup Charts

Charts are a useful tool for presenting data but are not very 
accessible for visually impaired users. 

They can also make it difficult for users to make use of the raw 
data if they want to combine it with data from another source or 
collate it differently. 

## TODO 
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
At the moment the only valid palette option is `palette="govuk"`
but this could be used to add greyscale or colour blindness 
profiles. 

 