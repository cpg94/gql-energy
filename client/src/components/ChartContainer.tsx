import React, { useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client';
import { FilterButton, FilterContainer } from './Chart.styles';
import Chart from './Chart'
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
}`

const ChartContainer = () => {
    const [getConsumptionData, { loading, data }] = useLazyQuery<{ getConsumptionAndWeatherDataWithAnomalies: IEnergyWeather[] }>(CONSUMPTION_ANOMALY);

    useEffect(() => {
        async function getData() {
            await getConsumptionData()
        }
        getData()
    }, [getConsumptionData])


    return (
        <div>
            <Chart data={data} loading={loading}/>
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

export default ChartContainer