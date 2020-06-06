import React, { useState, useEffect } from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import './Chart.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  }
}));

const Chart = (props) => {
  const classes = useStyles();
  const mappingObj = {
    '20 80 Portfolio' : '2080Portfolio',
    '40 60 Portfolio' : '4060portfolio',
  }
  const [ selectedPortFolioAPI, setSelectedPortFolioAPI] = useState('2080Portfolio')
  const [selectedPortFolioName, setPortFolioValue] = useState('20 80 Portfolio')
  const [chartData, setChartData] = useState([])
  const [errorState, setErrorState] = useState(false)
  const [currency, setCurrencyType] = React.useState(0);

  const getChartConfig = (chartData, selectedPortFolioName) => ({
    title: {
      text: "Portfolio value based on gross returns"
    },
    legend: {
      enabled: true
  },
    chart: {
      backgroundColor: 'white',
      polar: true,
      type: 'line'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Years'
      },
      //   labels: {
      //     format: '{value:%Y-%m-%d}'
      //   }
    },
    tooltip: {
      formatter: function () {
        var formatStr = "";

        for (var i = 0; i < this.points.length; i++) {
          var point = this.points[i];
          var date = new Date(point.x);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          let amount = currency === 0 ?  50* point.y + '<b> SGD </b>' :  70 * point.y + '<b> USD </b>';
          formatStr += `<b>Date</b>" ${day}/${month}/${year}" </span><br/>`
          // Highcharts wont format the numbers (point.y) once we've taken control of the tooltip
          formatStr += '<span style="color:' + point.color + '">●</span>' + point.series.name + ':  <b>' + amount + '</b><br/>';
        }

        return formatStr;
      },
      shared: true
    },
    yAxis: {
      title: {
        text: '% change'
      },
      labels: {
        color: 'white',
        align: 'left',
        formatter: function () {
          return (this.value > 0 ? " + " : "") + this.value + "%";
        }
      },
      plotLines: [
        {
          value: 0,
          width: 2,
          color: "silver"
        }
      ]
    },
    series: [
      {
        data: (chartData && chartData[0] && chartData[0].data && chartData[0].data.stashAwayPortfolio) || [],
        name: 'StashAway Portfolio',
        color: 'blue'
      },
      {
        data: (chartData && chartData[1] && chartData[1].data && chartData[1].data[selectedPortFolioAPI]) || [],
        name: selectedPortFolioName,
        color: 'yellow'
      }
    ]
  })

  useEffect(() => {
    const fetchData = async () => {
      await axios.all([
        axios.get('/stashAwayPortfolio'),
        axios.get(`/${selectedPortFolioAPI}`),
      ])
        .then(result => {
          console.log('----------------', result)
          setChartData(result)
        })
        .catch(error => {
          setErrorState(true);
          console.log('something went wrong')
        });
      }
    fetchData();
  }, [selectedPortFolioAPI]);

  const handleChange = (event) => {
    setPortFolioValue(event.target.value);
    const getValue = mappingObj[event.target.value];
    setSelectedPortFolioAPI(getValue);
  };

  const setCurrency = (event, currency) => {
    setCurrencyType(currency)
  }

  const chartConfig = getChartConfig(chartData, selectedPortFolioName, selectedPortFolioAPI);
  console.log(chartConfig)
  return (
    <section className="main-content">
      <div className="dropdown-section">
        <div className="invest-heading">
          <div className="gen-heading">General Investing</div>
          <div className="index-heading">StashAway Portfolio</div>
        </div>
        <div className="vs">Vs</div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Portfolio</InputLabel>
            <Select
              native
              onChange={handleChange}
              value={selectedPortFolioName}
              label="Portfolio"
              inputProps={{
                name: 'Portfolio',
                id: 'outlined-age-native-simple',
              }}
            >

              <option value={'20 80 Portfolio'}>20 80 Portfolio</option>
              <option value={'40 60 Portfolio'}>40 60 Portfolio</option>
            </Select>
          </FormControl>
        </div>
      </div>
      <div class="currency-tabs">
        <Paper square>
          <Tabs
            value={currency}
            indicatorColor="primary"
            textColor="primary"
            onChange={setCurrency}
            aria-label="tabs"
          >
            <Tab label="SGD" />
            <Tab label="USD" />
          </Tabs>
        </Paper>
      </div>
      <div>
        {!errorState ? (
          <div className="high-charts">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={"stockChart"}
              options={chartConfig}
            /></div>) : (
            <div>Something went worng</div>
         )}
      </div>
    </section>
  )
}

export default React.memo(Chart);