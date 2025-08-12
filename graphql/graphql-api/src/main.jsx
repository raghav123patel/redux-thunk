
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import {client} from './client/apolloClient.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
