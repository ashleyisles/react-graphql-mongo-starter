import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export const Apollo = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  )
}
