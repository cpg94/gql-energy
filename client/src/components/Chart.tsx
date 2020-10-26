import React, { useContext, useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ThemeContext } from 'styled-components';
import { useLazyQuery, gql } from '@apollo/client';
import { FilterButton, FilterContainer, Loader } from './Chart.styles';
import { IEnergyWeather } from '../types';

const CONSUMPTION_ANOMALY = gql`
query GetConsumptionAndWeatherDataWithAnomalies($fromDate: String, $toDate: String) {
	getConsumptionAndWeatherDataWithAnomalies(fromDate: $fromDate, toDate: $toDate) {
    anomaly,
    timestamp,
    averageHumidity,
    averageTemperature,
    consumption
  }
}
`;

enum CHART_LABELS {
    Temperature = 'Temperature',
    EnergyConsumption = 'Energy Consumption'
}

const Chart = () => {
    const themeContext = useContext(ThemeContext);
    const [getConsumptionData, { loading, data }] = useLazyQuery<{ getConsumptionAndWeatherDataWithAnomalies: IEnergyWeather[] }>(CONSUMPTION_ANOMALY);

    useEffect(() => {
        getConsumptionData()
    }, [])

    if (loading) {
        return <Loader>LOADING</Loader>
    }

    if (!data) {
        return <div>No Data for range, please choose different date filter.</div>
    }

    const options = {
        chart: {
            type: 'spline',
            backgroundColor: themeContext.primary
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
            itemStyle: { "color": themeContext.text },
            itemHoverStyle: { "color": themeContext.textDarker }
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
                // Must be a better way of doing this? 😬
                if (this.series.name === CHART_LABELS.Temperature) {
                    return 'Time: <b> ' + this.point.timestamp + '<br></br>Average Temperature:<b> ' + this.point.y + '</b>  <br></br>Average Humidity: <b> ' + this.point.averageHumidity + '</b>';
                }
                return 'Time: <b> ' + this.point.timestamp + '<br></br>Energy Consumption:<b> ' + this.point.y + '</b>  <br></br>Anomaly: <b> ' + this.point.anomaly + '</b><br></br>Average Temp: <b> ' + this.point.averageTemp + '</b><br></br>Average Humidity: <b> ' + this.point.averageHumidity + '</b>';
            }
        },
        series: [
            {
                data: data.getConsumptionAndWeatherDataWithAnomalies.map((data) => ({
                    y: data.consumption,
                    x: new Date(data.timestamp).getTime(),
                    timestamp: data.timestamp,
                    anomaly: data.anomaly,
                    averageTemp: data.averageTemperature,
                    averageHumidity: data.averageHumidity
                })),
                name: CHART_LABELS.EnergyConsumption,
                color: themeContext.secondary
            },
            {
                data: data.getConsumptionAndWeatherDataWithAnomalies.map((data) => ({
                    y: data.averageTemperature,
                    timestamp: data.timestamp,
                    x: new Date(data.timestamp).getTime(),
                    averageHumidity: data.averageHumidity
                })),
                name: CHART_LABELS.Temperature,
                color: themeContext.chartTemperature
            }
        ]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <FilterContainer>
                <div>
                    <FilterButton first onClick={() => getConsumptionData({ variables: { fromDate: '2020-01-07', toDate: '2020-01-07' } })}>1D</FilterButton>
                    <FilterButton  onClick={() => getConsumptionData({ variables: { fromDate: '2020-01-05', toDate: '2020-01-07' } })}>3D</FilterButton>
                    <FilterButton  onClick={() => getConsumptionData({ variables: { fromDate: '2020-01-03', toDate: '2020-01-07' } })}>5D</FilterButton>
                    <FilterButton last onClick={() => getConsumptionData({ variables: { fromDate: '2020-01-01', toDate: '2020-01-07' } })}>7D</FilterButton>
                </div>
                <FilterButton first last onClick={() => getConsumptionData()}>
                    Reset
                </FilterButton>
            </FilterContainer>
        </div>
    )
}

export default Chart