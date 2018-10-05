# Markup Charts

Charts are a useful tool for presenting data but are not very 
accessible for visually impaired users. 

They can also make it difficult for users to make use of the raw 
data if they want to combine it with data from another source or 
collate it differently. 

## Progressive enhancement

GDS uses progressive enhancement to build pages that work as raw 
HTML with JS added on top to improve the experience for some users. 

## Approach

This repository uses [VueJS](https://vuejs.org/) and [C3](https://c3js.org/) 
to create charts from the data in a standard HTML table by adding 
some markup to the parent div of the table element.

```
<div    class="chart-wrapper" 
        type="bar" 
        series="rows" 
        x-axis="Years" 
        y-axis="Volume" >
    
    <table id="test-table" class="govuk-table">
```

The div attributes tell the code the type of chart to draw and 
how to read the table data. 

You can create line (+spline), area, bar, pie (+donut) charts 
or a number of other chart types described 
[on the c3 site](https://c3js.org/examples.html).

You can chart the data by the rows or columns in the table.  

     