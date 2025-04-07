import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 3,
        refetchOnMount: true,
        refetchOnReconnect: true,
        staleTime: 5000,
        cacheTime: 10000,
      },
    },
  }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ColorModeScript />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <App />
    </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
