import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql'

const energyConsumption = new GraphQLObjectType({
    name: 'EnergyConsumption',
    description: 'Get energy consumption levels with timestamp',
    fields: {
      timestamp: { type: GraphQLString },
      consumption: { type: GraphQLFloat },
    }
  });

export default energyConsumption