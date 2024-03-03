
import {ApolloClient , InMemoryCache, ApolloProvider } from '@apollo/client'
import Userlist from './Userlist'

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  })

  return (
    <ApolloProvider client={client}>

      <div className="flex justify-center">
        <Userlist />
      </div>
    </ApolloProvider>
  )
}

export default App
