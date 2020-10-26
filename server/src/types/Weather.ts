import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql'

const weather = new GraphQLObjectType({
    name: 'Weather',
    description: 'Get average temperature and humidity with timestamp',
    fields: {
      timestamp: { type: GraphQLString },
      averageTemperature: { type: GraphQLFloat },
      averageHumidity: { type: GraphQLFloat },
    }
  });

export default weather