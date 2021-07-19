// pmnamevsnooftitles start
Highcharts.chart('pmnamevsnooftitles', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'PM Name vs No of Titles',
        align: 'left',
        style: {
            color: '#333333',          
            fontSize: '17px',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Benitra William', 'Thomas Dave', 'June Christopsher', 'David Richard', 'Albert Christopsher'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'value',
        data: [17, 16, 16, 17, 20],
        showInLegend: false,
        color:'#66bec6'
    }]
});
// pmnamevsnooftitles end
// pmvsstagevstitle start
Highcharts.chart('pmvsstagevstitle', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'PM vs Stage vs Title',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Benita',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: '#66bec6'

    }, {
        name: 'Thomas',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
        color: '#83c4b0'

    }, {
        name: 'June',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
        color: '#32719f'

    }, {
        name: 'David',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
        color: '#499ebe'

    }, {
        name: 'John',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
        color: '#93afc8'

    }, {
        name: 'Albert',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
        color: '#889899'

    }]
});

// pmvsstagevstitle end

//ontimedelivery start 
Highcharts.chart('ontimedelivery', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'On Time Delivery',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
        },
        title: {
            text: '',
        }
    }, { // Secondary yAxis
        title: {
            text: '',
        },
        labels: {
            enabled: false
        }
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: '#4f99a2',
        tooltip: {
            valueSuffix: ' mm'
        },
        showInLegend: false,
    }, {
        name: 'Temperature',
        type: 'spline',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: '#e3584d',
        showInLegend: false,

    }]
});
//ontimedelivery end
// pmvsstagevsqueries start
Highcharts.chart('pmvsstagevsqueries', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Pm vs Stage vs Queries',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Benita',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: '#66bec6'

    }, {
        name: 'Thomas',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
        color: '#83c4b0'

    }, {
        name: 'June',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
        color: '#32719f'

    }, {
        name: 'David',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
        color: '#499ebe'

    }, {
        name: 'John',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
        color: '#93afc8'

    }, {
        name: 'Albert',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
        color: '#889899'

    }]
});

// pmvsstagevsqueries end
// overallbooks start
Highcharts.chart('overallbooks', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Overall Books',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: 'Book Complexity',
        align: 'center',
        verticalAlign: 'middle',
        y: 35,
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    
                    color: 'white'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '55%'],
            size: '85%',
            colors: [
                '#32719f',
                '#83c4b0',
                '#dbe0e0',
            ],
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '75%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
        ],
        showInLegend: true, 
    }]
});
// overallbooks start
//monthvspages start 
Highcharts.chart('monthvspages', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Month vs Pages',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: '',
    },
    xAxis: {
        categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [0, 1, 4, 4, 5, 2, 3, 7],
        color: '#83c4b0',
        showInLegend: false,
    }]
});
//monthvspages end
// monthvstitles
Highcharts.chart('monthvstitles', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Month vs Titles',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
        },
        title: {
            text: '',
        }
    }, { // Secondary yAxis
        title: {
            text: '',
        },
        labels: {
            enabled: false
        }
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
        color: '#32719f',
        tooltip: {
            valueSuffix: ' mm',
        },
        showInLegend: false, 

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
        color: '#4c9fbf',
        showInLegend: false,

    }]
});
//monthvstitles

// pmvscomplexity start
Highcharts.chart('pmvscomplexity', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'PM vs Complexity',
        align: 'left',
        style: {
            color: '#333333',
            
            fontSize: '17px',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Benita',
            'Thomas',
            'June',
            'David',
            'John',
            'Albert'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
            pointWidth: 15
        },
    },
    series: [{
        name: 'Simple',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
        color: '#66bec6'

    }, {
        name: 'Medium',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5],
        color: '#83c4b0'

    }, {
        name: 'Complex',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3],
        color: '#32719f'

    },]
});

  // pmvscomplexity end