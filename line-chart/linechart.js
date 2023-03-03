
// dimention and margin
var margin = {top: 100, right: 150, bottom: 100, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%Y-%m-%d"); 

// time Format for x axis
var timeFormat = d3.timeFormat("%b %y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().rangeRound([height, 0]);
var ySqrt = d3.scaleSqrt().rangeRound([height, 1]);
var yLog = d3.scaleLog().rangeRound([height, 1]);

// define the line
var valueline1 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Catan_count); });

var valueline2 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Dominion_count); });

var valueline3 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Codenames_count); });

var valueline4 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Terraforming_Mars_count); });

var valueline5 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Dixit_count); });

var valueline6 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Gloomhaven_count); });

var valueline7 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Magic_The_Gathering_count); });

var valueline8 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.Monopoly_count); });



// define the line
var sqrtValueline1 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Catan_count); });

var sqrtValueline2 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Dominion_count); });

var sqrtValueline3 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Codenames_count); });

var sqrtValueline4 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Terraforming_Mars_count); });

var sqrtValueline5 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Dixit_count); });

var sqrtValueline6 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Gloomhaven_count); });

var sqrtValueline7 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Magic_The_Gathering_count); });

var sqrtValueline8 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return ySqrt(d.Monopoly_count); });



// define the line
var logValueline1 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Catan_count); });

var logValueline2 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Dominion_count); });

var logValueline3 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Codenames_count); });

var logValueline4 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Terraforming_Mars_count); });

var logValueline5 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Dixit_count); });

var logValueline6 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Gloomhaven_count); });

var logValueline7 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Magic_The_Gathering_count); });

var logValueline8 = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return yLog(d.Monopoly_count); });



// read csv file
d3.csv("boardgame_ratings.csv").then(function(data) {
    
    var lineArray = [];
    var name = [];
    var col_name = [];
    var col_rank = [];

    for(var i = 0; i < data.columns.length; i++){

        if(data.columns[i].includes("count"))
            name.push(data.columns[i].replace(/\=count/, ""))

        if(data.columns[i].includes("count"))
            col_name.push(data.columns[i])
            
        if(data.columns[i].includes("rank"))
            col_rank.push(data.columns[i])
    };

    var colorArray = [d3.schemeCategory10, d3.schemeAccent];
    var colorScheme = d3.scaleOrdinal(colorArray[0]);

    for(i = 0; i < colorArray[0].length; i++){
        var lineDict = {};
        lineDict.color = colorScheme(i);
        lineDict.id = name[i];
        lineDict.col = col_name[i];
        lineArray.push(lineDict);
    }
    
    // format the data
    data.forEach(function(d) {
        d.date = parseTime(d.date);
        d.Catan_count = +d[col_name[0]];
        d.Dominion_count = +d[col_name[1]];
        d.Codenames_count =+d[col_name[2]];
        d.Terraforming_Mars_count = +d[col_name[3]];
        d.Dixit_count = +d[col_name[4]];
        d.Gloomhaven_count = +d[col_name[5]];
        d.Magic_The_Gathering_count = +d[col_name[6]];
        d.Monopoly_count = +d[col_name[7]];
        d.Catan_rank = +d[col_rank[0]];
        d.Dominion_rank = +d[col_rank[1]];
        d.Codenames_rank =+d[col_rank[2]];
        d.Terraforming_Mars_rank = +d[col_rank[3]];
        d.Dixit_rank = +d[col_rank[4]];
        d.Gloomhaven_rank = +d[col_rank[5]];
        d.Magic_The_Gathering_rank = +d[col_rank[6]];
        d.Monopoly_rank = +d[col_rank[7]];
    });

    // scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) {
            return Math.max(
                d.Catan_count, d.Dominion_count, d.Codenames_count, d.Terraforming_Mars_count, 
                d.Gloomhaven_count, d.Magic_The_Gathering_count, d.Dixit_count, d.Monopoly_count
            );
        })
    ]);
    ySqrt.domain([0, d3.max(data, function(d) {
        return Math.max(
            d.Catan_count, d.Dominion_count, d.Codenames_count, d.Terraforming_Mars_count, 
            d.Gloomhaven_count, d.Magic_The_Gathering_count, d.Dixit_count, d.Monopoly_count
        );
    })
    ]);
    yLog.domain([1, d3.max(data, function(d) {
        return Math.max(
            d.Catan_count, d.Dominion_count, d.Codenames_count, d.Terraforming_Mars_count, 
            d.Gloomhaven_count, d.Magic_The_Gathering_count, d.Dixit_count, d.Monopoly_count
        );
    })
    ]);


    // append svgA
    var svgA = d3.select("body").append("svg")
        .attr("id", "svg-a")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    // title
    var title = svgA.append("text")
        .attr("id", "title-a")
        .text("Number of Ratings 2016-2020")
        .attr("x", (width + margin.left + margin.right)/2)
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("y", margin.top * 0.5)
        .attr("text-anchor", "middle");

    // plot elements
    var plot = svgA.append("g")
        .attr("id", "plot-a")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the line paths

    var line = plot.append("g")
        .attr("id", "lines-a")
        .data([data])

    var line1 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[0])
        .attr("stroke-width", 2)
        .attr("d", valueline1);
  
    var line1Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[0]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[0])
        .text(name[0]);

    var line2 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[1])
        .attr("stroke-width", 2)
        .attr("d", valueline2);

    var line2Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[1]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[1])
        .text(name[1]);
    
    var line3 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[2])
        .attr("stroke-width", 2)
        .attr("d", valueline3);

    var line3Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[2]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[2])
        .text(name[2]);
  
    var line4 = line.append("path")
        .attr("class", "line")  
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[3])
        .attr("stroke-width", 2)
        .attr("d", valueline4);

    var line4Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[3]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[3])
        .text(name[3]);
  
    var line5 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[4])
        .attr("stroke-width", 2)
        .attr("d", valueline5);

    var line5Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[4]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[4])
        .text(name[4]);
  
    var line6 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[5])
        .attr("stroke-width", 2)
        .attr("d", valueline6);

    var line6Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[5]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[5])
        .text(name[5]);
  
    var line7 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke",  d3.schemeCategory10[6])
        .attr("stroke-width", 2)
        .attr("d", valueline7);
    
    var line7Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[6]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[6])
        .text(name[6]);
    
    var line8 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[7])
        .attr("stroke-width", 2)
        .attr("d", valueline8);

    var line8Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[7]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[7])
        .text(name[7]);

    // add the x Axis
    var xAxis = plot.append("g")
        .attr("id", "x-axis-a")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(timeFormat));

    // add the x Axis label
    var xLabel = xAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("x", width/2)
        .attr("y", margin.bottom * 0.4)
        .style("text-anchor", "middle")
        .text("Month");
    
    // add the y Axis
    var yAxis = plot.append("g")
        .attr("id", "y-axis-a")
        .call(d3.axisLeft(y));

    // add the y Axis label
    var yLabel = yAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("transform", "translate(" + (-margin.left * 0.8) + "," + (height/2) + ") rotate(-90)")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Num of Ratings");




    // 3b
    var svgB = d3.select("body").append("svg")
    .attr("id", "svg-b")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)


    // title
    var title = svgB.append("text")
        .attr("id", "title-b")
        .text("Number of Ratings 2016-2020 with Rankings")
        .attr("x", (width + margin.left + margin.right)/2)
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("y", margin.top * 0.5)
        .attr("text-anchor", "middle");

    // plot elements
    var plot = svgB.append("g")
        .attr("id", "plot-b")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the line paths
 
    var line = plot.append("g")
        .attr("id", "lines-b")
        .data([data])

    var line1 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[0])
        .attr("stroke-width", 2)
        .attr("d", valueline1);
  
    var line1Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[0]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[0])
        .text(name[0]);

    var line2 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[1])
        .attr("stroke-width", 2)
        .attr("d", valueline2);

    var line2Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[1]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[1])
        .text(name[1]);
    
    var line3 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[2])
        .attr("stroke-width", 2)
        .attr("d", valueline3);

    var line3Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[2]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[2])
        .text(name[2]);
  
    var line4 = line.append("path")
        .attr("class", "line")  
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[3])
        .attr("stroke-width", 2)
        .attr("d", valueline4);

    var line4Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[3]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[3])
        .text(name[3]);
  
    var line5 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[4])
        .attr("stroke-width", 2)
        .attr("d", valueline5);

    var line5Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[4]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[4])
        .text(name[4]);
  
    var line6 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[5])
        .attr("stroke-width", 2)
        .attr("d", valueline6);

    var line6Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[5]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[5])
        .text(name[5]);
  
    var line7 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke",  d3.schemeCategory10[6])
        .attr("stroke-width", 2)
        .attr("d", valueline7);
    
    var line7Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[6]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[6])
        .text(name[6]);
    
    var line8 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[7])
        .attr("stroke-width", 2)
        .attr("d", valueline8);

    var line8Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+y(data.slice(-1)[0][col_name[7]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[7])
        .text(name[7]);

    // add the x Axis
    var xAxis = plot.append("g")
        .attr("id", "x-axis-b")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(timeFormat));

    // add the x Axis label
    var xLabel = xAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("x", width/2)
        .attr("y", margin.bottom * 0.4)
        .style("text-anchor", "middle")
        .text("Month");
    
    // add the y Axis
    var yAxis = plot.append("g")
        .attr("id", "y-axis-b")
        .call(d3.axisLeft(y));

    // add the y Axis label
    var yLabel = yAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("transform", "translate(" + (-margin.left * 0.8) + "," + (height/2) + ") rotate(-90)")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Num of Ratings");


    circleData = [];
    for (i = 2; i < data.length; i = i+3) {
        circleData.push(data[i]);
    };

    var circles = plot.append("g")
        .attr("id", "symbols-b")
        .selectAll("dot")
        .data(circleData)
        .enter()

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d[col_name[0]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[0])
        .attr("stroke", "none");
        
        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return y(d[col_name[0]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[0]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d[col_name[2]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[2])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return y(d[col_name[2]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[2]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d[col_name[3]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[3])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return y(d[col_name[3]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[3]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d[col_name[4]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[4])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return y(d[col_name[4]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[4]]; })
        .attr("font-size", "10px");


    var legend = plot.append("g")
        .attr("id", "legend-b")
        .attr("transform", "translate(" + (width + margin.right * 0.5) + "," + (height) + ")")
        
        legend.append("circle")
        .attr("r", 12)
        .attr("fill", "black")
        .attr("stroke", "none");

        legend.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "white")      
        .attr("font-size", "10px")
        .text("rank");

        legend.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr("font-size", "10px")
        .attr("transform", "translate(0," + (margin.bottom * 0.2) + ")")
        .text("BoardGameGeek Rank");


    // 3c-1
    var svgC1 = d3.select("body").append("svg")
    .attr("id", "svg-c-1")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)


    // title
    var title = svgC1.append("text")
        .attr("id", "title-c-1")
        .text("Number of Ratings 2016-2020 (Square root Scale)")
        .attr("x", (width + margin.left + margin.right)/2)
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("y", margin.top * 0.5)
        .attr("text-anchor", "middle");

    // plot elements
    var plot = svgC1.append("g")
        .attr("id", "plot-c-1")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the line paths
 
    var line = plot.append("g")
        .attr("id", "lines-c-1")
        .data([data])

    var line1 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[0])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline1);
  
    var line1Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[0]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[0])
        .text(name[0]);

    var line2 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[1])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline2);

    var line2Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[1]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[1])
        .text(name[1]);
    
    var line3 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[2])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline3);

    var line3Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[2]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[2])
        .text(name[2]);
  
    var line4 = line.append("path")
        .attr("class", "line")  
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[3])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline4);

    var line4Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[3]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[3])
        .text(name[3]);
  
    var line5 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[4])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline5);

    var line5Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[4]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[4])
        .text(name[4]);
  
    var line6 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[5])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline6);

    var line6Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[5]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[5])
        .text(name[5]);
  
    var line7 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke",  d3.schemeCategory10[6])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline7);
    
    var line7Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[6]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[6])
        .text(name[6]);
    
    var line8 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[7])
        .attr("stroke-width", 2)
        .attr("d", sqrtValueline8);

    var line8Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+ySqrt(data.slice(-1)[0][col_name[7]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[7])
        .text(name[7]);

    // add the x Axis
    var xAxis = plot.append("g")
        .attr("id", "x-axis-c-1")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(timeFormat));

    // add the x Axis label
    var xLabel = xAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("x", width/2)
        .attr("y", margin.bottom * 0.4)
        .style("text-anchor", "middle")
        .text("Month");
    
    // add the y Axis
    var yAxis = plot.append("g")
        .attr("id", "y-axis-c-1")
        .call(d3.axisLeft(ySqrt));

    // add the y Axis label
    var yLabel = yAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("transform", "translate(" + (-margin.left * 0.8) + "," + (height/2) + ") rotate(-90)")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Num of Ratings");


    circleData = [];
    for (i = 2; i < data.length; i = i+3) {
        circleData.push(data[i]);
    };

    var circles = plot.append("g")
        .attr("id", "symbols-c-1")
        .selectAll("dot")
        .data(circleData)
        .enter()

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return ySqrt(d[col_name[0]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[0])
        .attr("stroke", "none");
        
        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return ySqrt(d[col_name[0]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[0]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return ySqrt(d[col_name[2]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[2])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return ySqrt(d[col_name[2]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[2]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return ySqrt(d[col_name[3]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[3])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return ySqrt(d[col_name[3]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[3]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return ySqrt(d[col_name[4]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[4])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return ySqrt(d[col_name[4]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[4]]; })
        .attr("font-size", "10px");


    var legend = plot.append("g")
        .attr("id", "legend-c-1")
        .attr("transform", "translate(" + (width + margin.right * 0.5) + "," + (height) + ")")
        
        legend.append("circle")
        .attr("r", 12)
        .attr("fill", "black")
        .attr("stroke", "none");

        legend.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "white")      
        .attr("font-size", "10px")
        .text("rank");

        legend.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr("font-size", "10px")
        .attr("transform", "translate(0," + (margin.bottom * 0.2) + ")")
        .text("BoardGameGeek Rank");









    // 3c-2
    var svgC2 = d3.select("body").append("svg")
    .attr("id", "svg-c-2")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)


    // title
    var title = svgC2.append("text")
        .attr("id", "title-c-2")
        .text("Number of Ratings 2016-2020 (Log Scale)")
        .attr("x", (width + margin.left + margin.right)/2)
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("y", margin.top * 0.5)
        .attr("text-anchor", "middle");

    // plot elements
    var plot = svgC2.append("g")
        .attr("id", "plot-c-2")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the line paths
 
    var line = plot.append("g")
        .attr("id", "lines-c-2")
        .data([data])

    var line1 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[0])
        .attr("stroke-width", 2)
        .attr("d", logValueline1);
  
    var line1Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[0]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[0])
        .text(name[0]);

    var line2 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[1])
        .attr("stroke-width", 2)
        .attr("d", logValueline2);

    var line2Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[1]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[1])
        .text(name[1]);
    
    var line3 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[2])
        .attr("stroke-width", 2)
        .attr("d", logValueline3);

    var line3Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[2]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[2])
        .text(name[2]);
  
    var line4 = line.append("path")
        .attr("class", "line")  
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[3])
        .attr("stroke-width", 2)
        .attr("d", logValueline4);

    var line4Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[3]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[3])
        .text(name[3]);
  
    var line5 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[4])
        .attr("stroke-width", 2)
        .attr("d", logValueline5);

    var line5Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[4]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[4])
        .text(name[4]);
  
    var line6 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[5])
        .attr("stroke-width", 2)
        .attr("d", logValueline6);

    var line6Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[5]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[5])
        .text(name[5]);
  
    var line7 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke",  d3.schemeCategory10[6])
        .attr("stroke-width", 2)
        .attr("d", logValueline7);
    
    var line7Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[6]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[6])
        .text(name[6]);
    
    var line8 = line.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d3.schemeCategory10[7])
        .attr("stroke-width", 2)
        .attr("d", logValueline8);

    var line8Label = line.append("text")
        .attr("transform", "translate("+(width + margin.right * 0.1)+","+yLog(data.slice(-1)[0][col_name[7]])+")")
        .attr("font-size", "12px")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", d3.schemeCategory10[7])
        .text(name[7]);

    // add the x Axis
    var xAxis = plot.append("g")
        .attr("id", "x-axis-c-2")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(timeFormat));

    // add the x Axis label
    var xLabel = xAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("x", width/2)
        .attr("y", margin.bottom * 0.4)
        .style("text-anchor", "middle")
        .text("Month");
    
    // add the y Axis
    var yAxis = plot.append("g")
        .attr("id", "y-axis-c-2")
        .call(d3.axisLeft(yLog));

    // add the y Axis label
    var yLabel = yAxis.append("text")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .attr("transform", "translate(" + (-margin.left * 0.8) + "," + (height/2) + ") rotate(-90)")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Num of Ratings");


    circleData = [];
    for (i = 2; i < data.length; i = i+3) {
        circleData.push(data[i]);
    };

    var circles = plot.append("g")
        .attr("id", "symbols-c-2")
        .selectAll("dot")
        .data(circleData)
        .enter()

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return yLog(d[col_name[0]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[0])
        .attr("stroke", "none");
        
        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return yLog(d[col_name[0]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[0]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return yLog(d[col_name[2]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[2])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return yLog(d[col_name[2]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[2]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return yLog(d[col_name[3]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[3])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return yLog(d[col_name[3]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[3]]; })
        .attr("font-size", "10px");

        circles.append("circle")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return yLog(d[col_name[4]]); })
        .attr("r", 10)
        .attr("fill", d3.schemeCategory10[4])
        .attr("stroke", "none");

        circles.append("text")
        .attr("x", function(d) { return x(d.date); })
        .attr("y", function(d) { return yLog(d[col_name[4]]); })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return d[col_rank[4]]; })
        .attr("font-size", "10px");


    var legend = plot.append("g")
        .attr("id", "legend-c-2")
        .attr("transform", "translate(" + (width + margin.right * 0.5) + "," + (height) + ")")
        
        legend.append("circle")
        .attr("r", 12)
        .attr("fill", "black")
        .attr("stroke", "none");

        legend.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "white")      
        .attr("font-size", "10px")
        .text("rank");

        legend.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr("font-size", "10px")
        .attr("transform", "translate(0," + (margin.bottom * 0.2) + ")")
        .text("BoardGameGeek Rank");


    var gtid = d3.select("body").append("text")
        .attr("id", "signature")
        .text("hhong96")
        .attr("text-anchor", "right")

});




      




 