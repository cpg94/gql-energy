import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLBoolean } from 'graphql'

const energyConsumptionWeather = new GraphQLObjectType({
    name: 'EnergyConsumptionWeather',
    description: 'Get energy consumption levels with average humidity and temp at that time',
    fields: {
      timestamp: { type: GraphQLString },
      averageTemperature: { type: GraphQLFloat },
      averageHumidity: { type: GraphQLFloat },
      consumption: { type: GraphQLFloat },
      anomaly: { type: GraphQLBoolean },
    }
  });

export default energyConsumptionWeather