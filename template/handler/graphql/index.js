import expressGraphQL from 'express-graphql'
import schema from './schema'

export default (app) => {
  app.use('/api', expressGraphQL({
    schema: schema,
    graphiql: true
  }))
}