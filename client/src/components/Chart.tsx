import React, { FunctionComponent, useContext } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ThemeContext } from 'styled-components';
import { Loader, Container } from './Chart.styles';
import { IEnergyWeather } from '../types';

enum CHART_LABELS {
    Temperature = 'Temperature',
    EnergyConsumption = 'Energy Consumption'
}

interface IChartProps {
    data?: {
        getConsumptionAndWeatherDataWithAnomalies: IEnergyWeather[]
    },
    loading: boolean
}

const Chart: FunctionComponent<IChartProps> = ({ data, loading }) => {
    const themeContext = useContext(ThemeContext);

    const options = {

        chart: {
            type: 'spline',
            backgroundColor: themeContext.primary,
        },
        title: {
            text: CHART_LABELS.EnergyConsumption,
            style: {
                color: themeContext.text
            }
        },
        yAxis: {
            title: CHART_LABELS.EnergyConsumption,
            labels: {
                style: {
                    color: themeContext.text
                }
            },
        },
        legend: {
            itemStyle: { color: themeContext.text },
            itemHoverStyle: { color: themeContext.textDarker }
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter() {
                    return Highcharts.dateFormat('%e - %b - %y', this.value)
                },
                style: {
                    color: themeContext.text
                }
            }
        },
        tooltip: {
            formatter: function () {
                if (this.series.name === CHART_LABELS.Temperature) {
                    return 'Time: <b> ' + this.point.timestamp + '<br></br>Average Temperature:<b> ' + this.point.y + '</b>  <br></br>Average Humidity: <b> ' + this.point.averageHumidity + '</b>';
                }
                return 'Time: <b> ' + this.point.timestamp + '<br></br>Energy Consumption:<b> ' + this.point.y + '</b>  <br></br>Anomaly: <b> ' + this.point.anomaly + '</b><br></br>Average Temp: <b> ' + this.point.averageTemp + '</b><br></br>Average Humidity: <b> ' + this.point.averageHumidity + '</b>';
            }
        },
        series: [
            {
                data: data && data.getConsumptionAndWeatherDataWithAnomalies.length ? data.getConsumptionAndWeatherDataWithAnomalies.map((data) => ({
                    y: data.consumption,
                    x: new Date(data.timestamp).getTime(),
                    timestamp: data.timestamp,
                    anomaly: data.anomaly,
                    averageTemp: data.averageTemperature,
                    averageHumidity: data.averageHumidity
                })) : [],
                name: CHART_LABELS.EnergyConsumption,
                color: themeContext.secondary
            },
            {
                data: data && data.getConsumptionAndWeatherDataWithAnomalies.length ? data.getConsumptionAndWeatherDataWithAnomalies.map((data) => ({
                    y: data.averageTemperature,
                    timestamp: data.timestamp,
                    x: new Date(data.timestamp).getTime(),
                    averageHumidity: data.averageHumidity
                })) : [],
                name: CHART_LABELS.Temperature,
                color: themeContext.chartTemperature
            }
        ]
    };

    return (
        <Container>
            {!data && loading ? <Loader>Loading</Loader> : <HighchartsReact highcharts={Highcharts} options={options} />}
        </Container>
    )
}

export default Chart