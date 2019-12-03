import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class PieChart extends Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.PieChart);
    
        chart.data = [{
            "belief": "Relationships",
            "value": 25
          }, {
            "belief": "Mindfullness",
            "value": 25
          }, {
            "belief": "Purpose",
            "value": 25
          }, {
            "belief": "Thought",
            "value": 25
          }, {
            "belief": "Beliefs",
            "value": 25
          }, {
            "belief": "Energy",
            "value": 25
          }];
        
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "belief";
    
        this.chart = chart;

        // let chartOne = am4core.create("chartdivone", am4charts.PieChart);
    
        // chartOne.data = [{
        //     "belief": "Relationships",
        //     "value": 25
        //   }, {
        //     "belief": "Mindfullness",
        //     "value": 25
        //   }, {
        //     "belief": "Purpose",
        //     "value": 25
        //   }, {
        //     "belief": "Thought",
        //     "value": 25
        //   }, {
        //     "belief": "Beliefs",
        //     "value": 25
        //   }, {
        //     "belief": "Energy",
        //     "value": 25
        //   }];
        
        // let pieSeriesOne = chartOne.series.push(new am4charts.PieSeries());
        // pieSeriesOne.dataFields.value = "value";
        // pieSeriesOne.dataFields.category = "belief";
    
        // this.chartOne = chartOne;

        // let chartTwo = am4core.create("chartdivTwo", am4charts.PieChart);
    
        // chartTwo.data = [{
        //     "belief": "Relationships",
        //     "value": 25
        //   }, {
        //     "belief": "Mindfullness",
        //     "value": 25
        //   }, {
        //     "belief": "Purpose",
        //     "value": 25
        //   }, {
        //     "belief": "Thought",
        //     "value": 25
        //   }, {
        //     "belief": "Beliefs",
        //     "value": 25
        //   }, {
        //     "belief": "Energy",
        //     "value": 25
        //   }];
        
        // let pieSeriesTwo = chartTwo.series.push(new am4charts.PieSeries());
        // pieSeriesTwo.dataFields.value = "value";
        // pieSeriesTwo.dataFields.category = "belief";
    
        // this.chartTwo = chartTwo;
      }
    
      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        //   this.chartOne.dispose();
        //   this.chartTwo.dispose();
        }
      }
    
      render() {        
        return (
            <div>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                {/* <div id="chartdivone" style={{ width: "100%", height: "500px" }}></div>
                <div id="chartdivTwo" style={{ width: "100%", height: "500px" }}></div> */}
            </div>
         
        );
      }
    }

export default PieChart