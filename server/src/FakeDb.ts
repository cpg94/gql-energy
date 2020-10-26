import weatherData from './weatherData'
import anomaliesData from './anomaliesData'
import energyConsumptionData from './energyConsumptionData'

function groupBy<T>(list: any[], key: string): Map<string, T> {
    const map = new Map();
    list.forEach((item) => {
        const value = item[key]
        if (value) {
            const collection = map.get(value);
            if (!collection) {
                map.set(value, item);
            }
        }
    });
    return map;
}

interface IEnergy {
    consumption: number;
    timestamp: string
}

interface IWeather {
    averageTemperature: number;
    averageHumidity: number;
    timestamp: string
}

interface IEnergyWeather extends IEnergy, IWeather {
    anomaly: boolean;
}

class FakeDB {
    getAllWeather(): IWeather[] {
        return weatherData
    }
    getAllEnergyConsumption(): IEnergy[] {
        return energyConsumptionData
    }
    getAllAnomalies(): IEnergy[] {
        return anomaliesData
    }
    getEnergyConsumptionWithAnomaliesAndWeather(fromDate?: string, toDate?: string): IEnergyWeather[] {
        const energyConsumptionDataGroupedByTimestamp = groupBy<IEnergy>(energyConsumptionData, 'timestamp');
        const weatherDataGroupedByTimestamp = groupBy<IWeather>(weatherData, 'timestamp');
        const anomaliesDataGroupedByTimestamp = groupBy<IEnergy>(anomaliesData, 'timestamp');

        let allTimes = [...energyConsumptionDataGroupedByTimestamp.keys()]

        if (fromDate && toDate) {
            allTimes = allTimes.filter((time) => {
                const fromAsDate = new Date(fromDate).getTime()
                const toAsDate = new Date(toDate).getTime()
                const currentAsDate = new Date(time.split('T')[0]).getTime()
                return currentAsDate <= toAsDate && currentAsDate >= fromAsDate
            })
        }

        return allTimes.reduce((acc: IEnergyWeather[], time) => {
            const weather = weatherDataGroupedByTimestamp.get(time)
            const energy = energyConsumptionDataGroupedByTimestamp.get(time)
            const anomaly = anomaliesDataGroupedByTimestamp.get(time)

            acc.push({
                ...weather,
                ...energy,
                anomaly: !!anomaly
            })

            return acc
        }, [])
    }
}

export default FakeDB