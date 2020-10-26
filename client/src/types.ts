interface IEnergy {
    consumption: number;
    timestamp: string
}

interface IWeather {
    averageTemperature: number;
    averageHumidity: number;
    timestamp: string
}

export interface IEnergyWeather extends IEnergy, IWeather {
    anomaly: boolean;
}