import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GrqphQLNonNull, GraphQLSchema} from 'graphql'

const testtomers = [{
  id: 0,
  name: 'John Doe'
}, {
  id: 1,
  name: 'Jane Doe'
}, {
  id: 2,
  name: 'Johnny B.'
}]

const testType = new GraphQLObjectType({
  name: 'Test',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString}
  })
})

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      test: {
        type: testType,
        args: {
          id: {type: GraphQLInt}
        },
        resolve(parentVal, args) {
          for(let i = 0; i < testtomers.length; i++) {
            if(testtomers[i].id === args.id) {
              return testtomers[i]
            }
          }
        }
      }
  }
})

export default new GraphQLSchema({
  query: rootQuery
})