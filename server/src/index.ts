import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import * as cors from 'cors'
import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString } from 'graphql'
import {
    weather,
    energyConsumption,
    energyConsumptionWeather
} from './types'
import FakeDB from './FakeDb'

const db = new FakeDB()

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    weather: {
      type: new GraphQLList(weather),
      resolve: () => {
        return db.getAllWeather()
      }
    },
    energyConsumption: {
        type: new GraphQLList(energyConsumption),
        resolve: () => {
            return db.getAllEnergyConsumption()
        }
    },
    anomalies: {
        type: new GraphQLList(energyConsumption),
        resolve: () => {
            return db.getAllAnomalies()
        }
    },
    getConsumptionAndWeatherDataWithAnomalies: {
        type: new GraphQLList(energyConsumptionWeather),
        args: {
          fromDate: {
            type: GraphQLString,
            defaultValue: null,
            description: "Get consumption data from specified date"
          },
          toDate: {
            type: GraphQLString,
            defaultValue: null,
            description: "Get consumption data to specified date"
          },
        },
        resolve: (_, { fromDate, toDate }) => {
            return db.getEnergyConsumptionWithAnomaliesAndWeather(fromDate, toDate)
        }
    }
  }
});

const schema = new GraphQLSchema({query: queryType});

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');